import React, { useState, useEffect, ReactNode } from 'react';

interface toMoneyProps {
    children: ReactNode,
    numberToConvert: number
}

export default function ToMoneyConverter(toMoneyProps) {
    let children = toMoneyProps.children
    return (        
        <>
            {children}
        </>
    )
}
