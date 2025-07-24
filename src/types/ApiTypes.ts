export type ApiTypes<T> = {
    status: number;
    data?: T;
};

export type ApiError = {
    status?: number;
    message?: string;
}