import {Flex, Heading} from "@chakra-ui/react"
import type {ReactNode} from "react";

interface Props {
    children: ReactNode
}

export const PageTitle = ({children} : Props) => {
    return (
        <Flex height="10vh" mt="30px">
            <Heading flex="1" size="5xl">{children}</Heading>
        </Flex>
    )
}