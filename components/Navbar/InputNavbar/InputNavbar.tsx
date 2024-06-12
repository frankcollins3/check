// @reduxjs/toolkit global state management
import {useSelector, useDispatch} from 'react-redux'
import { RootState } from 'redux/store/rootReducer';
import { 
  TOGGLE_CANDLESTICK_CHART_VIEW_MULTI,
  TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_O, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_H, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_C, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_L,
  TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_V,
  SET_CANDLESTICK_CHART_CURR_DATA
 } from 'redux/stocks/stocksSlice';

// components and styling
import Container from "react-bootstrap/Container"

import styles from "../Navbar.module.scss"

export default function InputNavbar() {
    return <RENDER/>
}

function RENDER() {

    const NAVBAR_INPUT_VALUE = useSelector((state:RootState) => state.stocks.NAVBAR_INPUT_VALUE)

    return (
        <Container id={styles.ghostContainer}>
        <input 
        value="what are you checking for..."        
        id={styles.navbarInput} 
        type="text"
        />   
        </Container>
    )
}