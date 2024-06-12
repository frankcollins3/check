// components and styling
import Container from "react-bootstrap/Container"
import styles from "components/MarketTable/MarketTable.module.scss"

// component composition utilities
import ToMoneyConverter from "utility/ComponentComposition/ToMoney"

// utility
import {MarketTableProps} from "Interface/InterfaceTypes"

declare global {
  interface Number {
    toMoney(): string;
  }
}

const MarketTable: React.FC<MarketTableProps> = ({ market, value, dayChange, percentChange }) => {

  const clickMarket = () => {       
  }

    return (
      <table id={styles.marketTable}>
      <thead>
        <tr>
          <th onClick={clickMarket} style={{ width: '100px', fontWeight: 'bolder', color: 'rgba(0, 0, 0, 0.622)' }} id={styles.th}>{market.toUpperCase()}</th>
          
          <ToMoneyConverter numberToConvert={value} percentChange={percentChange}>
          <th style={{ color: value < 0 ? "red" : "green", width: '100px' }} id={styles.th}>{value}</th>
          </ToMoneyConverter>

          {/* <th style={{ width: '100px' }} id={styles.th}>{value.toMoney()}</th> */}

          <th style={{ color: percentChange > 0 ? "forestgreen" : "#ed1c24", width: '100px' }} id={styles.th}>{dayChange}</th>
                  
          {/* <th style={{ color: parseInt(valu) > 0 ? "forestgreen" : "#ed1c24", width: '100px' }} id={styles.th}>{percentChange}</th> */}
          {/* style={{ color: isEstimateGreaterThanCurrent ? "#ed1c24" : "forestgreen" }} */}
        </tr>
      </thead>
      <tbody>        
        {/* Add more rows as needed */}
      </tbody>
    </table>
    );
  }

  export default MarketTable;