import { candlestickINTERFACE, candlestickARRAYTYPE } from "Interface/InterfaceTypes";

// extensively a non-relational DB like mongo. OHLCV data. but especially if range from 7-52 weeks only JSON.stringify() data
// could allow web scraper functions or human reported data and wishlistingly allow AI to Object.deleteProperty() tickers display erroneous info

// have to fix this data! it doesn't account for weekends existing lol.
const week1:candlestickARRAYTYPE = [
  { id: null, open: 180, high: 195, low: 170, close: 190, volume: 95432100, date: '5-1-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' },
  { id: null, open: 193, high: 202, low: 184, close: 198, volume: 100230123, date: '5-2-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' },
  { id: null, open: 195, high: 205, low: 190, close: 198, volume: 104143210, date: '5-3-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' },
  { id: null, open: 208, high: 208, low: 185, close: 192, volume: 980421054, date: '5-4-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' },
  { id: null, open: 192, high: 210, low: 180, close: 205, volume: 102350123, date: '5-5-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' }
];

  const week2:candlestickARRAYTYPE = [
    { id: null, open: 192, high: 197, low: 190, close: 195, volume: 2312340, date: '5-8-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' },
    { id: null, open: 195, high: 200, low: 193, close: 198, volume: 3128342, date: '5-9-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' },
    { id: null, open: 198, high: 202, low: 196, close: 200, volume: 4100239, date: '5-10-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' },
    { id: null, open: 200, high: 205, low: 198, close: 203, volume: 5000123, date: '5-11-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' },
    { id: null, open: 203, high: 207, low: 201, close: 205, volume: 6012340, date: '5-12-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' }
  ];

  const week3:candlestickARRAYTYPE = [
    { id: null, open: 205, high: 210, low: 203, close: 208, volume: 27012340, date: '5-15-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' },
    { id: null, open: 208, high: 212, low: 206, close: 210, volume: 2100123, date: '5-16-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' },
    { id: null, open: 212, high: 220, low: 208, close: 213, volume: 3001234, date: '5-17-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' },
    { id: null, open: 218, high: 220, low: 199, close: 207, volume: 3123456, date: '5-18-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' },
    { id: null, open: 207, high: 211, low: 204, close: 206, volume: 11234567, date: '5-19-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' }
  ];

  const week4:candlestickARRAYTYPE = [
    { id: null, open: 206, high: 224, low: 206, close: 215, volume: 32345678, date: '5-22-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' },
    { id: null, open: 221, high: 230, low: 219, close: 225, volume: 43456789, date: '5-23-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' },
    { id: null, open: 230, high: 233, low: 227, close: 231, volume: 203289201, date: '5-24-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' },
    { id: null, open: 230, high: 234, low: 228, close: 230, volume: 47747493, date: '5-25-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' },
    { id: null, open: 228, high: 234, low: 228, close: 234, volume: 36789012, date: '5-26-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' }
  ];

  const week5:candlestickARRAYTYPE = [
    { id: null, open: 232, high: 240, low: 232, close: 237, volume: 392345678, date: '5-27-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' },
    { id: null, open: 240, high: 248, low: 237, close: 247, volume: 397374893, date: '5-28-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' },
    { id: null, open: 255, high: 260, low: 248, close: 251, volume: 299432412, date: '5-29-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png'},
    { id: null, open: 250, high: 260, low: 250, close: 250, volume: 198449654, date: '5-30-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' },
    { id: null, open: 250, high: 262, low: 250, close: 265, volume: 96789012, date: '5-31-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' }
  ];

  const week6:candlestickARRAYTYPE = [
    { id: null, open: 268, high: 280, low: 272, close: 272, volume: 92345678, date: '6-1-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' },
    { id: null, open: 270, high: 270, low: 263, close: 267, volume: 97374893, date: '6-2-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png'},
    { id: null, open: 271, high: 281, low: 271, close: 277, volume: 99432412, date: '6-3-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' },
    { id: null, open: 280, high: 287, low: 273, close: 283, volume: 98449654, date: '6-4-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' },
    { id: null, open: 290, high: 293, low: 281, close: 288, volume: 96789012, date: '6-5-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' }
  ];

  const week7:candlestickARRAYTYPE = [
    { id: null, open: 289, high: 299, low: 287, close: 289, volume: 52345678, date: '6-6-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' },
    { id: null, open: 289, high: 301, low: 289, close: 289, volume: 77374893, date: '6-7-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' },
    { id: null, open: 289, high: 315, low: 289, close: 311, volume: 201693451, date: '6-8-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' },
    { id: null, open: 315, high: 322, low: 315, close: 319, volume: 42582242, date: '6-9-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' },
    { id: null, open: 321, high: 331, low: 321, close: 325, volume: 96789012, date: '6-10-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' }
  ];
  
  const week8:candlestickARRAYTYPE = [
    { id: null, open: 330, high: 340, low: 330, close: 337, volume: 104587289, date: '6-11-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' },
    { id: null, open: 340, high: 353, low: 338, close: 352, volume: 112587289, date: '6-12-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' },
    { id: null, open: 353, high: 370, low: 353, close: 365, volume: 108587289, date: '6-13-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' },
    { id: null, open: 371, high: 381, low: 362, close: 368, volume: 122582242, date: '6-14-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' },
    { id: null, open: 370, high: 384, low: 368, close: 380, volume: 96789012, date: '6-15-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' }
  ];

  const week9:candlestickARRAYTYPE = [
    { id: null, open: 400, high: 418, low: 390, close: 405, volume: 214587289, date: '6-16-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' },
    { id: null, open: 399, high: 420, low: 399, close: 412, volume: 222587289, date: '6-17-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' },
    { id: null, open: 415, high: 444, low: 404, close: 429, volume: 292582242, date: '6-18-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png'},
    { id: null, open: 430, high: 448, low: 430, close: 430, volume: 408587289, date: '6-19-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' },
    { id: null, open: 440, high: 454, low: 434, close: 451, volume: 766789012, date: '6-20-2024', company: 'Apple', ticker: 'AAPL', logo: '/img/appleLogo.png' }
  ];

  //

