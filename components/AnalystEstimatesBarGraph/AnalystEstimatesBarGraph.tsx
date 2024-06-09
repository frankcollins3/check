import { BarChart, CartesianGrid, YAxis, Bar } from 'recharts';
import {useEffect, useState} from "react";

  // @reduxjs/toolkit global state management
  import {useSelector, useDispatch} from 'react-redux'
  import { RootState } from 'redux/store/rootReducer';
  import {     
    SET_ANALYST_BARCHART_DATA, SET_ANALYST_CURRENT_COMPANY, SET_ANALYST_CURRENT_INDEX
   } from 'redux/stocks/stocksSlice';

// components and styling
import Container from "react-bootstrap/Container"
import styles from "./AnalystEstimatesBarGraph.module.scss"

// utility
import { randomValueFromArray } from "utility/utilityValues"
import {useImage} from "Contexts/Img"
import estimateBucket from "utility/analystData"

export default function AnalystEstimatesBarGraph(props:any) {
    const analystData = props.analystData;
    return <RENDER analystData={analystData}/>
}

// have to pack:                currentAmount, analystAmount into array

function RENDER(props:any) {

    // local state for dynamic component because global state will affect every single one which we want them isolated. // can manage globally isolated state with a:       barChartDataBin:[] = [] and select indexes corresponding to the element being clicked or engaged.
    // this will also make Math.random() easier because logic won't be cacheing or w.e it does to often retrieve same random value.
    const [barCharData, setBarCharData] = useState()
    const analystData:any = props?.analystData;
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
    }

    const test2 = () => {

    }

    const currentData = { open: 344, company: 'apple' }
    // const analystEstimate = { relativity: { estimate: 400, company: "morgan stanley" } }


// build super basic ads platform: [bofaEstimate, morganEstimate, jp, etc] pull random component. but every 3 or so? <advertisement>
    return (
        <Container id={styles.barGraphCont}>
            <BarChart 
            onMouseEnter={test}
            // barCategoryGap={50} 
            // considered making pie chart with this for all the analysts but might consider different way. 
            // institutional ownership of apple as the pie chart!

            // one could also do a bootstrap card and put the graph as the card body ?              ../ 
            barGap={50} width={200} height={200} data={[analystData]}>
            <CartesianGrid strokeDasharray="20 20" />            
            <YAxis/>            
            {/* if apple beats estimates then green red             else red green */}
            <Bar dataKey="relativity.current" fill={isEstimateGreaterThanCurrent ? "red" : "green"} />
            <Bar dataKey="estimate" fill={isCurrentGreaterThanEstimate ? "green" : "red"} />
            </BarChart>
            <Container id={styles.xAxisCompanyIconCont}>    
                <img onClick={test}  className={styles.companyIcons} src={appleLogo} />            
                <img onClick={test2}  className={styles.companyIcons} src={ANALYST_CURRENT_COMPANY || appleLogo} />            
            </Container>
        </Container>
    )
}
