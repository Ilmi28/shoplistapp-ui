import { Flex, Text, Link, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {useColorModeValue} from "@/components/ui/color-mode.tsx";

export const Footer = () => {
    const backgroundColor = useColorModeValue("gray.100", "gray.950");

    return (
        <Flex
            as="footer"
            height="10vh"
            width="100%"
            px="6"
            align="center"
            justify="space-between"
            backgroundColor={backgroundColor}
            fontSize="sm"
        >
            <Text>&copy; {new Date().getFullYear()} ShopListApp. All rights reserved.</Text>

            <Flex gap="4">
                <Link href="https://github.com/Ilmi28" target="_blank" rel="noopener noreferrer">
                    <Icon as={FaGithub} boxSize="5" />
                </Link>
                <Link href="https://www.linkedin.com/in/ilmi-aliev-67240727a" target="_blank" rel="noopener noreferrer">
                    <Icon as={FaLinkedin} boxSize="5" />
                </Link>
            </Flex>
        </Flex>
    );
};