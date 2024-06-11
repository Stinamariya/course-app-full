import React from 'react'
import NavBar from './NavBar'

const SearchCourse = () => {
  return (
    <div>
      <NavBar/>
      <h1><center>SEARCH COURSE</center></h1>
        <div className="container">
          <div className="row">
            <div className="col col-12-col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <label htmlFor="" className="form-label">SEARCH</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col col-12-col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <br />
              <center><button className="btn btn-success">Search</button></center>
            </div>
          </div>
        </div>
        
         </div>
  )
}

export default SearchCourse