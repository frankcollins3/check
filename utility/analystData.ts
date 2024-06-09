import { estimateINTERFACE } from "Interface/InterfaceTypes"

const bofaEstimate:estimateINTERFACE = {
    estimate: 285,
    rationale: "BofA saw increased investor confidence due to positive earnings reports.",
// analystData: { relativity: { current }} 10:00 hour b4 deploy link relativity.current to calendar & can look at different days.
    relativity: { current: 404, variance: null, company: 'bofa', ticker: "bac" }
    // date: "6-1-2024"
}

const citibankEstimate:estimateINTERFACE = {
    estimate: 365,
    rationale: "Citibank's stability was attributed to steady performance in its core banking operations.",
// relativity could also have {primary_exchange} maybe that's an uninformed take but that info is listed on google when looking up tickers.
    relativity: { current: 404, variance: null, company: 'citibank', ticker: 'c' }
}

const goldmanSachsEstimate:estimateINTERFACE = {
    estimate: 322,
    rationale: "Goldman Sachs benefited from strong performance in its investment banking division.",
    relativity: { current: 404, variance: null, company: 'goldmanSachs', ticker: 'gs' }
}

const morganStanleyEstimate:estimateINTERFACE = {
    estimate: 440,
    rationale: "Morgan Stanley's growth was driven by favorable market conditions and strategic acquisitions.",
    relativity: { current: 404, variance: null, company: 'morganStanley', ticker: 'ms' }
}

const jpMorganEstimate:estimateINTERFACE = {
    estimate: 405,
    rationale: "Morgan Stanley's growth was driven by favorable market conditions and strategic acquisitions.",
    relativity: { current: 404, variance: null, company: 'jpMorgan', ticker: 'jpm' }
}

const moelisEstimate:estimateINTERFACE = {
    estimate: 275,
    rationale: "Moelis experienced a moderate increase following successful advisory deals.",
    relativity: { current: 404, variance: null, company: 'moelis', ticker: 'mc' }
}

const lazardEstimate:estimateINTERFACE = {
    estimate: 295,
    rationale: "Lazard's gradual rise was due to strong performance in asset management and financial advisory services.",
    relativity: { current: 404, variance: null, company: 'lazard', ticker:  'laz' }
}

const evercoreEstimate:estimateINTERFACE = {
    estimate: 380,
    rationale: "Evercore's steady upward trend was supported by consistent revenue growth and successful deal closures.",
    relativity: { current: 404, variance: null, company: 'evercore', ticker: 'evr' }
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
