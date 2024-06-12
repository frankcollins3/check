import $ from 'jquery'
import axios from 'axios';
import {useEffect, useState} from "react"
// recharts needs client component which I'm using mac-mojave defaults to <client> opposed to newly @14+? <server-component/> defaults
import { Legend, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

// @reduxjs/toolkit global state management
import {useSelector, useDispatch} from 'react-redux'
import { RootState } from 'redux/store/rootReducer';
import { 
  SET_CURR_COMPANY,
  TOGGLE_CANDLESTICK_CHART_VIEW_MULTI,
  TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_O, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_H, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_C, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_L,
  TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_V,
  SET_CANDLESTICK_CHART_CURR_DATA,
  SET_CANDLESTICK_CHART_FILTER_START_DATE, 
  SET_CANDLESTICK_CHART_FILTER_END_DATE,
  TOGGLE_CANDLESTICK_CHART_SHOW_FILTER,
  CLEAR_CANDLESTICK_CHART_FILTER,
  TOGGLE_CANDLESTICK_CHART_CALENDAR_TODAY_CLICKED,
  SET_ANALYST_PAGINATION_INDEX_1, SET_ANALYST_PAGINATION_INDEX_2, SET_ANALYST_PAGINATION_INDEX_3
 } from 'redux/stocks/stocksSlice';

//  containers and styling
import Navbar from "components/Navbar"
import Carousel from "react-bootstrap/Carousel"
import Container from 'react-bootstrap/Container';
import DynamicLineChart from "components/DynamicLineChart"
import MarketTable from "components/MarketTable"
import KeyRatios from "components/KeyRatios"
import AnalystEstimatesBarGraph from "components/AnalystEstimatesBarGraph"
import Calendar from "react-calendar"
import CandlestickChartCheckboxes from "components/CandlestickChartCheckboxes";
import StatsBar from "components/StatsBar"
import styles from "styles/Intro.module.scss";

// utils
import CalHeatmap from "cal-heatmap"
import 'cal-heatmap/cal-heatmap.css'
import {useImage} from "Contexts/Img"
import { useStocks } from 'Contexts/StocksContext';
import { isParamValidLocale } from 'utility/utilityValues';
import season from "utility/candlestickData"
import estimateBucket from "utility/analystData"

// import { UserArray } from 'Interface/InterfaceTypes';
                    
export default function Main ( props:any ) {  

  const dispatch = useDispatch();
  const { filterCandlestickData, APPLE } = useStocks();
  // render( <div id="cal-heatmap"></div> )

  const { ADazure, ADventure, check, bofaLogo, citibankLogo,  } = useImage();

  const CURR_COMPANY = useSelector( (state:RootState) => state.stocks.CURR_COMPANY)
  const currCompany = CURR_COMPANY?.company || CURR_COMPANY?.tradeTicker?.company || 'good company' || null;
  const currTicker = CURR_COMPANY?.ticker || CURR_COMPANY?.tradeTicker?.ticker || null;

  const CANDLESTICK_CHART_FILTER_START_DATE = useSelector( (state:RootState) => state.stocks.CANDLESTICK_CHART_FILTER_START_DATE)
  const CANDLESTICK_CHART_FILTER_END_DATE = useSelector( (state:RootState) => state.stocks.CANDLESTICK_CHART_FILTER_END_DATE)

  const ANALYST_PAGINATION_INDEX_1 = useSelector((state:RootState) => state.stocks.ANALYST_PAGINATION_INDEX_1);
  const ANALYST_PAGINATION_INDEX_2 = useSelector((state:RootState) => state.stocks.ANALYST_PAGINATION_INDEX_2);
  const ANALYST_PAGINATION_INDEX_3 = useSelector((state:RootState) => state.stocks.ANALYST_PAGINATION_INDEX_3);

  const CANDLESTICK_CHART_CALENDAR_TODAY_CLICKED = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_CALENDAR_TODAY_CLICKED);
  const CANDLESTICK_CHART_CURR_DATA = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_CURR_DATA);
  const CANDLESTICK_CHART_SHOW_FILTER = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_SHOW_FILTER);
  const CANDLESTICK_CHART_SHOW_KEYRATIOS = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_SHOW_KEYRATIOS);
  const CANDLESTICK_CHART_SHOW_ANALYST_INFO = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_SHOW_ANALYST_INFO);
  const currentDate = new Date();
  const day = currentDate.getDate(); 
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear(); 

