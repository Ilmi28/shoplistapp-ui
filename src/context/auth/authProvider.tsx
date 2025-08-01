import {useState, type ReactNode, useEffect} from "react";
import { AuthContext } from "./authContext";
import type {GetUserData} from "@/types/UserTypes.ts";
import {getUser} from "@/api/userApi.ts";
import {refresh} from "@/api/authApi.ts";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<GetUserData | null>(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await getUser();
                console.log(response);
                if (response.status === 200) {
                    setIsLoggedIn(true);
                    setUser(response.data ?? null);
                } else {
                    setIsLoggedIn(false);
                    setUser(null);
                }
            } catch {
                setIsLoggedIn(false);
                setUser(null);
            }
        }

        const refreshToken = async () => {
            try {
                await refresh();
                setIsLoggedIn(true);
            } catch {
                setIsLoggedIn(false);
                setUser(null);
            }
        }

        checkAuth().catch(err => console.log(err));
        refreshToken().catch(err => console.log(err));
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};
