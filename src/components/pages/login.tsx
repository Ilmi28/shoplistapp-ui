import {Navbar} from "@/components/ui/navbar/navbar.tsx";
import {PageTitle} from "@/components/ui/pageTitle.tsx";
import {Footer} from "@/components/ui/footer.tsx";
import {Flex} from "@chakra-ui/react";
import {LoginForm} from "@/components/ui/forms/loginForm.tsx";
import {login} from "@/api/authApi.ts";

export const Login = () => {
    const onLogin = async ({userIdentifier, password} : {userIdentifier: string, password: string}) => {
        await login({userIdentifier, password});
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