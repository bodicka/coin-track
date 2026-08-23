import useCryptoMarkets from "../../hooks/useCryptoMarkets";
import { useWatchList } from "../../store/useWatchlistStore";
import CardCoin from "../../ui/CardCoin/CardCoin";

const Watchlist = () => {
  const watchlist = useWatchList();
  const { data: coins } = useCryptoMarkets();
  const watchListFilter = coins?.filter((coin) => watchlist.includes(coin.id)) || [];

  return (
    <div>
      {watchListFilter?.map((coin) => (
        <CardCoin key={coin.id} coin={coin} />
      ))}
    </div>
  );
};

export default Watchlist;
