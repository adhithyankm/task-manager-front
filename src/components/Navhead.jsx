import React from 'react'
import { Link } from 'react-router-dom'

function Navhead() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic fw-bold" to={"/"}>task</Link>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             
              


            </ul>

          </div> */}
        </div>
      </nav>


    </>
  )
}

export default Navhead