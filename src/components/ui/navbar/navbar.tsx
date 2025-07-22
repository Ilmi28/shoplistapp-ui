import {Text, Flex} from "@chakra-ui/react";
import {ColorModeIcon, useColorMode, useColorModeValue} from "@/components/ui/color-mode.tsx";
import {DefaultButton} from "@/components/ui/buttons.tsx";
import {MyAccount} from "@/components/ui/navbar/myAccountDropdown.tsx";
import {useAuth} from "@/hooks/useAuth.tsx";

export const Navbar = () => {
    const icon = ColorModeIcon();
    const { toggleColorMode } = useColorMode();
    const backgroundColor = useColorModeValue("gray.100", "gray.900");
    const {isLoggedIn} = useAuth();

    return (
        <Flex height="6vh" backgroundColor={backgroundColor} alignItems="center" justifyContent="flex-end">
            <Text textStyle="2xl" ml="10px" flex="1">ShopListApp</Text>
            <Flex mr="10px" gap="2" alignItems="center">
                <DefaultButton size="xs" onClick={toggleColorMode} justifyContent="left">{icon}</DefaultButton>
                    {isLoggedIn ? <MyAccount /> : (
                        <>
                            <DefaultButton>Login</DefaultButton>
                            <DefaultButton>Register</DefaultButton>
                        </>
                    )}
            </Flex>
        </Flex>
    )
}