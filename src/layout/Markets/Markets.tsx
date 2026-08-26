import { ClipLoader } from "react-spinners";
import CardCoin from "../../ui/CardCoin/CardCoin";
import ErrorState from "../../ui/ErrorState/ErrorState";
import styles from "./Markets.module.scss";
import useCryptoMarkets from "../../hooks/useCryptoMarkets";
import { useWatchList } from "../../store/useWatchlistStore";
import { useWatchlistAction } from "../../hooks/useWatchlistAction";

const Markets = () => {
  const watchlist = useWatchList();
  const { data: coins, isLoading, error } = useCryptoMarkets();
  const { handleToggle } = useWatchlistAction();

  if (isLoading) {
    return (
      <div className={styles.loaderCenterTo}>
        <ClipLoader color="#3b82f6" size={50} />
      </div>
    );
  }

  if (error) {
    return <ErrorState />;
  }

  return (
    <div className={styles.containerGrid}>
      {coins?.map((coin) => (
        <CardCoin
          key={coin.id}
          coin={coin}
          isInWatchlist={watchlist.includes(coin.id)}
          onToggleWatchlist={handleToggle}
        />
      ))}
    </div>
  );
};

export default Markets;
