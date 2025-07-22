import {Flex, Text} from "@chakra-ui/react"

interface Props {
    title: string
}

export const PageTitle = ({title} : Props) => {
    return (
        <Flex height="10vh" alignItems="center">
            <Text flex="1" textAlign="center" textStyle="5xl">{title}</Text>
        </Flex>
    )
}