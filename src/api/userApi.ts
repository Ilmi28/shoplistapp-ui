import { apiClient } from './apiClient';
import type { ApiTypes } from "@/types/ApiTypes.ts";
import type {GetUserData, UpdateUser, UpdateUserInfo, UpdateUserPassword} from "@/types/UserTypes.ts";
import {refresh} from "@/api/authApi.ts";

export async function getUser(): Promise<ApiTypes<GetUserData>> {
    const response = await apiClient.get<GetUserData>('api/user/get');
    return {
        status: response.status,
        data: response.data
    }
}

export async function updateUserInformation(updateUserInfoData: UpdateUserInfo): Promise<ApiTypes<void>> {
    const updateUserData: UpdateUser = {
        userName: updateUserInfoData.userName,
        email: updateUserInfoData.email,
        currentPassword: updateUserInfoData.currentPassword,
        newPassword: null
    }
    const response = await apiClient.put('api/user/update', updateUserData);
    return {
        status: response.status
    }
}

export async function updateUserPassword(updateUserPasswordData: UpdateUserPassword): Promise<ApiTypes<void>> {
    const updateUserData: UpdateUser = {
        userName: null,
        email: null,
        currentPassword: updateUserPasswordData.currentPassword,
        newPassword: updateUserPasswordData.newPassword
    }
    const response = await apiClient.put('api/user/update', updateUserData);
    return {
        status: response.status
    }
}