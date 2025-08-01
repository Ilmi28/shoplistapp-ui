import {Navbar} from "@/components/ui/navbar.tsx";
import {Flex, Text} from "@chakra-ui/react";
import {PageTitle} from "../ui/pageTitle";
import {Footer} from "@/components/ui/footer.tsx";


export const About = () => {
    return (
        <Flex flexDirection="column" height="100vh" alignItems="center">
            <Navbar />
            <PageTitle>About</PageTitle>
            <Text width="500px" mt="100px"></Text>
            <Flex flex="1"/>
            <Footer />
        </Flex>
    )
}