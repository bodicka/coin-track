import useCryptoMarkets from "../../hooks/useCryptoMarkets";
import { useWatchlistAction } from "../../hooks/useWatchlistAction";
import { useWatchList } from "../../store/useWatchlistStore";
import CardCoin from "../../ui/CardCoin/CardCoin";
import ErrorState from "../../ui/ErrorState/ErrorState";

const Watchlist = () => {
  const watchlist = useWatchList();
  const { data: coins, error } = useCryptoMarkets();
  const { handleToggle } = useWatchlistAction();
  const watchListFilter =
    coins?.filter((coin) => watchlist.includes(coin.id)) || [];

  if (error) {
    return <ErrorState />;
  }

  return (
    <div>
      {watchListFilter?.map((coin) => (
        <CardCoin
          key={coin.id}
          coin={coin}
          isInWatchlist={watchlist.includes(coin.id)}
          onToggleWatchlist={handleToggle}
          variant="WATCHLIST"
        />
      ))}
    </div>
  );
};

export default Watchlist;
