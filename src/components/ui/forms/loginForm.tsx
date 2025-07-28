import {LuLock, LuUser} from "react-icons/lu";
import {FormInput, FormPasswordInput} from "@/components/ui/formUtils.tsx";
import {AppForm} from "./appForm.tsx"
import {type ApiError} from "@/types/ApiTypes.ts";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object({
    userIdentifier: yup.string().required(),
    password: yup.string().required(),
}).required()

interface Props {
    onLogin: ({userIdentifier, password} : {userIdentifier: string, password: string}) => Promise<void>;
}

type FormFields = yup.InferType<typeof schema>;

export const LoginForm = ({onLogin} : Props)=> {


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
            await onLogin(data);
        } catch (error) {
            const apiError = error as ApiError;
            if (apiError?.status === 401) {
                setError("password", { message: "Invalid user identifier or password" });
            } else {
                setError("password", { message: "Something went wrong! Try again later!" });
            }
        }
    }

    return (
        <AppForm onSubmit={handleSubmit(onSubmit)} buttonName="Login">
            <FormInput {...register("userIdentifier")} errMessage={errors.userIdentifier?.message} icon={<LuUser />}/>
            <FormPasswordInput {...register("password")} errMessage={errors.password?.message} icon={<LuLock />}/>
        </AppForm>
    )
}