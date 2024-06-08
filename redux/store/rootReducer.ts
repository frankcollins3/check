import { combineReducers } from '@reduxjs/toolkit';
import introReducer, { IntroState } from 'redux/intro/introSlice'
import allOrAnyReducer, { AllOrAnyState } from 'redux/allOrAny/allOrAnySlice'
import loginReducer, { LoginState } from 'redux/login/loginSlice'
import signupReducer, { SignupState } from 'redux/signup/signupSlice'
import signupConstraintsReducer, { SignupConstraintsState } from 'redux/signupConstraints/signupConstraintsSlice'
import dayReducer, { DayState } from 'redux/content/daySlice'
import currentUserReducer, { currentUserState } from 'redux/currentUser/currentUserSlice'
import witsFieldsReducer, { witsFieldsState } from 'redux/witsFields/witsFieldsSlice'
import stocksReducer, { StocksState } from 'redux/stocks/stocksSlice'

const rootReducer = combineReducers({
  intro: introReducer,
  allOrAny: allOrAnyReducer,
  currentUser: currentUserReducer, 
  login: loginReducer,
  signup: signupReducer,
  signupConstraints: signupConstraintsReducer,
  day: dayReducer,
  witsFields: witsFieldsReducer,
  stocks: stocksReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
