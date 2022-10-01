import React from 'react'

function Modals({value}) {
  return (
    <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
  <div className="modal-dialog ">
    <div className="modal-content bg-dark text-secondary">
      <div className="modal-header bg-dark text-secondary">
        <h5 className="modal-title" id="exampleModalLabel">{value.title}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body bg-dark text-secondary">
        <img src={`https://image.tmdb.org/t/p/w500${value.backdrop_path}`} className="w-100 h-50" alt="not found" />
        <p>{value.overview}</p>
      </div>
    
    </div>
  </div>
</div>
  )
}

export default Modals
