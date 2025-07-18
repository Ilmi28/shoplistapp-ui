import { apiClient } from './apiClient';
import type { ApiResponse } from "../types/ApiResponse.ts";
import type { GetUserData } from "../types/UserTypes.ts";

export async function GetUser(): Promise<ApiResponse<GetUserData>> {
    const response = await apiClient.get<GetUserData>('api/user/get');
    return {
        status: response.status,
        data: response.data
    }
}