import { BarChart, CartesianGrid, YAxis, Bar } from 'recharts';
import {useEffect, useState} from "react";

  // @reduxjs/toolkit global state management
  import {useSelector, useDispatch} from 'react-redux'
  import { RootState } from 'redux/store/rootReducer';

  import {     
    SET_ANALYST_BARCHART_DATA, SET_ANALYST_CURRENT_COMPANY, SET_ANALYST_CURRENT_INDEX
   } from 'redux/stocks/stocksSlice';



// components and styling
import { Carousel } from 'react-responsive-carousel';
import {
  Card, Container
  //  Carousel
 } from "react-bootstrap"
import styles from "./AnalystEstimatesBarGraph.module.scss"

// utility
import { randomValueFromArray } from "utility/utilityValues"
import {useImage} from "Contexts/Img"
import estimateBucket from "utility/analystData"

export default function AnalystEstimatesBarGraph(props:any) {
    const analystData = props.analystData;
    return <RENDER suppressHydrationWarning={true} analystData={analystData}/>
}

// have to pack:                currentAmount, analystAmount into array

function RENDER(props:any) {

    // local state for dynamic component because global state will affect every single one which we want them isolated. // can manage globally isolated state with a:       barChartDataBin:[] = [] and select indexes corresponding to the element being clicked or engaged.
    // this will also make Math.random() easier because logic won't be cacheing or w.e it does to often retrieve same random value.
    const [barCharData, setBarCharData] = useState()
    const analystData:any = props?.analystData;
    const estimate:string|number = analystData?.estimate;
    const relativity = analystData?.relativity;
    // const currentPPS = relativity?.
    let percentageVariance: any = Math.round((((relativity?.current - analystData?.estimate) / analystData?.estimate) * 100) * 10) / 10;


    const isEstimateGreaterThanCurrent = analystData?.estimate > analystData?.relativity.current 
    const isCurrentGreaterThanEstimate = analystData?.estimate > analystData?.relativity.current

    // array of objects 
    // const data = [];
    const dispatch = useDispatch()
    const { appleLogo , bofaLogo, citibankLogo, goldmanSachsLogo, morganStanleyLogo, jpMorganLogo, moelisLogo, lazardLogo, evercoreLogo } = useImage()
    
    const imageArray:string[] = [bofaLogo, citibankLogo, goldmanSachsLogo, morganStanleyLogo, jpMorganLogo, moelisLogo, lazardLogo, evercoreLogo ];

    const ANALYST_CURRENT_INDEX = useSelector((state:RootState) => state.stocks.ANALYST_CURRENT_INDEX)
    const ANALYST_CURRENT_COMPANY = useSelector((state:RootState) => state.stocks.ANALYST_CURRENT_COMPANY)
    const ANALYST_BARCHART_DATA = useSelector((state:RootState) => state.stocks.ANALYST_BARCHART_DATA)
    const COMPANY_ICON_BIN = useSelector((state:RootState) => state.stocks.COMPANY_ICON_BIN)

    // useEffect(() => {
    //     console.log('analystData', analystData)
    //     estimateBucket.forEach((estimate, index) => {
    //         console.log('estimateBucket', estimateBucket)
    //     })

    // }, [])

    // const resetBarGraph = async (estimateBucket) => {
    //     const length = estimateBucket.length;
    //     const index = Math.floor(Math.random() * length); // Generate a random index within the length of estimateBucket
        
    //     dispatch(SET_ANALYST_CURRENT_INDEX(index));
    //     estimateBucket.forEach((data, idx:number) => {
    //             if (idx === index) {
    //                 console.log('met our condition heres data', data);
    //                 dispatch(SET_ANALYST_BARCHART_DATA([data]))
    //             }
    //     })
        
    //     const company = estimateBucket[index]?.relativity?.company;
    
    //     // Assuming imageArray is defined somewhere
    //     imageArray.forEach((image) => {
    //         if (image.includes(company)) {
    //             dispatch(SET_ANALYST_CURRENT_COMPANY(image));
    //         }
    //     });
    // };

    const test = () => {
        console.log('analystData', analystData)
        console.log('estimate', estimate)
        console.log('relativity', relativity)
    }

    const test2 = () => {
    }

    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    const currentData = { open: 344, company: 'apple' }

    return (

      <Card onClick={test}>
      <Card.Body>

        <div className={styles.cardTitleRow}>
        <Card.Title id={styles.analystHeaderText}> {analystData?.relativity?.company} </Card.Title>

        </div>
    
        <div className="card" suppressHydrationWarning={true} id={styles.barGraphCont}>                
            <div id={styles.cardImgTop} className="card-img-top">
                    <BarChart 
                    barGap={20} width={250} height={250} data={[analystData]}>
                    <CartesianGrid strokeDasharray="20 20" />            
                    <YAxis/>            
                    <Bar dataKey="relativity.current" fill={ isEstimateGreaterThanCurrent ? "scarlet red" : "forestgreen" } />
                    <Bar dataKey="estimate" fill={isCurrentGreaterThanEstimate ? "forestgreen" : "scarlet red"} />                    
                    </BarChart>      
                    </div>                            
        </div>
      </Card.Body>
        <Card.Title        
         id={styles.analystHeaderText}> {percentageVariance} </Card.Title>        
      </Card>            


    )
}

{/*         git issue #13       copy-paste this code if hydration error pops up. this code once worked then caused hydratino errors. their <LineChart/> never caused one such error. */}
        {/* <BarChart width={730} height={250} data={[analystData]}>
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis />        
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart> */}

            {/* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}
