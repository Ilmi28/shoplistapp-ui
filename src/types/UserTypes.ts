export type GetUserData = {
    userName: string;
    email: string;
}

export type UpdateUserData = {
    userName?: string;
    email?: string;
    currentPassword: string;
    newPassword?: string;
}

export type DeleteUserData = {
    password: string;
}