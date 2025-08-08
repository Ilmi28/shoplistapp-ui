import {useAuth} from "@/hooks/useAuth.ts";
import {logout} from "@/api/authApi.ts";
import {Button, Menu, Portal, Spinner, Text} from "@chakra-ui/react";
import {OutlineButton} from "@/components/ui/buttons.tsx";
import {LuLogOut, LuSettings, LuShoppingBasket, LuUser} from "react-icons/lu";

export const MyAccount = () => {
    const {setIsLoggedIn, user, setUser, loading} = useAuth();

    const onLogout = async () => {
        await logout();
        setIsLoggedIn(false);
        setUser(null);
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
                        {
                            loading ? <Spinner size="sm" /> :
                                <Button variant="outline" as={Menu.Item} disabled cursor="default">
                                    <LuUser />
                                    <Text maxW="200px" truncate>{user?.userName}</Text>
                                </Button>
                        }
                        <Button variant="outline" as={Menu.Item} asChild width="188px"><a href="/shoplist/my"><LuShoppingBasket />My Lists</a></Button>
                        <Button variant="outline" as={Menu.Item} asChild width="188px"><a href="/settings"><LuSettings />Settings</a></Button>
                        <Button variant="outline" as={Menu.Item} onClick={onLogout}><LuLogOut />Logout</Button>
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}