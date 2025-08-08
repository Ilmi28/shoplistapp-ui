import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form";
import {FormInput, FormPasswordInput} from "@/components/ui/forms/formUtils.tsx";
import {LuLock, LuUser, LuMail} from "react-icons/lu";
import type {AxiosError} from "axios";
import {Flex} from "@chakra-ui/react";
import {OutlineButton} from "@/components/ui/buttons.tsx";
import {useState} from "react";

const schema = yup.object({
    username: yup.string()
        .min(3, "Username's min length is 3")
        .max(50, "Username's max length is 50")
        .required("Username is required"),
    email: yup.string().email("Email must be a valid email").required("Email is required"),
    password: yup.string().required("Password is required").matches(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must be at least 8 characters, include one uppercase letter, one number, and one special character"
    )
}).required();

interface Props {
    onRegister: ({username, email, password} : {username: string, email: string, password: string}) => Promise<void>;
}

type FormFields = yup.InferType<typeof schema>

export const RegisterForm = ({onRegister}: Props) => {
    const [loading, setLoading] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm({resolver: yupResolver(schema)});

    const onSubmit = async (data: FormFields): Promise<void> => {
        try {
            setLoading(true);
            await onRegister(data);
        } catch(err) {
            const apiError = err as AxiosError;
            if (apiError?.status === 409) {
                console.log(apiError)
                // @ts-ignore
                setError("password", {message: apiError.response?.data?.detail});
            } else {
                setError("password", {message: "Something went wrong! Try again later"});
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Flex width="100%" flexDirection="column" alignItems="center">
                <Flex width="400px" gap="5" flexDirection="column">
                    <FormInput {...register("username")} icon={<LuUser />} errMessage={errors.username?.message}/>
                    <FormInput {...register("email")} icon={<LuMail />} errMessage={errors.email?.message}/>
                    <FormPasswordInput {...register("password")} icon={<LuLock />} errMessage={errors.password?.message}/>
                </Flex>
                <OutlineButton mt="50px" type="submit" loading={loading}>Register</OutlineButton>
            </Flex>
        </form>
    )
}