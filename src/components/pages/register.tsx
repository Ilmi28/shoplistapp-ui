import {Navbar} from "@/components/ui/navbar/navbar.tsx";
import {Flex} from "@chakra-ui/react";
import {Footer} from "@/components/ui/footer.tsx";

export const Register = () => {
    return (
        <Flex flexDirection="column" height="100vh">
            <Navbar />
            <Flex flex="1"/>
            <Footer />
        </Flex>
    )
}