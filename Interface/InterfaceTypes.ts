// Key ratios: 
// Market Cap
// Shares outstanding
// P/E ratio
// P/S ratio
// P/B Ratio
// PEG Ratio
// Current Ratio
// Debt to Equity Ratio
// EPS 


export interface keyRatiosINTERFACE {
    id: number | null,
    company: string | null,
    ticker: string | null,
    MktCap: string | number | null
    Shares: string | number | null,
    PE: string | number | null,
    PS: string | number | null,
    PB: string | number | null,
    PEG: string | number | null,
    Current: string | number | null,
    DE: string | number | null,
    EPS: string | number,
}

export interface candlestickINTERFACE {
    id: number | null,
    company: string | null,
    ticker: string | null,
    date: string | null | any,
    open: number | null,
    high: number | null,
    low: number | null,
    close: number | null,
    volume: number | null,

    // working on social media taught me to denormalize these (atleast in that instance.. this whole statement might even be wrong lol)
    // I even denormalized company and ticker should've done logo at the same time but didn't. 
    logo: string | null, 
}

export type candlestickARRAYTYPE = candlestickINTERFACE[]

// in a fullly full stack app would possibly denormalize userid | username into these tables.
export interface tradeTickerINTERFACE {
    id: number,
    company: string,
    ticker: string,
    time: string, // or GraphQL Scalar type Date
    quantity: number,
    price: Number
}
// export interface analystINTERFACE { }

export interface companyINTERFACE {
    company: string | null,
    ticker: string | null,
    keyRatios: keyRatiosINTERFACE | null,
    candleStick: candlestickINTERFACE | null,
    tradeTicker: tradeTickerINTERFACE | null,
    // analysts: analystINTERFACE | null,
}

export interface dayMonthYearINTERFACE {
    day: string | number,
    month: string | number, 
    year: string | number
}

export interface relativityINTERFACE {
    current: number,
    variance: number | null,
    company: string | null,
    ticker: string | null
    // ticker: string | null,   // don't need their ticker just their name. 
}

export interface estimateINTERFACE { 
    estimate: number,
    rationale: string,
    relativity:relativityINTERFACE|null,     // -10:10%         77|77%
} 

export interface MarketTableProps {
    market: string;
    value: number;
    dayChange: number;
    percentChange: number;
}