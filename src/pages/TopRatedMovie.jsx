import React from 'react'
import Banner from '../components/Banner'

function TopRatedMovie({populars,about,setAbout}) {
  return (
    <div>
     <Banner populars={populars} about={about} setAbout={setAbout}/>
    </div>
  )
}

export default TopRatedMovie
