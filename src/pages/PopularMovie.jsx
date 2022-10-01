import React from 'react'
import Banner from '../components/Banner'

function PopularMovie({populars,about,setAbout}) {
  return (
    <>
       <Banner populars={populars} about={about} setAbout={setAbout} />
    </>
  )
}

export default PopularMovie
