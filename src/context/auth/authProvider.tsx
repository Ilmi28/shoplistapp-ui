import {useState, type ReactNode} from "react";
import { AuthContext } from "./authContext";

export type AuthContextType = {
    isLoggedIn: boolean;
    setIsLoggedIn: (loggedIn: boolean) => void;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};
