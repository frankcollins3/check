import React, { useState, useEffect, ReactNode } from 'react';

interface toMoneyProps {
    children: ReactNode,
    numberToConvert: number
}

export default function toMoney(toMoneyProps) {
    let children = toMoneyProps.children

    return (        
        <div>
            {children}
        </div>
    )
}
