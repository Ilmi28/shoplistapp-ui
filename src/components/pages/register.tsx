import {Navbar} from "@/components/ui/navbar.tsx";
import {Flex} from "@chakra-ui/react";
import {Footer} from "@/components/ui/footer.tsx";
import {PageTitle} from "@/components/ui/pageTitle.tsx";
import {RegisterForm} from "@/components/ui/forms/registerForm.tsx";
import {useAuth} from "@/hooks/useAuth.ts";
import type {RegisterFormData} from "@/types/AuthTypes.ts";
import {register} from "@/api/authApi.ts";
import {Navigate} from "react-router-dom";

export const Register = () => {
    const {isLoggedIn, setIsLoggedIn} = useAuth()

    const handleRegister = async (data: RegisterFormData): Promise<void> => {
        await register(data);
        setIsLoggedIn(true);
    }

    if (isLoggedIn)
        return <Navigate to="/" />

    return (
        <Flex flexDirection="column" minHeight="100vh" alignItems="center">
            <Navbar />
            <PageTitle>Register</PageTitle>
            <RegisterForm onRegister={handleRegister}/>
            <Flex flex="1"/>
            <Footer />
        </Flex>
    )
}