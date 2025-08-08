import {FormInput, FormPasswordInput} from "@/components/ui/forms/formUtils.tsx";
import {useState} from "react";
import * as yup from "yup"
import type {AxiosError} from "axios";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Flex} from "@chakra-ui/react";
import {OutlineButton} from "@/components/ui/buttons.tsx";
import {updateUserInformation} from "@/api/userApi.ts";
import { useAuth } from "@/hooks/useAuth";
import {toaster} from "@/components/ui/toaster.tsx";


const schema = yup.object({
    userName: yup.string()
        .required("Username can't be empty")
        .min(3, "Username's min length is 3")
        .max(50, "Username's max length is 50"),
    email: yup.string()
        .email("Email must be a valid email")
        .required("Email can't be empty"),
    currentPassword: yup.string().required("Password is required"),
})

type FormFields = yup.InferType<typeof schema>;

export const AccountInfoForm = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [changed, setChanged] = useState<boolean>(false);
    const {user} = useAuth()

    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors }
    } = useForm({resolver: yupResolver(schema)});

    const onSubmit = async (data: FormFields) => {
        try {
            setLoading(true);
            const response = await updateUserInformation(data);
            toaster.create({
                type: "info",
                description: "User updated successfully",
            })
            if (response.status === 204) {
                toaster.create({
                    type: "success",
                    description: "User updated successfully",
                })
            }

        } catch (err) {
            const apiError = err as AxiosError;
            console.info(data);
            console.error(apiError);
            if (apiError?.status === 401) {
                setError("currentPassword", {message: "Password is invalid."})
            } else if (apiError?.status === 409) {
                // @ts-ignore
                setError("currentPassword", {message: apiError.response?.data?.detail});
            }
        } finally {
            setLoading(false);
        }
    }

    const onCancel = () => {
        setLoading(false);
        setChanged(false);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Flex alignItems="left" flexDirection="column" width="300px" mt="20px">
                <FormInput {...register("userName")}
                           errMessage={errors.userName?.message}
                           defaultValue={user?.userName}
                           placeholder="Username"
                           onChange={(e) => {
                               setChanged(true)
                               register("userName").onChange(e)
                }}/>
                <FormInput {...register("email")}
                           errMessage={errors.email?.message}
                           placeholder="Email" defaultValue={user?.email}
                           onChange={(e) => {
                               setChanged(true)
                               register("email").onChange(e)
                }}/>
                <FormPasswordInput {...register("currentPassword")}
                                   errMessage={errors.currentPassword?.message}
                                   placeholder="Current password"
                                   disabled={!changed}/>
                <Flex alignItems="left" mt="30px">
                    <OutlineButton loading={loading} type="submit">Save</OutlineButton>
                    <OutlineButton ml="10px" disabled={!changed} onClick={onCancel}>Cancel</OutlineButton>
                </Flex>
            </Flex>
        </form>
    )
}