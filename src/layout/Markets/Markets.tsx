import { ClipLoader } from "react-spinners";
import CardCoin from "../../ui/CardCoin/CardCoin";
import styles from "./Markets.module.scss";
import useCryptoMarkets from "../../hooks/useCryptoMarkets";
import { useWatchList } from "../../store/useWatchlistStore";
import { useWatchlistAction } from "../../hooks/useWatchlistAction";

const Markets = () => {
  const watchlist = useWatchList();
  const { data: coins, isLoading } = useCryptoMarkets();
  const { handleToggle } = useWatchlistAction();

  if (isLoading) {
    return (
      <div className={styles.loaderCenterTo}>
        <ClipLoader color="#3b82f6" size={50} />
      </div>
    );
  }

  return (
    <div className={styles.containerGrid}>
      {coins?.map((coin) => (
        <CardCoin
          key={coin.id}
          coin={coin}
          isInWathcList={watchlist.includes(coin.id)}
          onToggleWatchlist={handleToggle}
        />
      ))}
    </div>
  );
};

export default Markets;
