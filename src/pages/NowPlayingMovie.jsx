import React from 'react'
import Banner from '../components/Banner'

function NowPlayingMovie({populars,about,setAbout}) {
  return (
    <>
      <Banner populars={populars} about={about} setAbout={setAbout} />
    </>
  )
}

export default NowPlayingMovie
