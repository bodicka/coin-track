import { useQuery } from "@tanstack/react-query"
import { fetchCryptoApi } from "../api/cryptoApi"
import type { ICryptoMarkets } from "../types";

const useCryptoMarkets = () => {
    return useQuery<ICryptoMarkets[]>({
        queryKey: ["cryptoMarket"],
        queryFn: fetchCryptoApi,
        staleTime: 1000 * 60 * 5,
    })
}

export default useCryptoMarkets;

