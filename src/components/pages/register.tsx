import {Navbar} from "@/components/ui/navbar.tsx";
import {Flex} from "@chakra-ui/react";
import {Footer} from "@/components/ui/footer.tsx";
import {PageTitle} from "@/components/ui/pageTitle.tsx";
import {RegisterForm} from "@/components/ui/forms/registerForm.tsx";
import {useAuth} from "@/hooks/useAuth.ts";
import type {RegisterFormData} from "@/types/AuthTypes.ts";
import {register} from "@/api/authApi.ts";

export const Register = () => {
    const {setIsLoggedIn} = useAuth()

    const handleRegister = async (data: RegisterFormData): Promise<void> => {
        await register(data);
        setIsLoggedIn(true);
    }

    return (
        <Flex flexDirection="column" height="100vh">
            <Navbar />
            <PageTitle title="Register" />
            <RegisterForm onRegister={handleRegister}/>
            <Flex flex="1"/>
            <Footer />
        </Flex>
    )
}