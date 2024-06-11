import React, { ReactNode } from 'react';
import styles from "styles/components/MarketTable/MarketTable.module.scss"

interface ToMoneyProps {
    children: any,
    // children: ReactNode,
    numberToConvert: number
}

interface NewbornProps {
    value: string
}

const ToMoneyConverter: React.FC<ToMoneyProps> = ({ children, numberToConvert }) => {
    if (!children || typeof children !== 'object') {
        return null; // Return null or handle the case when children is not valid
    }

    const value: number = numberToConvert || children?.props?.value || 0; // Assuming 0 if value is not provided

    const cashInPromise = new Promise<string>((resolve, reject) => {
        const stringVal = value.toString();
        const splitVals = stringVal.split('.');
        splitVals[0] = splitVals[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        const cashValue = splitVals.join('.');
        resolve(cashValue);
    });

    return (
        <th style={{ width: '100px' }} id={styles.th}>
            {cashInPromise.then((cashValue) => (
                <NewBorn value={cashValue} />
            ))}
        </th>
    );
};

const NewBorn: React.FC<NewbornProps> = ({ value }) => (
    <>{value}</>
);

export default ToMoneyConverter;s
