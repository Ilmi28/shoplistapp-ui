import { Navbar } from "@/components/ui/navbar.tsx";
import {Flex} from "@chakra-ui/react";
import {Footer} from "@/components/ui/footer.tsx";

export const Home = () => {
    return (
        <Flex flexDirection="column" height="100vh" overflow="hidden">
            <Navbar />
            <Flex flex="1"/>
            <Footer />
        </Flex>
    )
}