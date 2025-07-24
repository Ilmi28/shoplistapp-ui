import { apiClient } from './apiClient';
import type { ApiTypes } from "@/types/ApiTypes.ts";
import type { GetUserData } from "@/types/UserTypes.ts";

export async function getUser(): Promise<ApiTypes<GetUserData>> {
    const response = await apiClient.get<GetUserData>('api/user/get');
    return {
        status: response.status,
        data: response.data
    }
}