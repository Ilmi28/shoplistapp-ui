import {useState, type ReactNode, useEffect} from "react";
import { AuthContext } from "./authContext";
import type {GetUserData} from "@/types/UserTypes.ts";
import {getUser} from "@/api/userApi.ts";
import {refresh} from "@/api/authApi.ts";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<GetUserData | null>(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const tryRefresh = async () => {
            const refreshResponse = await refresh();
            if (refreshResponse.status === 204) {
                const userResponse = await getUser();
                setIsLoggedIn(true);
                setUser(userResponse.data ?? null);
            }
        }
        setLoading(true);
        tryRefresh().catch(() => {
            setIsLoggedIn(false);
            setUser(null);
        }).finally(() => setLoading(false));
    }, []);


    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
