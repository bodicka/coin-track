import { ClipLoader } from "react-spinners";
import CardCoin from "../../ui/CardCoin/CardCoin";
import styles from "./Markets.module.scss";
import useCryptoMarkets from "../../hooks/useCryptoMarkets";

const Markets = () => {
  const { data: coins, isLoading } = useCryptoMarkets();

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
        <CardCoin key={coin.id} coin={coin} />
      ))}
    </div>
  );
};

export default Markets;
