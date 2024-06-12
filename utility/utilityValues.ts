import crypto from "crypto"
import { dayMonthYearINTERFACE } from "Interface/InterfaceTypes"

// 
// project-root
// |-- pages
// |   |-- your-page.js
// |-- locales
// |   |-- en
// |       |-- translation.json
// |   |-- es
// |       |-- translation.json
// |-- ...

export function findStrainFromAllStrains(strainToFind:any, allStrains:any) { return allStrains.find(s => s.strain === strainToFind) }

export function nothing () {return}

// return random Value from non random Array specified by Param.s
export function randomValueFromArray (array:any) { return array[Math.floor(Math.random() * array.length)] }

export const coinTossValues:number[] = [1,2,3]
export function coinTossRandomizer () {
  const randomNumber = coinTossValues[Math.floor(Math.random() * coinTossValues.length)]
  return randomNumber;
}

// Fisher-Yates / Fisher-Price shuffle for babies.

export function shuffleArray(array:any) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function shuffleArrayOfObjects(array:any) {
  const shuffledIndices:any = Array.from(array.keys());

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledIndices[i], shuffledIndices[j]] = [shuffledIndices[j], shuffledIndices[i]];
  }

  const shuffledArray:any[] = [];
  for (const index of shuffledIndices) {
    shuffledArray.push(array[index]);
  }

  return shuffledArray;
}

// const randomStrain = strains[Math.floor(Math.random() * strains.length )]


export function jsonSTRINGIFY(json:any) { JSON.stringify(json) }
export function jsonPARSE(string:any) { JSON.parse(string) }

export const JWTsecretKeyMaker = () => { return crypto.randomBytes(33).toString('hex') }

// clientside

// document.cookie = `token=${userLogin.token}; max-age=${7 * 24 * 60 * 60}; path=/;`;  
// document.cookie = `id=${userLogin.id}; max-age=${7 * 24 * 60 * 60}; path=/;`;  

export function getCookie() {
    if (typeof window === 'undefined') return [];
    
    let preCookie = document.cookie.split('; ');
    let cookie = preCookie[0]? preCookie[0] : ''
      if (cookie === null || cookie === undefined || cookie === '') {
        return "cookie error"
      }
    return cookie;
}
  
export function clearCookie(name) {
    document.cookie = `${name}=; expires=Thu, 11 Nov 1864 00:00:00 UTC; path=/;`;
  }


export const remembermecookiePROMISE = new Promise( (cookies, milk) => {
  // get cookie and return which will include both the token and the id.
  const precookie = getCookie()           
  cookies(precookie)
  milk("spill")
})

export function iPROMISEcookies () {
  return remembermecookiePROMISE
  .then(async(c:any) => {
    let cookieIdString = c[1]
    const sliceID = cookieIdString.slice(3)
    return sliceID || "no id"
    // let cookieID = cookieIdString.replace(RreturnNumbers, '') // replace doesn't exist on string or object
  })
}

export function ReturnUrl (context:any) {    
  if (process.env.NODE_ENV === "production") {
      return `https://${context.req.rawHeaders[1]}`;
    } 
    else  {                 
      return "http://localhost:3000";      
    }
} 

export function ThrowErrIfNoData (data:any, dataName:string) {
  if (!data) {
    throw new Error(`Error encountered. No ${dataName}`)
  } else {
    return
  }
}

//  [usernameAtleast8, userUnique, usernameUnder20] [email, emailUnique, extension] [passUppers, special, passNums]
export const signupConstraintsTextObj = {
    unique: "unique",
    usernameAtLeast8: ">",
    usernameUnder20: "<",
    email: "@",
    extension: ".com",
    passUppers: "ABC",
    special: "special",
    passNums: "123"
}

export const emailExtensionBucket:string[] = ['.com', '.net', '.org', '.edu', '.gov'];

// document.cookie = `token=${userLogin.token}; max-age=${7 * 24 * 60 * 60}; path=/;`;

export function getToday (lang:string) {
  // 'en-us'
  let today = new Date()  

    let mmddyyyyFormatDate = today.toLocaleDateString(lang, {
        month: '2-digit',
        day: '2-digit', 
        year: 'numeric',
      })
      
    let dayOfWeek = today.toLocaleDateString(lang, {
        weekday: 'long'
    })
    
    return {
      date: mmddyyyyFormatDate, //     ? mmddyyyyFormatDate : 'no date',               // overkill null safety 
      weekday: dayOfWeek //           ? dayOfWeek: 'no weekday'     
    }
}

export function getTime () {
// timezone:string param?


}

export function formatDate (mm:string, dd:string, yyyy:string) {
  let formattedDate = `${mm}-${dd}-${yyyy}`
  return formattedDate
}

// border-top-left-radius, etc -> dynamic styling based on random-generated value & redux-state-variable.
export const cornerNumbers:number[] = [177, 44, 38, 120, 60, 69, 77, 99]

export function isArrayEmpty(array:any) {
  if (typeof array === 'object') {
    if (array === null || array === undefined || array?.length <= 0) return true
    else return false;
  } else {
    return 'error'
  }
}

export function isStringEmpty(string:any) {
  if (typeof string === 'string') {
    if (string === null || string === undefined || string?.length <= 0) return true
    else return false
  } else {
    return 'error'
  }
}

export const locales:string[] =  ['en', 'zh', 'hi', 'fr', 'ar', 'bn', 'ur', 'es', 'pt', 'ru', 'id', 'de']

export function isParamValidLocale (localeToCheck:string) {
  if (locales.includes(localeToCheck)) {
    return true;
  } else {
    return false;
  }
}

export function stringifyBooleanArray (array:boolean[]) {
  let stringifiedCheckbox = JSON.stringify(array)
  let checkboxArray = [stringifiedCheckbox]
  return checkboxArray;
}

export function resetBoolArrayFalseSetIndexTrue(index:number, lengthOfBoolArray:number) {
  let boolBucket:boolean[] = new Array(lengthOfBoolArray).fill(false);    
        boolBucket[index] = true;
  return boolBucket;
}

export function splitDateSetObject (date:string) {
  let dayMonthYearObject:dayMonthYearINTERFACE = { 
    day: '',
    month: '',
    year: ''
  }

  const dateSplit:any = date?.split('-')  
  const splitDateSetObjectPROMISE = new Promise((resolve:any, reject:any) => {
      if (dateSplit[0]) { dayMonthYearObject.month = dateSplit[0] }                        
      if (dateSplit[1]) { dayMonthYearObject.day = dateSplit[1] }
      if (dateSplit[2]) { dayMonthYearObject.year = dateSplit[2] }
      resolve(dayMonthYearObject)
      reject(null);
  })
      return splitDateSetObjectPROMISE
}