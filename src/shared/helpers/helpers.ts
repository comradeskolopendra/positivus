import { API_URL } from "../constants/constants";

const request = async <T>(endpoint: string, params: object = {}): Promise<T> => {
    try {
        const response = await fetch(`${API_URL}/${endpoint}`, params);
        const data: Promise<T> = await response.json();

        return data;
    } catch (error) {
        console.log(`${endpoint}`, error);
    }
}

const isMobile = () => window.innerWidth <= 1240;

export {
    request,
    isMobile
};