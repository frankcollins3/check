import React, { ReactNode } from 'react';
import styles from "components/MarketTable/MarketTable.module.scss"

interface ToMoneyProps {
    children: any,
    // children: ReactNode,
    numberToConvert: number,
    percentChange: number

}

interface NewbornProps {
    value: string
}

const ToMoneyConverter: React.FC<ToMoneyProps> = ({ children, numberToConvert, percentChange }) => {
    if (!children || typeof children !== 'object') {
        return null; // Return null or handle the case when children is not valid
    }

    const value: number = numberToConvert || children?.props?.value || 0; // Assuming 0 if value is not provided    
    const cashValue = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const isGreen = percentChange < 0 
    

    return (
        <th style={{ color: isGreen ? "#ed1c24" : "forestgreen", width: '100px' }} id={styles.th}>            
                <NewBorn value={cashValue} />            
        </th>
    );
};

const NewBorn: React.FC<NewbornProps> = ({ value }) => (
    <>{value}</>
);

export default ToMoneyConverter;