import React, { createContext, useContext, ReactNode, useState, useEffect } from "react";
import axios from 'axios';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/store/rootReducer';
import { 
  TOGGLE_CANDLESTICK_CHART_VIEW_MULTI,
  TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_O, 
  TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_H, 
  TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_C, 
  TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_L,
  TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_V,
  SET_CANDLESTICK_CHART_LAST_SELECTED_OHLC,
  SET_CANDLESTICK_CHART_CURR_DATA,

  TOGGLE_KR_MKT_CAP_IS_CLICKED, TOGGLE_KR_SHARES_IS_CLICKED, TOGGLE_KR_CURRENT_IS_CLICKED, TOGGLE_KR_EPS_IS_CLICKED,
  TOGGLE_KR_PE_IS_CLICKED, TOGGLE_KR_PS_IS_CLICKED, TOGGLE_KR_PB_IS_CLICKED, TOGGLE_KR_PEG_IS_CLICKED, TOGGLE_KR_DE_IS_CLICKED,
} from 'redux/stocks/stocksSlice';

// Utility
import season from "utility/candlestickData"
import { nothing } from "utility/utilityValues";
import { APPLEcompanyINTERFACE } from "Interface/InterfaceTypes";

type StocksTypes = {  
    APPLE: APPLEcompanyINTERFACE;
    resetOHLCV: () => void;
    checkboxClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    singleMultiViewToggle: () => void;
    setOHLCsetLastSelectedOHLC: (char:string) => void;
    filterCandlestickData: (startDate:string, endDate:string) => void;
    textClick: (event:any) => void;
}

// id: number | null,
// MktCap: string | number | null
// Shares: string | number | null,
// PE: string | number | null,
// PS: string | number | null,
// PB: string | number | null,
// PEG: string | number | null,
// Current: string | number | null,
// DE: string | number | null,
// EPS: string | number,

const StocksDefaults: StocksTypes = {
    APPLE: {
        keyRatios: {
            id: null,
            MktCap: null,
            Shares: null,
            PE: null,
            PS: null,
            PB: null,
            PEG: null,
            Current: null,
            DE: null,
            EPS: 0
        },
        candleStick: { 
            id: 0,
            date: "00:00",
            open: 0,
            high: 0,
            low: 0,
            close: 0,
            volume: 0,            
        },
        tradeTicker: { 
            id: 0,
            time: "00:00",
            quantity: 0,
            price: 0,
        }
    },
    resetOHLCV: () => {},
    checkboxClick: () => {},
    singleMultiViewToggle: () => {},
    setOHLCsetLastSelectedOHLC: (char:string) => {},
    filterCandlestickData: (startDate:string, endDate:string) => {},
    textClick: (event:any) => {}
}

const StocksContext = createContext<StocksTypes>(StocksDefaults);

export function useStocks() {
    return useContext(StocksContext);
}

type Props = { children: ReactNode }

