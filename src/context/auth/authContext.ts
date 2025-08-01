import {createContext} from "react";
import type {AuthContextType} from "@/types/AuthContextTypes.ts";

export const AuthContext = createContext<AuthContextType | undefined>(undefined);