import axios from 'axios'

export const apiClient = axios.create({
    baseURL: 'https://localhost:7278',
    withCredentials: true
})

export const handleApiError = (error: unknown) => {
    if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const message = error.response?.data?.message || error.message;

        console.error(`API Error [${status}]: ${message}`);
    } else {
        console.error('Unknown error:', error);
    }
};