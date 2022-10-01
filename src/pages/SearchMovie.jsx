import { useEffect, useState } from 'react';
import Banner from '../components/Banner';

function SearchMovie({apikey,query,about,setAbout}) {

const [searches, setSearches] = useState([]);    


useEffect(()=>{
    const search = fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${query}&page=1&include_adult=false`).then((res)=>res.json()).then((data)=>setSearches(data.results)).catch(err=>console.log(err))
    
},[query,apikey])


  return (
    <>
    { query === '' || searches.length  === 0 ?

    <div style={{height:'500px',display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}}>
    <h1 className='text-light text-center mt-5'>No Such Movies</h1>
    </div>
    :
      <Banner populars={searches} about={about} setAbout={setAbout}/>
    }
    </>
  )
}

export default SearchMovie
