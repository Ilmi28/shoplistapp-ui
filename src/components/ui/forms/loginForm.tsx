import {type ChangeEvent, useState} from "react";
import {Flex} from "@chakra-ui/react";
import {LuLock, LuUser} from "react-icons/lu";
import {OutlineButton} from "@/components/ui/buttons.tsx";
import {FormInput, FormPasswordInput} from "@/components/ui/formUtils.tsx";
import {type ApiError} from "@/types/ApiTypes.ts";

interface LoginFormProps {
    onLogin: ({userIdentifier, password} : {userIdentifier: string, password: string}) => Promise<void>;
}

export const LoginForm = ({onLogin} : LoginFormProps)=> {
    const [userIdentifier, setUserIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [loginError, setLoginError] = useState<string | null>(null);

    const handleLogin = async () => {
        setLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            await onLogin({ userIdentifier, password });
        } catch (error) {
            const apiError = error as ApiError;
            if (apiError?.status === 401) {
                setLoginError("Invalid user identifier or password");
            } else {
                setLoginError("Something went wrong! Try again later!");
            }
        } finally {
            setLoading(false);
        }
    }

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setLoginError(null);
    }

    const handleUserIdentifierChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserIdentifier(e.target.value);
        setLoginError(null);
    }

    return (
        <Flex width="100vw" flexDirection="column" alignItems="center">
            <Flex width="400px" gap="5" flexDirection="column">
                <FormInput placeholder="Username or email" icon={<LuUser />} onChange={handleUserIdentifierChange}/>
                <FormPasswordInput placeholder="Password" icon={<LuLock />} errMessage={loginError} onChange={handlePasswordChange}/>
            </Flex>
            <OutlineButton mt="20px" size="lg" onClick={handleLogin} loading={loading}>Login</OutlineButton>
        </Flex>
    )
}