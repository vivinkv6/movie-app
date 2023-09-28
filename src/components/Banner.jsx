import React from 'react'
import Modals from './Modals';


function Banner({ populars, about, setAbout }) {

  //backdrop_path
  return (



    <>

      {populars.map((value) => {
        return (
        <div className='container'>
           <div className='row'>
          <div  key={value.id} className="mt-5 " onClick={(e) => {
            e.preventDefault()
            setAbout(value.id)

          }}

          >
           

           <div className="col-md-6">


            <button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal" >
              <center>
              <img src={`https://image.tmdb.org/t/p/w500${value.poster_path === null ? value.backdrop_path : value.poster_path}`} className="d-block w-100" alt="Not found" />
           </center>
              </button>
            </div>
            </div>
          </div>
          </div>
        )
      })}



      {populars.filter((value) => value.id === about).map((value) => {
        return (
          <>

            <Modals value={value} />

          </>
        )
      })}
    </>







  )
}

export default Banner
