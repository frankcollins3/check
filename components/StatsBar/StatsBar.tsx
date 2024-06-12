import axios from 'axios';
import $ from 'jquery'
import {useEffect, useState} from "react"

// @reduxjs/toolkit global state management
import {useSelector, useDispatch} from 'react-redux'
import { RootState } from 'redux/store/rootReducer';
import { 
  TOGGLE_CANDLESTICK_CHART_VIEW_MULTI,
 } from 'redux/stocks/stocksSlice';

//  containers and styling
import Container from 'react-bootstrap/Container';
import styles from "./StatsBar.module.scss"

// utils
import { DefaultApi } from 'finnhub-ts'
import finnhubClient from 'utility/finnhubStockData/FinnhubClient'
import {useImage} from "Contexts/Img"


export default function StatsBar() {
    return <RENDER/>
}

function RENDER() {

    const { chessCastle } = useImage()
    // const finnhub = require('finnhub');

    // const api_key = finnhub.ApiClient.instance.authentications['api_keycpj29l9r01qlu187k6ggcpj29l9r01qlu187k6h0'];
    // // api_key.apiKey = "cpj29l9r01qlu187k6ggcpj29l9r01qlu187k6h0"
    // const finnhubClient = new finnhub.DefaultApi()

    // finnhubClient.symbolSearch('AAPL', (error, data, response) => {
    // console.log(data)
    // });


    let myData = [
        { id: 0, company: 'Microsoft',  }
    ]

    const test = async () => {
        // /institutional/ownership?symbol=TSLA&from=2022-09-01&to=2022-10-30
        const { symbolSearch, ownership, priceTarget, marketNews } = finnhubClient
        // const appleSymbol = await symbolSearch('AAPL') // console.log('appleSymbol', appleSymbol) // const appleOwnership = await ownership('AAPL'); // const applePriceTarget = await priceTarget('AAPL'); // const appleNews = await marketNews('AAPL')           

        

    }   

    return (
        // yahoo api finance
        <Container id={styles.cont}>

            {/* <Container id={styles.leftCont}>
            <p id={styles.text}> at check...</p>
            <img id={styles.chessPiece} src={chessCastle}/>
        </Container> */}
        
        <p id={styles.text}> at </p>
        <p id={styles.text}> check... </p>
        <p id={styles.text}> we're </p>
        <p id={styles.text}> mates. </p>
        
        </Container>

    )
}



//     const finnhubClient = new DefaultApi({
//     apiKey: 'YOUR-API-KEY',
//     isJsonMime: (input) => {
//       try {
//         JSON.parse(input)
//         return true
//       } catch (error) {}
//       return false
//     },
//   })

// companyEarnings('AAPL').then((res) => {
//     console.log(res.data)
//   })