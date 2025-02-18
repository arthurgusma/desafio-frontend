import styles from '../styles/components/StockBlock.module.css';
import { FavoriteButton } from './FavoriteButton';
import { XYPlot, AreaSeries } from 'react-vis';

export function StockBlock({
  stockName,
  price,
  variation,
  onButtonClick,
  company,
  country,
  chart,
  buttonFavText,
}) {
  let xChartValue = 1;
  const dataArr = chart.map((variation) => {
    return { x: xChartValue++, y: variation };
  });

  return (
    <div className={styles.stockWrapper}>
      <div className={styles.stockHeader}>
        <h1>{stockName}</h1>
        <h3>{company.toUpperCase()}</h3>
        <FavoriteButton
          onButtonClick={onButtonClick}
          company={company}
          buttonFavText={buttonFavText}
        />
      </div>
      <XYPlot
        width={300}
        height={120}
        margin={{ left: 0, right: 0, top: 40, bottom: 10 }}
      >
        <AreaSeries
          className='area-series-example'
          curve='curveNatural'
          data={dataArr}
        />
      </XYPlot>

      <div className={styles.stockFooter}>
        <ul>
        <li>{country}</li>
          <li
            className={
              variation > 0
                ? styles.positiveVariation
                : styles.negativeVariation
            }
          >
            Variação: <span>{variation}%</span>
          </li>
          <li>Preço: R$ {price}</li>
        </ul>
      </div>
    </div>
  );
}
