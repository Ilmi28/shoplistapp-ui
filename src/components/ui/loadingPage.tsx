import {Flex, Spinner} from "@chakra-ui/react";
import {Navbar} from "@/components/ui/navbar.tsx";
import {Footer} from "@/components/ui/footer.tsx";


export const LoadingPage = () => {
    return (
        <Flex flexDirection="column" height="100vh" alignItems="center">
            <Navbar />
            <Spinner mt="20px"/>
            <Flex flex="1"/>
            <Footer />
        </Flex>
    )
}