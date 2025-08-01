import {type FormEvent, type ReactNode, useState} from "react";
import {Flex} from "@chakra-ui/react";
import {OutlineButton} from "@/components/ui/buttons.tsx";

interface Props {
    children: ReactNode;
    onSubmit: () => Promise<void>;
    buttonName: string;
}

export const AppForm = ({children, onSubmit, buttonName} : Props) => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        await onSubmit();
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Flex width="100%" flexDirection="column" alignItems="center">
                <Flex width="400px" gap="5" flexDirection="column">
                    {children}
                </Flex>
                <OutlineButton mt="50px" type="submit" loading={loading}>{buttonName}</OutlineButton>
            </Flex>
        </form>
    )
}