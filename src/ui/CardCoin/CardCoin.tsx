import { formatNumber } from "../../lib/formatNumber";
import view from "../../assets/card-assets/view.png";
import complete from "../../assets/card-assets/checked.png";
import multiply from "../../assets/card-assets/multiply.png";
import styles from "./CardCoin.module.scss";
import type { CardCoinProps } from "../../types";

const CardCoin = ({
  coin,
  isInWatchlist,
  onToggleWatchlist,
  variant = "MARKETS",
}: CardCoinProps) => {
  const isDisabled = variant === "MARKETS" && isInWatchlist;

  const getIcon = () => {
    if (variant === "WATCHLIST") {
      return multiply;
    } else if (!isInWatchlist) {
      return view;
    }
    return complete;
  };

  return (
    <div className={styles.cardCoinContainer}>
      <div className={styles.cardHeader}>
        <div className={styles.cardHeaderParagraph}>
          <img src={coin.image} alt="image" width={100} height={100} />
          <div className={styles.paragraph}>
            <h2>
              {coin.name} <span>({coin.symbol})</span>
            </h2>
            <span>Rank:#{coin.market_cap_rank}</span>
          </div>
        </div>
        <button
          disabled={isDisabled}
          className={styles.watchlistBtn}
          onClick={(e) => {
            e.stopPropagation();
            onToggleWatchlist(coin);
          }}
          title="Добавить в Watchlist"
        >
          <img width={20} height={20} src={getIcon()} alt="view" />
        </button>
      </div>
      <div className={styles.priceContainer}>
        <span>Текущая цена:</span>
        <div className={styles.percentageToPrice}>
          <span>${coin.current_price}</span>
          <span
            className={
              coin.price_change_percentage_24h > 0
                ? styles.positive
                : styles.negative
            }
          >
            {coin.price_change_percentage_24h > 0 ? "+" : ""}
            {coin.price_change_percentage_24h}%
          </span>
        </div>
      </div>
      <div className={styles.marketState}>
        <div className={styles.marketStateCapAndHigh}>
          <div>
            <span>Капитализация:</span>
            <p>${formatNumber(coin.market_cap)}</p>
          </div>
          <div>
            <span>Пик за 24ч:</span>
            <p>${formatNumber(coin.high_24h)}</p>
          </div>
        </div>
        <div className={styles.totalVolumeAndLowContainer}>
          <div>
            <span>Объем за 24ч:</span>
            <p>${formatNumber(coin.total_volume)}</p>
          </div>
          <div>
            <span>Мин за 24ч:</span>
            <p>${formatNumber(coin.low_24h)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCoin;
