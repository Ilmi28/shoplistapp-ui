import { useColorModeValue } from "@/components/ui/color-mode";
import { Box } from "@chakra-ui/react";

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
    const bg = useColorModeValue("white", "gray.800");

    return (
        <Box minHeight="100vh"
             minWidth="100vw"
             bg={bg}
             transition="background-color 200ms ease">
            {children}
        </Box>
    );
};