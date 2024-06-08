import axios from 'axios'
import {RootState} from 'redux/store/rootReducer'
import {useSelector, useDispatch} from "react-redux"


// allStrainsGET resolver that returns:                     prisma.strains.findMany()
axios.post('/api/graphql', { query: `query { allStrainsGET { strain, strainid, dominant, funfact, parents, taste, smell, gold, nugget, thc, cbd } }`})
.then((response:any) => {
  // console.log('allstrains', response.data);
    console.log('allData', response.data);

})
.catch((error) => {
  console.error('Error fetching data:', error);
});
