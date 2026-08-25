import toast from "react-hot-toast";
import { useToogleWatchList, useWatchList } from "../store/useWatchlistStore"
import type { ICryptoMarkets } from "../types";

export const useWatchlistAction = () => {
    const watchlist = useWatchList();
    const toggleWatchList = useToogleWatchList();

    const handleToggle = (coin: ICryptoMarkets) => {
        const isAlreadyInWatchlist = watchlist.includes(coin.id);

        toggleWatchList(coin.id);

        if (isAlreadyInWatchlist) {
            toast.error(`${coin.name} удалена из Watchlist 🗑️`)
        } else {
            toast.success(`${coin.name} добавлена в Watchlist 🚀`)
        }
    }

    return { handleToggle }
}