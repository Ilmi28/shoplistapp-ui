import {useAuth} from "@/hooks/useAuth.ts";
import {logout} from "@/api/authApi.ts";
import {Button, Menu, Portal, Text} from "@chakra-ui/react";
import {OutlineButton} from "@/components/ui/buttons.tsx";
import {LuLogOut, LuSettings, LuUser} from "react-icons/lu";

export const MyAccount = () => {
    const {setIsLoggedIn, user} = useAuth();

    const onLogout = async () => {
        await logout();
        setIsLoggedIn(false);
    }

    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <OutlineButton variant="outline" size="sm">
                    My Account
                </OutlineButton>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content width="200px">
                        <Button variant="outline" as={Menu.Item} disabled cursor="default">
                            <LuUser />
                            <Text maxW="200px" truncate>{user?.userName}</Text>
                        </Button>
                        <Button variant="outline" as={Menu.Item}><LuSettings />Settings</Button>
                        <Button variant="outline" as={Menu.Item} onClick={onLogout}><LuLogOut />Logout</Button>
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}