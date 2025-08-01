import {useContext} from "react";
import {AuthContext} from "@/context/auth/authContext.ts";
import type {AuthContextType} from "@/types/AuthContextTypes.ts";

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within AuthProvider");
    return context;
};