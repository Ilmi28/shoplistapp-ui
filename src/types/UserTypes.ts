export type GetUserData = {
    userName: string;
    email: string;
}

export type UpdateUserInfo = {
    userName: string;
    email: string;
    currentPassword: string;
}

export type UpdateUserPassword = {
    currentPassword: string;
    newPassword: string;
}

export type UpdateUser = {
    userName: string | null;
    email: string | null;
    currentPassword: string;
    newPassword: string | null;
}

export type DeleteUserData = {
    password: string;
}