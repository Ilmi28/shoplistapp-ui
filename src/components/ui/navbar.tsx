import {Text, Flex, Box} from "@chakra-ui/react";
import {ColorModeIcon, useColorMode, useColorModeValue} from "@/components/ui/color-mode.tsx";
import {NavbarButton, OutlineButton} from "@/components/ui/buttons.tsx";
import {useAuth} from "@/hooks/useAuth.ts";
import {MyAccount} from "@/components/ui/myAccountMenu.tsx";

export const Navbar = () => {
    const icon = ColorModeIcon();
    const {toggleColorMode} = useColorMode();
    const backgroundColor = useColorModeValue("gray.100", "gray.950");
    const {isLoggedIn} = useAuth();

    return (
        <Flex height="6vh" backgroundColor={backgroundColor} alignItems="center" justifyContent="flex-end" width="100%">
            <Text textStyle="2xl" ml="10px"><a href="/">ShopListApp</a></Text>
            <Box ml="50px">
                <NavbarButton href="/">Home</NavbarButton>
                <NavbarButton href="/products">Products</NavbarButton>
                <NavbarButton href="/about">About</NavbarButton>
            </Box>
            <Flex flex="1"/>
            <Flex mr="10px" gap="2" alignItems="center">
                <OutlineButton size="xs" onClick={toggleColorMode} justifyContent="left">{icon}</OutlineButton>
                    {isLoggedIn ? <MyAccount /> : (
                        <>
                            <OutlineButton href="/login">Login</OutlineButton>
                            <OutlineButton href="/register">Register</OutlineButton>
                        </>
                    )}
            </Flex>
        </Flex>
    )
}