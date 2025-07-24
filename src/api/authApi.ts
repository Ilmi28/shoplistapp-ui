import { apiClient } from './apiClient';
import type { LoginFormData, RegisterFormData } from "@/types/AuthTypes.ts";
import type { ApiTypes } from "@/types/ApiTypes.ts";

export async function login(loginData: LoginFormData) {
    const response = await apiClient.post('api/auth/login', loginData);
    return {
        status: response.status
    };
}

export async function logout(): Promise<ApiTypes<void>> {
    const response = await apiClient.post('api/auth/logout');
    return {
        status: response.status,
    }
}

export async function register(registerData: RegisterFormData): Promise<ApiTypes<void>> {
    const response = await apiClient.post('api/auth/register', registerData);
    return {
        status: response.status,
    }
}

export async function refresh(): Promise<ApiTypes<void>> {
    const response = await apiClient.post('api/auth/refresh');
    return {
        status: response.status,
    }
}