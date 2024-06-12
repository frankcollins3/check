import { estimateINTERFACE } from "Interface/InterfaceTypes"

const bofaEstimate:estimateINTERFACE = {
    estimate: 285,
    rationale: "Increased investor confidence stemmed from positive earnings reports related to Apple. This could imply strong quarterly results, driven by robust iPhone sales and successful expansion into new markets like wearables and services.",
// analystData: { relativity: { current }} 10:00 hour b4 deploy link relativity.current to calendar & can look at different days.
// relativity: { current: 404, variance: null, company: 'bofa', ticker: "bac" }
    relativity: { current: 404, variance: null, company: 'Bank of America', ticker: 'bofa', }
    // date: "6-1-2024"
}

const citibankEstimate:estimateINTERFACE = {
    estimate: 365,
    rationale: "Stability in Apple's core business operations led to a positive outlook. This may suggest consistent revenue streams from various product lines, including iPhones, Macs, and services like iCloud and Apple Music.",
// relativity could also have {primary_exchange} maybe that's an uninformed take but that info is listed on google when looking up tickers.
    relativity: { current: 404, variance: null, company: 'Citibank', ticker: 'c' }
}

const goldmanSachsEstimate:estimateINTERFACE = {
    estimate: 322,
    rationale: "Strong performance in Apple's investment and innovation initiatives contributed to a favorable rating. This might reflect successful product launches, strategic investments, and advancements in services like Apple TV+ and Apple Arcade.",
    relativity: { current: 404, variance: null, company: 'Goldman Sachs', ticker: 'gs' }
}

const morganStanleyEstimate:estimateINTERFACE = {
    estimate: 440,
    rationale: "Favorable market conditions and strategic decisions propelled Apple's growth outlook. This could include optimism surrounding upcoming product releases, potential expansion into new markets, and continued dominance in existing ones.",
    relativity: { current: 404, variance: null, company: 'Morgan Stanley', ticker: 'ms' }
}

const jpMorganEstimate:estimateINTERFACE = {
    estimate: 405,
    rationale: "Positive market conditions and strategic initiatives drove JP Morgan's confidence in Apple. This might be attributed to strong demand for Apple products, anticipated revenue growth, and effective capital management strategies.",
    relativity: { current: 404, variance: null, company: 'JP Morgan', ticker: 'jpm' }
}

const moelisEstimate:estimateINTERFACE = {
    estimate: 275,
    rationale: "Apple saw a moderate increase following successful business ventures. This could signify steady growth fueled by product innovation, customer loyalty, and potential market expansion.",
    relativity: { current: 404, variance: null, company: 'Moelis', ticker: 'mc' }
}

const lazardEstimate:estimateINTERFACE = {
    estimate: 295,
    rationale: "Gradual rise in Apple's stock value due to strong performance in key business areas. This may include effective leadership, innovation, and market positioning in comparison to competitors.",
    relativity: { current: 404, variance: null, company: 'Lazard', ticker: 'laz' }
}

const evercoreEstimate:estimateINTERFACE = {
    estimate: 380,
    rationale: "Consistent revenue growth and successful business deals supported Evercore's positive assessment of Apple. This could indicate strong financial performance, promising future prospects, and effective execution of corporate strategies.",
    relativity: { current: 404, variance: null, company: 'Evercore', ticker: 'evr' }
}

    // AItentativeESTIMATE is a wishlist-item: might have it's own interface.
// const AItentativeESTIMATE:estimateINTERFACE = {}

const estimateBucket = [
    {...bofaEstimate},
    {...citibankEstimate},
    {...goldmanSachsEstimate},
    {...morganStanleyEstimate},
    {...morganStanleyEstimate},
    {...jpMorganEstimate},
    {...moelisEstimate},
    {...lazardEstimate},
    {...evercoreEstimate},
]

export default estimateBucket
// BofA: $310

// Reason: "BofA saw increased investor confidence due to positive earnings reports."
// Citibank: $285

// Reason: "Citibank's stability was attributed to steady performance in its core banking operations."
// Goldman Sachs: $365

// Reason: "Goldman Sachs benefited from strong performance in its investment banking division."
// Morgan Stanley: $325

// Reason: "Morgan Stanley's growth was driven by favorable market conditions and strategic acquisitions."
// J.P. Morgan: $405

// Reason: "J.P. Morgan's significant gain was due to robust quarterly earnings and positive market sentiment."
// Moelis: $255

// Reason: "Moelis experienced a moderate increase following successful advisory deals."
// Lazard: $275

// Reason: "Lazard's gradual rise was due to strong performance in asset management and financial advisory services."
// Evercore: $295

// Reason: "Evercore's steady upward trend was supported by consistent revenue growth and successful deal closures."
