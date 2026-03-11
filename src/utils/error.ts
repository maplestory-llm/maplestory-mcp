import { NexonApiError } from "../api/client.js";

export function formatError(e: unknown): string {
    if (e instanceof NexonApiError) {
        switch (e.status) {
            case 400:
                return "유효한 OCID가 아닙니다."
            case 403:
                return "API 키가 유효하지 않습니다."
            case 404:
                return "존재하지 않는 API 호출입니다."
            case 429:
                return "API 요청 한도를 초과했습니다. 잠시 후 다시 시도해주세요."
            case 500:
                return "메이플스토리 서버 점검 중입니다."
            default:
                return `Nexon API 오류: ${e.message}`
        }
    }

    return "알 수 없는 오류가 발생했습니다."
}
