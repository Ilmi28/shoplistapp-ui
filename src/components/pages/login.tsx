import {Navbar} from "@/components/ui/navbar.tsx";
import {PageTitle} from "@/components/ui/pageTitle.tsx";
import {Footer} from "@/components/ui/footer.tsx";
import {Flex} from "@chakra-ui/react";
import {LoginForm} from "@/components/ui/forms/loginForm.tsx";
import {login} from "@/api/authApi.ts";
import {useAuth} from "@/hooks/useAuth.ts";

export const Login = () => {
    const {setIsLoggedIn} = useAuth()

    const onLogin = async ({userIdentifier, password} : {userIdentifier: string, password: string}) => {
        await login({userIdentifier, password});
        setIsLoggedIn(true);
    }

    return (
        <Flex flexDirection="column" height="100vh">
            <Navbar />
            <PageTitle title="Login"/>
            <LoginForm onLogin={onLogin}/>
            <Flex flex="1" />
            <Footer />
        </Flex>
    )
}