// Convert day, month, and year to strings and pad with zeros if needed
const formattedDate = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year.toString().slice(2)}`;


  useEffect(() => {
    dispatch(SET_CURR_COMPANY(APPLE))
    // Object.Keys() checker to see if person's object includes keys from the APPLE interface. 


  //   const ohlcvDataSetter = async() => {
  //     const weeklyUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=AAPL&&outputsize=compact&apikey=112J7XA238VFAQQM'
  //     let predata = await axios.get(weeklyUrl);
  //     console.log('predata', predata)
  //     let timeSeries = predata['Weekly Time Series'];      

  //     function filterDataByDateRange(timeSeries, startDate, endDate) {
  //       const filteredData = {};
  //       for (const date in timeSeries) {
  //           if (date >= startDate && date <= endDate) {
  //               filteredData[date] = timeSeries[date];
  //           }
  //       }
  //       return filteredData;
  //   }

  //   const filteredData = filterDataByDateRange(timeSeries, "2024-5-1", "2024-5-14")
  //   console.log('filteredData', filteredData)
  //   }
  //   ohlcvDataSetter();

  }, [CANDLESTICK_CHART_CALENDAR_TODAY_CLICKED])

  const clickDay = (value:any, event:any) => {
    // const clickDay = (locale:any, date:any) => {
      // for formatDay() props to bypass extra formatting logic:        // const clickDay = (date:any) => {
    
      const formattedDate = `${value.getMonth() + 1}-${value.getDate()}-${value.getFullYear()}`;
      console.log('formattedDate', formattedDate)

      // .some() returns T|F if condition validates that the {season.date}       True:  | False: Date 
      const doesDataExistForDate = season.some(candlestickData => candlestickData?.date === formattedDate)
      
      if (!doesDataExistForDate) {
        return;
// UX -> assuming user clicks too far back in time (not forward) set state() to show the first available day in data. 
//      DATA_START_DATE || DATA_END_DATE -> might not need these but can probably neat stuff with them.
      }

      const date = new Date()
      const today = date.getDate();
      console.log('today', today)

      if (value.getDate() === today) {
        console.log("today is today man");

      }

      // if start date doesn't exist:       SET_START_DATE() 
      if (CANDLESTICK_CHART_FILTER_START_DATE === '') {
        dispatch(SET_CANDLESTICK_CHART_FILTER_START_DATE(formattedDate))
        // tautological & explicitly declaring based on
      } 
      else if (CANDLESTICK_CHART_FILTER_START_DATE?.length > 1 && CANDLESTICK_CHART_FILTER_END_DATE === '') {          

        console.log("else block!!!");
        dispatch(SET_CANDLESTICK_CHART_FILTER_END_DATE(formattedDate))   
        filterCandlestickData(CANDLESTICK_CHART_FILTER_START_DATE, formattedDate)
        // could shorten to:         if (CANDLESTICK_START_DATE)
      }        
      else if (CANDLESTICK_CHART_FILTER_START_DATE?.length > 1 && CANDLESTICK_CHART_FILTER_END_DATE?.length > 1) {        
        dispatch(CLEAR_CANDLESTICK_CHART_FILTER())
        dispatch(SET_CANDLESTICK_CHART_FILTER_START_DATE(formattedDate))
      } else {
        // recursion probably not needed as I believe above blocks cover every possible case. 
        // clickDay()
      }
    }    

  const clickNavLi = (event:any) => {
        console.log('event.target', event?.target)
        const target = event?.target || null;
        
        if (!target) {
            return;
        }
        // target established
        const attributes = event.target.attributes;
        const style = attributes[1];          

        let JQfontweight = $(event.target).css('font-weight')
        if (parseInt(JQfontweight) === 400) {
            $(event.target).css('font-weight', 'bolder');
        } else {
            $(event.target).css('font-weight', '');
        }
    }

    const clickit = () => {
      console.log('CURR_COMPANY', CURR_COMPANY)
    }

    const moreAnalystsClick = () => {
      if (ANALYST_PAGINATION_INDEX_1 <= 2) {
        dispatch(SET_ANALYST_PAGINATION_INDEX_1(ANALYST_PAGINATION_INDEX_1 + 1))
        dispatch(SET_ANALYST_PAGINATION_INDEX_2(ANALYST_PAGINATION_INDEX_2 + 1))
        dispatch(SET_ANALYST_PAGINATION_INDEX_3(ANALYST_PAGINATION_INDEX_3 + 1))

      } else {
        Promise.all([
          dispatch(SET_ANALYST_PAGINATION_INDEX_1(0)),
          dispatch(SET_ANALYST_PAGINATION_INDEX_2(1)),
          dispatch(SET_ANALYST_PAGINATION_INDEX_3(2))

        ])
      }
    }

  const GoodMorningHeader = () => ( 

    <div className={styles.goodMorningHeader}>
      <Container id={styles.companyHeaderContainer}>
      <h1 onClick={clickit} id={styles.companyNameHeader}> {currCompany} </h1>
      <h6 id={styles.companyTickerSubheader}> {formattedDate} </h6>
      <h6 onClick={clickit} id={styles.companyTickerSubheader}> {currTicker?.toLowerCase()} </h6>
      </Container>

      {/* probably going to be a container with date. */}      

    <Container id={styles.marketTableCont}>              
    <MarketTable market="Dow" value={38864.08} dayChange={69.05}  percentChange={0.68}/>
    <MarketTable market="S&P 500" value={5360.79} dayChange={13.80}  percentChange={0.26}/>
    <MarketTable market="VIX" value={12.74} dayChange={0.52}  percentChange={4.26}/>
    <MarketTable market="Gold" value={2318.90} dayChange={-8.50}  percentChange={-0.38}/>   
    <MarketTable market="Oil" value={77.58} dayChange={0.16}  percentChange={-0.17}/>   
    </Container>

      <img id={styles.goodMorningHeaderAd} src={ADventure}/>      
    </div>
  );

    return (      

        <div suppressHydrationWarning={true} className={styles.app}>
          <Navbar />
          <main>
            <GoodMorningHeader />
            <div className={styles.moreAnalystsToolbar}>
            <button onClick={moreAnalystsClick} id={styles.moreAnalystsButton}> ... </button>
            </div>


            <div className={styles.boxesContainer}>

              {/* would refactor putting these in their own:      Analysts component. */}
              <AnalystEstimatesBarGraph analystData={estimateBucket[ANALYST_PAGINATION_INDEX_1]}/>           
              <AnalystEstimatesBarGraph analystData={estimateBucket[ANALYST_PAGINATION_INDEX_2] ? estimateBucket[ANALYST_PAGINATION_INDEX_2] : estimateBucket[ANALYST_PAGINATION_INDEX_2 + 1] ? estimateBucket[ANALYST_PAGINATION_INDEX_2 + 1] : estimateBucket[0]}/> 
              <AnalystEstimatesBarGraph analystData={estimateBucket[ANALYST_PAGINATION_INDEX_3] ? estimateBucket[ANALYST_PAGINATION_INDEX_3] : estimateBucket[ANALYST_PAGINATION_INDEX_3 + 1] ? estimateBucket[ANALYST_PAGINATION_INDEX_2 + 1] : estimateBucket[0]}/> 

            </div>
            <div className={styles.chartsContainer}>
              <Container id={styles.chartCheckboxContainer}>                
              <DynamicLineChart/>
              <CandlestickChartCheckboxes/>
              </Container>
              <Container id={styles.rightSideCont}>
              {/* { CANDLESTICK_CHART_SHOW_FILTER === true && <p style={{ textAlign: 'center' }}> hey </p> } */}
                  {
                    CANDLESTICK_CHART_SHOW_KEYRATIOS === true
                    ? 
                    <>
                    <p className="ghost"></p>
                    <KeyRatios/>
                    <p className="ghost"></p>
                    </>
                    :
                    CANDLESTICK_CHART_SHOW_FILTER === true ?
                    <>
                    <p className="ghost"></p>
                    <Calendar
                    onClickDay={(value:any, event:any) => clickDay(value, event)} 
                    />
                    <p className="ghost"></p>
                    </>
                    :
                    <img style={{ height: '600px', width: '600px' }} id={styles.ADazure2} src={ADazure}/>
                  }
              {/* { CANDLESTICK_CHART_SHOW_FILTER === true && <p style={{ textAlign: 'center' }}> hey </p> } */}
              </Container>
            </div>
          </main>
        <StatsBar />
          <footer className={styles.footer}>
            <p>contact</p>
            <p>consumer center¸</p>
            <p>¸</p>
            <p>footer</p>
            <button id={styles.topPageBtn}>top page </button>
          </footer>
        </div>
      
    )

  }    