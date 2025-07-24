import {Button, type ButtonProps} from "@chakra-ui/react";
import {useColorModeValue} from "@/components/ui/color-mode.tsx";

interface AppButtonProps extends ButtonProps {
    href?: string | null;
}

export const OutlineButton = ( {children, ...props}: AppButtonProps) => {
    const colorPalette = useColorModeValue("yellow", "red");

    return <AppButton colorPalette={colorPalette} variant="outline" {...props}>{children}</AppButton>
}

export const NavbarButton = ( {children, ...props}: AppButtonProps) => {
    const colorPalette = useColorModeValue("yellow", "red");

    return <AppButton colorPalette={colorPalette} variant="ghost" {...props}>{children}</AppButton>
}

const AppButton = ({href, children, ...props} : AppButtonProps) => {
    return (
        href ? (
            <Button asChild {...props}>
                <a href={href}>{children}</a>
            </Button>
        ) : (
            <Button {...props}>{children}</Button>
        )
    )
}