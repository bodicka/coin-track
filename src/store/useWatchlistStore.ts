import { create, type StateCreator } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

interface IActions {
    toggleWatchList: (coinId: string) => void;
}

interface IInitialState {
    watchlist: string[]
}
interface WatchListState extends IInitialState, IActions { };

const initialState: IInitialState = {
    watchlist: []
}

const watchlistStore: StateCreator<WatchListState, [['zustand/devtools', never], ['zustand/persist', unknown]]> = (set) => ({
    ...initialState,
    toggleWatchList: (coinId: string) =>
        set((state) =>
            ({ watchlist: state.watchlist.includes(coinId) ? state.watchlist.filter((id) => id !== coinId) : [...state.watchlist, coinId] }))
});

const useWatchlistStore = create<WatchListState>()(
    devtools(
        persist(watchlistStore, {
            name: "watchlist-storage",
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({ watchlist: state.watchlist })
        })
    )
);

export const useWatchList = () => useWatchlistStore(state => state.watchlist);
export const useToogleWatchList = () => useWatchlistStore.getState().toggleWatchList;
