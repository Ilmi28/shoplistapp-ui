import {LuLock, LuUser} from "react-icons/lu";
import {FormInput, FormPasswordInput} from "@/components/ui/forms/formUtils.tsx";
import {type ApiError} from "@/types/ApiTypes.ts";
import {useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import {Flex} from "@chakra-ui/react";
import {OutlineButton} from "@/components/ui/buttons.tsx";
import {useState} from "react";

const schema = yup.object({
    userIdentifier: yup.string().required("User identifier is required"),
    password: yup.string().required("Password is required"),
}).required()

interface Props {
    onLogin: ({userIdentifier, password} : {userIdentifier: string, password: string}) => Promise<void>;
}

type FormFields = yup.InferType<typeof schema>;

export const LoginForm = ({onLogin} : Props)=> {
    const [loading, setLoading] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async (data: FormFields) => {
        try {
            setLoading(true);
            await onLogin(data);
        } catch (error) {
            const apiError = error as ApiError;
            if (apiError?.status === 401) {
                setError("password", { message: "Invalid user identifier or password" });
            } else {
                setError("password", { message: "Something went wrong! Try again later!" });
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Flex width="100%" flexDirection="column" alignItems="center">
                <Flex width="400px" gap="5" flexDirection="column">
                    <FormInput {...register("userIdentifier")} errMessage={errors.userIdentifier?.message} icon={<LuUser />}/>
                    <FormPasswordInput {...register("password")} errMessage={errors.password?.message} icon={<LuLock />}/>
                </Flex>
                <OutlineButton mt="50px" type="submit" loading={loading}>Login</OutlineButton>
            </Flex>
        </form>
    )
}