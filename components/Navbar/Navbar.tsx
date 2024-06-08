

// @reduxjs/toolkit global state management
  import {useSelector, useDispatch} from 'react-redux'
  import { RootState } from 'redux/store/rootReducer';
  import { 
    TOGGLE_CANDLESTICK_CHART_VIEW_MULTI,
    TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_O, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_H, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_C, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_L,
    TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_V,
    SET_CANDLESTICK_CHART_CURR_DATA
   } from 'redux/stocks/stocksSlice';

//    components and styling
   import {useImage} from "Contexts/Img"
   import Container from "react-bootstrap/Container"
   import styles from "./Navbar.module.scss"

export default function Navbar() {
    return <RENDER/>
}

function RENDER() {
    const { check } = useImage()


    
    return (
        <Container className={styles.navbar}>   
            <img id={styles.checkLogo} className={styles.navImg} src={check}/>
            <Container className={styles.rightSideCont}>
                <h6 id={styles.tipsText}> Inance </h6>
                <h6 id={styles.tipsText}> commonwealth </h6>
                <h6 id={styles.tipsText}> Home </h6>
            </Container>
        </Container>
    )
}