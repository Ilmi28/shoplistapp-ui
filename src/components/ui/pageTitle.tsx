import {Flex, Text} from "@chakra-ui/react"
import type {ReactNode} from "react";

interface Props {
    children: ReactNode
}

export const PageTitle = ({children} : Props) => {
    return (
        <Flex height="10vh" alignItems="center">
            <Text flex="1" textAlign="center" textStyle="5xl">{children}</Text>
        </Flex>
    )
}