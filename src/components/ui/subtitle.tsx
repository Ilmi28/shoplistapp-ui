import {Flex, Heading} from "@chakra-ui/react";
import type {ReactNode} from "react";


export const Subtitle = ({children} : {children: ReactNode}) => {
    return (
        <Flex alignItems="left">
            <Heading size="3xl">{children}</Heading>
        </Flex>
    )
}