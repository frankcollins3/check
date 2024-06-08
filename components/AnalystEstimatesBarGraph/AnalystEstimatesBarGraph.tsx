import { BarChart, CartesianGrid, YAxis, Bar } from 'recharts';
import {useEffect} from "react";

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

export default function AnalystEstimatesBarGraph() {
    return <RENDER/>
}

// have to pack:                currentAmount, analystAmount into array

function RENDER() {
    // array of objects 
    // const data = [];
    const dispatch = useDispatch()
    const { appleLogo , bofaLogo, citibankLogo, goldmanSachsLogo, morganStanleyLogo, jpMorganLogo, moelisLogo, lazardLogo, evercoreLogo } = useImage()
    const imageArray:string[] = [bofaLogo, citibankLogo, goldmanSachsLogo, morganStanleyLogo, jpMorganLogo, moelisLogo, lazardLogo, evercoreLogo ];

    const ANALYST_CURRENT_INDEX = useSelector((state:RootState) => state.stocks.ANALYST_CURRENT_INDEX)
    const ANALYST_CURRENT_COMPANY = useSelector((state:RootState) => state.stocks.ANALYST_CURRENT_COMPANY)
    const ANALYST_BARCHART_DATA = useSelector((state:RootState) => state.stocks.ANALYST_BARCHART_DATA)
    const COMPANY_ICON_BIN = useSelector((state:RootState) => state.stocks.COMPANY_ICON_BIN)

    const resetBarGraph = async (estimateBucket) => {
        const length = estimateBucket.length;
        const index = Math.floor(Math.random() * length); // Generate a random index within the length of estimateBucket
        
        dispatch(SET_ANALYST_CURRENT_INDEX(index));
        estimateBucket.forEach((data, idx:number) => {
                if (idx === index) {
                    console.log('met our condition heres data', data);
                    dispatch(SET_ANALYST_BARCHART_DATA([data]))
                }
        })
        
        const company = estimateBucket[index]?.relativity?.company;
    
        // Assuming imageArray is defined somewhere
        imageArray.forEach((image) => {
            if (image.includes(company)) {
                dispatch(SET_ANALYST_CURRENT_COMPANY(image));
            }
        });
    
    };

    useEffect(() => {
        // in name of saving time not modularizing
        resetBarGraph(estimateBucket);
    }, [])
    

    const currentData = { open: 344, company: 'apple' }
    const analystEstimate = { relativity: { estimate: 400, company: "morgan stanley" } }

    const data = [
        currentData,
        analystEstimate
    ]

    const test = () => {
        resetBarGraph(estimateBucket);
    }

    const test2 = () => {
        console.log('estimateBucket', estimateBucket)
        console.log(estimateBucket[ANALYST_CURRENT_INDEX])
    }

    return (
        <Container id={styles.barGraphCont}>
            <BarChart width={250} height={250} data={[estimateBucket[ANALYST_CURRENT_INDEX], estimateBucket[ANALYST_CURRENT_INDEX]]}>
            <CartesianGrid strokeDasharray="20 20" />            
            <YAxis />            
            <Bar dataKey="relativity.current" fill="grey" />
            <Bar dataKey="relativity.estimate" fill="rgb(100,88,88)" />
            </BarChart>
            <Container id={styles.xAxisCompanyIconCont}>    
                <img onClick={test}  className={styles.companyIcons} src={appleLogo} />            
                <img onClick={test2} style={{ left: '-30px' }}  className={styles.companyIcons} src={ANALYST_CURRENT_COMPANY} />            
            </Container>
        </Container>
    )
}