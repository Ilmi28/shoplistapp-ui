import {Flex, Input, InputGroup, Text, type InputProps} from "@chakra-ui/react"
import {PasswordInput} from "@/components/ui/password-input.tsx";
import {type ReactNode} from "react";

interface FormInputProps extends InputProps{
    placeholder?: string | undefined;
    icon?: ReactNode | null;
    errMessage?: string | null;
}

export const FormInput = ({placeholder, icon, errMessage, ...props} : FormInputProps) => {
    return (
        <Flex flexDirection="column" gap="1">
            <InputGroup startElement={icon}>
                <Input variant="flushed" placeholder={placeholder} {...props}/>
            </InputGroup>
            {errMessage && <Text textStyle="xs" color="red.500">{errMessage}</Text>}
        </Flex>
    )
}

export const FormPasswordInput = ({placeholder, icon, errMessage, ...props} : FormInputProps) => {
    return (
        <Flex flexDirection="column" gap="1">
            <InputGroup startElement={icon}>
                <PasswordInput variant="flushed" placeholder={placeholder} {...props}/>
            </InputGroup>
            {errMessage && <Text textStyle="xs" color="red.500">{errMessage}</Text>}
        </Flex>
    )
}
