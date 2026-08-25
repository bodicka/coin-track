import useCryptoMarkets from "../../hooks/useCryptoMarkets";
import { useWatchlistAction } from "../../hooks/useWatchlistAction";
import { useWatchList } from "../../store/useWatchlistStore";
import CardCoin from "../../ui/CardCoin/CardCoin";

const Watchlist = () => {
  const watchlist = useWatchList();
  const { data: coins } = useCryptoMarkets();
  const { handleToggle } = useWatchlistAction();
  const watchListFilter =
    coins?.filter((coin) => watchlist.includes(coin.id)) || [];

  return (
    <div>
      {watchListFilter?.map((coin) => (
        <CardCoin
          key={coin.id}
          coin={coin}
          isInWathcList={watchlist.includes(coin.id)}
          onToggleWatchlist={handleToggle}
          variant="WATCHLIST"
        />
      ))}
    </div>
  );
};

export default Watchlist;
