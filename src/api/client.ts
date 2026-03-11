import dotenv from "dotenv";

dotenv.config();

const BASE_URL = "https://open.api.nexon.com/maplestory/v1"
const headers = { "x-nxopen-api-key": process.env.NEXON_API_KEY! }

export class NexonApiError extends Error {
    constructor(
        public readonly status: number,
        public readonly code: string,
        message: string
    ) {
        super(message)
        this.name = "NexonApiError"
    }
}

export async function nexonFetch<T>(path: string): Promise<T> {
    const res = await fetch(`${BASE_URL}${path}`, {headers: headers})
    if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new NexonApiError(
            res.status,
            body.error?.name ?? "Unknown",
            body.error?.message ?? `HTTP ${res.status}`
        )
    }

    return await res.json() as T;
}
