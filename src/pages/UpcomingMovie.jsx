import React from 'react'
import Banner from '../components/Banner';
function UpcomingMovie({populars,about,setAbout}) {
  return (
    <>
     <Banner populars={populars} about={about} setAbout={setAbout}/>
    </>
  )
}

export default UpcomingMovie
