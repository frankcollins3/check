export default async function graphQLreturnDataChainerFunc(query:string, data:any) {
    // data.data.${functionName} this function chains data by comparing, [i]->[i] Object.Keys() & Object.Values()
// might not be used right away until app-wide known to not fail but might use as:              data = data?.data?.endpoint || data (correct everytime?

    // thx chatGPT saving incalculable numbers of hours determining this solution:
    const pattern = /\{\s*([^\{\(\s]+)\(/;
    // const matchResult = await returnMatch(pattern, query)
    // const string = "data.data.matchResult"
    
    let prechain = data?.data?.data
    let objectKeys = Object.keys(prechain)
    let objectValues = Object.values(prechain)

    return objectValues;
}

// that algo grabs   {doWeBlockEachOther|graphQLresolverName} regex that grabs b/w first instance of: "{"     "("     opening bracket & parenthesis

    // query {
    //     doWeBlockEachOther(meId: 5, youId: 2) {
    //     iBlockThem, theyBlockMe
    //     }
    // }


                // * * * * * * * * * * what I thought would work but didn't.
    
    //   const matchResult = await returnMatch(pattern, query)
    //   const stringifyString = JSON.stringify(matchResult)
    //   const MAGIC = JSON.parse(stringifyString)
    //   const endpoint = JSON.parse(stringifyString)
    //   const MAGIC2 = data.data.endpoint;

            //  * * * * * * * * * * * * * *   chatGPT thought this would work (didnt)

    // const dynamicQuery = `data.data.${matchResult}`;
    // const result = data[dynamicQuery];
    // console.log('Result:', result);
    // return query;