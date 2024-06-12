import { combineReducers } from '@reduxjs/toolkit';

import stocksReducer, { StocksState } from 'redux/stocks/stocksSlice'

const rootReducer = combineReducers({
  stocks: stocksReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
