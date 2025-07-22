import {Menu, Portal} from "@chakra-ui/react";
import {DefaultButton} from "@/components/ui/buttons.tsx";

export const MyAccount = () => {
    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <DefaultButton variant="outline" size="sm">
                    My Account
                </DefaultButton>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        <Menu.Item value="settings-a">
                            Settings
                        </Menu.Item>
                        <Menu.Item value="logout-a">
                            Logout
                        </Menu.Item>
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}