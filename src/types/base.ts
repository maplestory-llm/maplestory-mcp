// Base response structure

export interface BaseApiResponse {
    count?: number;
}

export interface ApiError {
    error: {
        name: string;
        message: string;
    }
}
