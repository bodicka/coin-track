import type { ICryptoMarkets } from "../types";

const BASE_API_URL = import.meta.env.VITE_COINGECKO_API_URL;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const fetchCryptoApi = async (): Promise<ICryptoMarkets[]> => {
    await delay(1500);
    const response = await fetch(BASE_API_URL);
    if (!response.ok) throw new Error("Error to fetch on API");
    const data: ICryptoMarkets[] = await response.json();
    return data;
}