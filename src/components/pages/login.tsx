import {PageTitle} from "@/components/ui/pageTitle.tsx";
import {LoginForm} from "@/components/ui/forms/loginForm.tsx";
import {login} from "@/api/authApi.ts";
import {useAuth} from "@/hooks/useAuth.ts";
import {Navigate, useNavigate} from "react-router-dom";
import {Navbar} from "@/components/ui/navbar.tsx";
import {Flex} from "@chakra-ui/react";
import {Footer} from "@/components/ui/footer.tsx";

export const Login = () => {
    const {isLoggedIn, setIsLoggedIn} = useAuth()
    const navigate = useNavigate();

    const onLogin = async ({userIdentifier, password} : {userIdentifier: string, password: string}) => {
        await login({userIdentifier, password});
        setIsLoggedIn(true);
        navigate("")
    }
    if (isLoggedIn)
        return <Navigate to="/" />

    return (
        <Flex flexDirection="column" height="100vh">
            <Navbar />
            <PageTitle>Login</PageTitle>
            <LoginForm onLogin={onLogin} />
            <Flex flex="1"/>
            <Footer />
        </Flex>
    )
}