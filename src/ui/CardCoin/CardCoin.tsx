import { MOCK_COIN } from "../../constants/mockData";
import { formatNumber } from "../../lib/formatNumber";
import view from "../../assets/card-assets/view.png";
import styles from "./CardCoin.module.scss";

const CardCoin = () => {
  const mockData = Array.from({ length: 10 }, (_, index) => ({
    ...MOCK_COIN,
    id: `${MOCK_COIN.id}-${index}`,
  }));

  return (
    <>
      {mockData.map((coin) => (
        <div className={styles.cardCoinContainer} key={coin.id}>
          <div className={styles.cardHeader}>
            <div className={styles.cardHeaderParagraf}>
              <img src={coin.image} alt="image" width={100} height={100} />
              <div className={styles.paragraf}>
                <h2>
                  {coin.name} <span>({coin.symbol})</span>
                </h2>
                <span>Rank:#{coin.market_cap_rank}</span>
              </div>
            </div>
            <button
              className={styles.watchlistBtn}
              onClick={(e) => {
                e.stopPropagation(); // Чтобы клик по кнопке не триггерил клик по всей карточке
                console.log("Added to watchlist:", coin.id);
              }}
              title="Добавить в Watchlist"
            >
              <img width={20} height={20} src={view} alt="view" />
            </button>
          </div>
          <div className={styles.priceContainer}>
            <span>Текущая цена:</span>
            <div className={styles.percentageToPrice}>
              <span>${coin.current_price}</span>
              <span
                className={
                  coin.price_change_percentage_24h > 0
                    ? styles.positiv
                    : styles.negative
                }
              >
                +{coin.price_change_percentage_24h}.0%
              </span>
            </div>
          </div>
          <div className={styles.marketState}>
            <div className={styles.marketStateCapAndHight}>
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
      ))}
    </>
  );
};

export default CardCoin;
