import {useEffect, useState} from "react";
import type {GetUserData} from "@/types/UserTypes.ts";
import {getUser} from "@/api/userApi.ts";


export const useAuth = () => {
    const [user, setUser] = useState<GetUserData | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const updateUser = async () => {
            const response = await getUser();
            setUser(response.data ?? null);
            setIsLoggedIn(response.data !== null);
        }

        updateUser().catch((err) => {
            console.error("Failed to fetch user", err);
            setUser(null);
            setIsLoggedIn(false);
        });
    }, [])

    return {isLoggedIn, user};
}