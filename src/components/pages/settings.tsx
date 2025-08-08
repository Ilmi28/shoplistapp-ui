import {Navbar} from "@/components/ui/navbar.tsx";
import {Flex, Heading} from "@chakra-ui/react";
import {Footer} from "@/components/ui/footer.tsx";
import {PageTitle} from "../ui/pageTitle";
import {useAuth} from "@/hooks/useAuth.ts";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {LoadingPage} from "@/components/ui/loadingPage.tsx";
import {AccountInfoForm} from "@/components/ui/forms/accountInfoForm.tsx";


export const Settings = () => {
    const {isLoggedIn, loading} = useAuth();
    const navigate = useNavigate();


    useEffect(() => {
        console.log(isLoggedIn);
        if (!isLoggedIn && !loading)
            navigate("/login");
    }, [loading, isLoggedIn, navigate]);

    if (loading)
        return <LoadingPage />

    return (
        <Flex flexDirection="column" minHeight="100vh" alignItems="center">
            <Navbar />
            <PageTitle>Settings</PageTitle>
            <Flex alignItems="left" width="90%" flexDirection="column">
                <Heading size="3xl">Account Information</Heading>
                <AccountInfoForm />
                <Heading size="3xl">Delete Account</Heading>
            </Flex>
            <Flex flex="1"/>
            <Footer />
        </Flex>
    )

}