export function StocksProvider({ children }: Props) {
    const dispatch = useDispatch();

    const CANDLESTICK_CHART_VIEW_MULTI = useSelector((state: RootState) => state.stocks.CANDLESTICK_CHART_VIEW_MULTI);
    const CANDLESTICK_CHART_MULTI_SHOW_O = useSelector((state: RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_O);
    const CANDLESTICK_CHART_MULTI_SHOW_H = useSelector((state: RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_H);
    const CANDLESTICK_CHART_MULTI_SHOW_L = useSelector((state: RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_L);
    const CANDLESTICK_CHART_MULTI_SHOW_C = useSelector((state: RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_C);
    const CANDLESTICK_CHART_MULTI_SHOW_V = useSelector((state: RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_V);
    const CANDLESTICK_CHART_LAST_SELECTED_OHLC = useSelector((state: RootState) => state.stocks.CANDLESTICK_CHART_LAST_SELECTED_OHLC);

    const KR_MKT_CAP = useSelector((state: RootState) => state.stocks.KR_MKT_CAP);
    const KR_MKT_CAP_IS_CLICKED = useSelector((state: RootState) => state.stocks.KR_MKT_CAP_IS_CLICKED);
    const KR_PE = useSelector((state: RootState) => state.stocks.KR_PE);
    const KR_PE_IS_CLICKED = useSelector((state: RootState) => state.stocks.KR_PE_IS_CLICKED);
    const KR_PS = useSelector((state: RootState) => state.stocks.KR_PS);
    const KR_PS_IS_CLICKED = useSelector((state: RootState) => state.stocks.KR_PS_IS_CLICKED);
    const KR_PB = useSelector((state: RootState) => state.stocks.KR_PB);
    const KR_PB_IS_CLICKED = useSelector((state: RootState) => state.stocks.KR_PB_IS_CLICKED);
    const KR_PEG = useSelector((state: RootState) => state.stocks.KR_PEG);
    const KR_PEG_IS_CLICKED = useSelector((state: RootState) => state.stocks.KR_PEG_IS_CLICKED);
    const KR_SHARES = useSelector((state: RootState) => state.stocks.KR_SHARES);
    const KR_SHARES_IS_CLICKED = useSelector((state: RootState) => state.stocks.KR_SHARES_IS_CLICKED);
    const KR_CURRENT = useSelector((state: RootState) => state.stocks.KR_CURRENT);
    const KR_CURRENT_IS_CLICKED = useSelector((state: RootState) => state.stocks.KR_CURRENT_IS_CLICKED);
    const KR_DE = useSelector((state: RootState) => state.stocks.KR_DE);
    const KR_DE_IS_CLICKED = useSelector((state: RootState) => state.stocks.KR_DE_IS_CLICKED);
    const KR_EPS = useSelector((state: RootState) => state.stocks.KR_EPS);
    const KR_EPS_IS_CLICKED = useSelector((state: RootState) => state.stocks.KR_EPS_IS_CLICKED);

    const APPLE = {
        keyRatios: {
            id: 0,
            MktCap: 0,
            Shares: 0,
            PE: 0,
            PS: 0,
            PB: 0,
            PEG: 0,
            Current: 0,
            DE: 0,
            EPS: 0
        },
        candleStick: { 
            id: 0,
            date: "01-01-0001",
            open: 0,
            high: 0,
            low: 0,
            close: 0,
            volume: 0,            
        },
        tradeTicker: { 
            id: 0,
            time: "00:00",
            quantity: 0,
            price: 0,
        }   
    }

    const resetOHLCV = () => {
        console.log("this invokes")
        Promise.all([
            // CANDLESTICK_CHART_MULTI_SHOW_O 
            CANDLESTICK_CHART_MULTI_SHOW_O === true && dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_O()),
            CANDLESTICK_CHART_MULTI_SHOW_H === true && dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_H()),
            CANDLESTICK_CHART_MULTI_SHOW_L === true && dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_L()),
            CANDLESTICK_CHART_MULTI_SHOW_C === true && dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_C()),
            CANDLESTICK_CHART_MULTI_SHOW_V === true && dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_V()),
        ]).then(() => {
            if (CANDLESTICK_CHART_VIEW_MULTI) {
                // resetOHLCV(); // Make sure this does not cause an infinite loop
            }
        });
    }

    const checkboxClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        const id = event.target.id;

        if (!id) return;

        if (!CANDLESTICK_CHART_VIEW_MULTI) {
            resetOHLCV();
        }

        switch (id) {
            case "chbx1":
                dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_O());
                break;
            case "chbx4":
                dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_H());
                break;
            case "chbx5":
                dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_L());
                break;
            case "chbx6":
                dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_C());
                break;
            default:
                break;
        }
    }

    const singleMultiViewToggle = () => {
        if (CANDLESTICK_CHART_VIEW_MULTI) {
            resetOHLCV();
        }

        // switch (CANDLESTICK_CHART_LAST_SELECTED_OHLC) {
        //     case "o":
        //         dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_O());
        //         break;
        //     case "h":
        //         dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_H());
        //         break;
        //     case "l":
        //         dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_L());
        //         break;
        //     case "c":
        //         dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_C());
        //         break;
        //     case "v":
        //         dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_V());
        //         break;
        //     default:
        //         break;
        // }

        dispatch(TOGGLE_CANDLESTICK_CHART_VIEW_MULTI());
    }

    const setOHLCsetLastSelectedOHLC = (char:string) => {
        console.log('char',char)
        // state setting so void but have to return value. 
        if (char === 'o') { Promise.all([dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_O()), dispatch(SET_CANDLESTICK_CHART_LAST_SELECTED_OHLC("o"))]) }
        if (char === 'h') { Promise.all([dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_H()), dispatch(SET_CANDLESTICK_CHART_LAST_SELECTED_OHLC("h"))]) }
        if (char === 'l') { Promise.all([dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_L()), dispatch(SET_CANDLESTICK_CHART_LAST_SELECTED_OHLC("l"))]) }
        if (char === 'c') { Promise.all([dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_C()), dispatch(SET_CANDLESTICK_CHART_LAST_SELECTED_OHLC("c"))]) }
        if (char === 'v') { Promise.all([dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_V()), dispatch(SET_CANDLESTICK_CHART_LAST_SELECTED_OHLC("v"))]) }
        return CANDLESTICK_CHART_LAST_SELECTED_OHLC || null;
    }

    function filterCandlestickData(startDate:string, endDate:string) {
        // const startDate = "5-3-2024";
        // const endDate = "5-31-2024";
    
        const start = new Date(startDate);
        const end = new Date(endDate);
        
        const filteredData = season.filter(item => {
            const itemDate = new Date(item?.date);
            // if itemDate is greater than start and less than end return that item 
            return itemDate >= start && itemDate <= end;
        });
        
        dispatch(SET_CANDLESTICK_CHART_CURR_DATA(filteredData));
        // console.log(filteredData);
    }

    const textClick = (event:any) => {
        let text:string = event?.target?.textContent;
        console.log('text', text)

        text === "MktCap" || text === KR_MKT_CAP ? 
        dispatch(TOGGLE_KR_MKT_CAP_IS_CLICKED())
        : 
        text === "Shares" || text === KR_SHARES ?
        dispatch(TOGGLE_KR_SHARES_IS_CLICKED())
        : 
        text === "P/E" || text === KR_PE ?
        dispatch(TOGGLE_KR_PE_IS_CLICKED())
        :
        text === "P/S" || text === KR_PS ?
        dispatch(TOGGLE_KR_PS_IS_CLICKED())
        :
        text === "P/B" || text === KR_PB ?
        dispatch(TOGGLE_KR_PB_IS_CLICKED())
        :
        text === "PEG" || text === KR_PEG ?
        dispatch(TOGGLE_KR_PEG_IS_CLICKED())
        :
        text === "Current" || text === KR_CURRENT ? 
        dispatch(TOGGLE_KR_CURRENT_IS_CLICKED())
        :
        text === "D/E" || text === KR_DE ?
        dispatch(TOGGLE_KR_DE_IS_CLICKED())
        :
        text === "EPS" || text === KR_EPS?
        dispatch(TOGGLE_KR_EPS_IS_CLICKED())
        :
        nothing()             
    }
            
    const value = {        
        APPLE,
        resetOHLCV,
        checkboxClick,
        singleMultiViewToggle,
        setOHLCsetLastSelectedOHLC,
        filterCandlestickData,
        textClick
    }

    return (
        <StocksContext.Provider value={value}>
            {children}
        </StocksContext.Provider>
    );
}
