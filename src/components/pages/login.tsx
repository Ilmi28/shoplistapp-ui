import {Navbar} from "@/components/ui/navbar/navbar.tsx";
import {PageTitle} from "@/components/ui/pageTitle.tsx";
import {Footer} from "@/components/ui/footer.tsx";
import {Flex} from "@chakra-ui/react";

export const Login = () => {
    return (
        <Flex flexDirection="column" height="100vh">
            <Navbar />
            <PageTitle title="Login"/>
            <Flex flex="1" />
            <Footer />
        </Flex>
    )
}