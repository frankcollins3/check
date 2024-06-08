import axios from 'axios';
import React, { useEffect, useState, useContext, createContext } from 'react'

// @reduxjs/toolkit global state management
import {useSelector, useDispatch} from 'react-redux'
import { RootState } from 'redux/store/rootReducer';
import { SET_CURRENT_USER } from 'redux/currentUser/currentUserSlice';

// components and styles
import Container from 'react-bootstrap/Container';
import Days from 'components/Content/Days/Days';

// utils
import { useImage } from "Contexts/Img";
import { useIntroFunction } from "Contexts/IntroFunctions";
import {useContentFunction} from "Contexts/ContentFunctions";
import { useCookieFunction } from 'Contexts/CookiesFunctions';
import { isParamValidLocale } from 'utility/utilityValues';

export default function Main ( props:any ) {      
  // console.log('Main.tsx: props', props)

  const dispatch = useDispatch()  
  
  const [touchCoin, setTouchCoin] = useState(false)
    // props go here and get spit out in RENDERMAIN   

    const { isTodayWeekendFunc } = useContentFunction()
    const { getAllDomainCookies, getUserTokenFromCookies, getUserTokenDetails, getCurrentUserWithCurrentUserToken } = useCookieFunction()

    // const CURRENT_LANGUAGE = useSelector((state:RootState) => state.allOrAny.CURRENT_LANGUAGE)
    
    // if no user get user. saving in case charts & other things goes faster than expected. 
    useEffect( () => {  
      (async() => {                    
          let tokenDetails = await getUserTokenDetails()
          if (tokenDetails?.id > 0) {
            // const currentUser = await getCurrentUserWithCurrentUserToken(tokenDetails)
        
            // SET_CURRENT_USER on client-effect side or client-promise side? find best place to invoke the function.
          } else {
            // dispatch(SET_CURR_DAY_SELECTION('need login'))
          }
          const isTodayWeekend = await isTodayWeekendFunc()                                        
        })()
    }, [])

    const newTest = () => {
      console.log('newTest: props', props)
    }

    return (
      <Main id="introMain">                            
      <p> hey </p>
      {/* <Days dayId={2}/>       */}

      </Main>       

    )
  }

  export async function getStaticProps(context) {
    let spanish = 'es'
    const locale = context?.locale ? context?.locale : 'en'
    console.log('SERVERSIDE! Main.tsx: locale', locale)

    
    // const locales:string[] =  ['en', 'zh', 'hi', 'fr', 'ar', 'bn', 'ur', 'es', 'pt', 'ru', 'id', 'de']
    const isLocaleValid = isParamValidLocale(locale)
    
    if (!isLocaleValid)
      return {
        props: {
// if above locales array doesn't include locale, then the    i18nConfig.js   isnt expecting that locale and return 'no messages'
          messages: 'no messages'
        }
      }    
    
    // if we got this far then:         locales[] includes the ISO code returned by {context.locale} destructured above.
    const messages = (await import(`messages/${locale}/${locale}.json`)).default;
    return {
      props: {        
        messages: messages || null,
      }
    };
    
  // tried dynamic messages & to send:   JSON.stringify(messages)  but then:   t = useTranslation('') cant have obj when it expects str
                                // const enMessages = (await import(`messages/en/en.json`)).default
                                // const zhMessages = (await import(`messages/zh/zh.json`)).default
                                
                          
                                // const messagesObject = {
                                //   en: enMessages,
                                //   zh: zhMessages,        
                                // }    
  }