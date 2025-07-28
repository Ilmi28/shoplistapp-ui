import {createContext} from "react";
import type {AuthContextType} from "@/context/auth/authProvider.tsx";

export const AuthContext = createContext<AuthContextType | undefined>(undefined);