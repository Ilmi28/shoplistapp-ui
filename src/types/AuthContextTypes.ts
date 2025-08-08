import type {GetUserData} from "@/types/UserTypes.ts";

export type AuthContextType = {
    isLoggedIn: boolean;
    setIsLoggedIn: (loggedIn: boolean) => void;
    user: GetUserData | null;
    setUser: (user: GetUserData | null) => void;
    loading: boolean;
};