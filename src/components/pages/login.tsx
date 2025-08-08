import {PageTitle} from "@/components/ui/pageTitle.tsx";
import {LoginForm} from "@/components/ui/forms/loginForm.tsx";
import {login} from "@/api/authApi.ts";
import {useAuth} from "@/hooks/useAuth.ts";
import {useNavigate} from "react-router-dom";
import {Navbar} from "@/components/ui/navbar.tsx";
import {Flex} from "@chakra-ui/react";
import {Footer} from "@/components/ui/footer.tsx";
import {getUser} from "@/api/userApi.ts";
import {useEffect} from "react";

export const Login = () => {
    const {isLoggedIn, setIsLoggedIn, setUser} = useAuth()
    const navigate = useNavigate();

    const onLogin = async ({userIdentifier, password} : {userIdentifier: string, password: string}) => {
        await login({userIdentifier, password});
        setIsLoggedIn(true);
        const response = await getUser();
        setUser(response.data ?? null);
        navigate("/")
    }

    useEffect(() => {
        if (isLoggedIn)
            navigate("/");
    })

    return (
        <Flex flexDirection="column" minHeight="100vh" alignItems="center">
            <Navbar />
            <PageTitle>Login</PageTitle>
            <LoginForm onLogin={onLogin} />
            <Flex flex="1"/>
            <Footer />
        </Flex>
    )
}