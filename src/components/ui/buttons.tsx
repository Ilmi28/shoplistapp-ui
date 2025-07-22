import {Button, type ButtonProps} from "@chakra-ui/react";
import {useColorModeValue} from "@/components/ui/color-mode.tsx";

export const DefaultButton = ({children, ...props}: ButtonProps) => {
    const colorPalette = useColorModeValue("yellow", "red");
    const variant = useColorModeValue("outline", "outline");

    return <Button colorPalette={colorPalette} variant={variant} {...props}>{children}</Button>
}