const season:candlestickARRAYTYPE = [
  ...week1,
  ...week2,
  ...week3,
  ...week4,
  ...week5,
  ...week6,
  ...week7,
  ...week8,
  ...week9
]

  
  export default season;



  // microsoft candle stick data to do comparisons it'll take the spot of the calendar!!

  // const week1:candlestickARRAYTYPE = [
  //   { id: null, open: 250, high: 260, low: 245, close: 255, volume: 75432100, date: '5-1-2024' },
  //   { id: null, open: 255, high: 265, low: 250, close: 260, volume: 80230123, date: '5-2-2024' },
  //   { id: null, open: 262, high: 270, low: 255, close: 265, volume: 84143210, date: '5-3-2024' },
  //   { id: null, open: 268, high: 272, low: 260, close: 270, volume: 78042154, date: '5-4-2024' },
  //   { id: null, open: 272, high: 275, low: 265, close: 273, volume: 82350123, date: '5-5-2024' }
  // ];
  
  // const week2:candlestickARRAYTYPE = [
  //   { id: null, open: 273, high: 278, low: 270, close: 275, volume: 7312340, date: '5-8-2024' },
  //   { id: null, open: 275, high: 280, low: 272, close: 278, volume: 8128342, date: '5-9-2024' },
  //   { id: null, open: 278, high: 283, low: 275, close: 280, volume: 9100239, date: '5-10-2024' },
  //   { id: null, open: 280, high: 285, low: 278, close: 283, volume: 10000123, date: '5-11-2024' },
  //   { id: null, open: 283, high: 288, low: 280, close: 285, volume: 11012340, date: '5-12-2024' }
  // ];
  
  // const week3:candlestickARRAYTYPE = [
  //   { id: null, open: 285, high: 290, low: 283, close: 288, volume: 27012340, date: '5-15-2024' },
  //   { id: null, open: 288, high: 293, low: 285, close: 290, volume: 2200123, date: '5-16-2024' },
  //   { id: null, open: 290, high: 295, low: 288, close: 292, volume: 3001234, date: '5-17-2024' },
  //   { id: null, open: 295, high: 300, low: 290, close: 298, volume: 3123456, date: '5-18-2024' },
  //   { id: null, open: 298, high: 302, low: 295, close: 300, volume: 1234567, date: '5-19-2024' }
  // ];
  
  // const week4:candlestickARRAYTYPE = [
  //   { id: null, open: 300, high: 310, low: 298, close: 305, volume: 22345678, date: '5-22-2024' },
  //   { id: null, open: 305, high: 315, low: 303, close: 310, volume: 33456789, date: '5-23-2024' },
  //   { id: null, open: 310, high: 318, low: 308, close: 315, volume: 183289201, date: '5-24-2024' },
  //   { id: null, open: 315, high: 320, low: 312, close: 318, volume: 27747493, date: '5-25-2024' },
  //   { id: null, open: 318, high: 325, low: 316, close: 323, volume: 26789012, date: '5-26-2024' }
  // ];
  
  // const week5:candlestickARRAYTYPE = [
  //   { id: null, open: 323, high: 330, low: 320, close: 328, volume: 292345678, date: '5-27-2024' },
  //   { id: null, open: 328, high: 335, low: 325, close: 332, volume: 297374893, date: '5-28-2024' },
  //   { id: null, open: 332, high: 340, low: 330, close: 338, volume: 199432412, date: '5-29-2024' },
  //   { id: null, open: 338, high: 345, low: 335, close: 343, volume: 198449654, date: '5-30-2024' },
  //   { id: null, open: 343, high: 350, low: 340, close: 347, volume: 16789012, date: '5-31-2024' }
  // ];
  
  // const week6:candlestickARRAYTYPE = [
  //   { id: null, open: 347, high: 355, low: 345, close: 352, volume: 192345678, date: '6-1-2024' },
  //   { id: null, open: 352, high: 360, low: 350, close: 358, volume: 17374893, date: '6-2-2024' },
  //   { id: null, open: 358, high: 365, low: 355, close: 362, volume: 99432412, date: '6-3-2024' },
  //   { id: null, open: 362, high: 370, low: 360, close: 365, volume: 98449654, date: '6-4-2024' },
  //   { id: null, open: 365, high: 375, low: 363, close: 370, volume: 96789012, date: '6-5-2024' }
  // ];
  
  // const week7:candlestickARRAYTYPE = [
  //   { id: null, open: 370, high: 380, low: 365, close: 375, volume: 92345678, date: '6-6-2024' },
  //   { id: null, open: 375, high: 385, low: 370, close: 380, volume: 77374893, date: '6-7-2024' },
  //   { id: null, open: 380, high: 390, low: 375, close: 385, volume: 201693451, date: '6-8-2024' },
  //   { id: null, open: 385, high: 395, low: 380, close: 390, volume: 42582242, date: '6-9-2024' },
  //   { id: null, open: 390, high: 400, low: 385, close: 395, volume: 96789012, date: '6-10-2024' }
  // ];
  
  // const week8:candlestickARRAYTYPE = [
  //   { id: null, open: 395, high: 405, low: 390, close: 400, volume: 104587289, date: '6-11-2024' },
  //   { id: null, open: 400, high: 410, low: 395, close: 405, volume: 112587289, date: '6-12-2024' },
  //   { id: null, open: 405, high: 415, low: 400, close: 410, volume: 108587289, date: '6-13-2024' },
  //   { id: null, open: 410, high: 420, low: 405, close: 415, volume: 122582242, date: '6-14-2024' },
  //   { id: null, open: 415, high: 425, low: 410, close: 420, volume: 96789012, date: '6-15-2024' }
  // ];
  
  // const week9:candlestickARRAYTYPE = [
  //   { id: null, open: 420, high: 430, low: 415, close: 425, volume: 214587289, date: '6-16-2024' },
  //   { id: null, open: 425, high: 435, low: 420, close: 430, volume: 222587289, date: '6-17-2024' },
  //   { id: null, open: 430, high: 440, low: 425, close: 435, volume: 292582242, date: '6-18-2024' },
  //   { id: null, open: 435, high: 445, low: 430, close: 440, volume: 408587289, date: '6-19
