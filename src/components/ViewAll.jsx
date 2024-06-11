import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    const [data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("http://localhost:8080/view").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
    }
      useEffect(()=>fetchData(),[]) 
  return (
    <div>
        <NavBar/>
        <h1><center>VIEW LIST</center></h1>
        <div className="container">
            <div className="row">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <table class="table">
  <thead>
    <tr>
      <th scope="col">TITLE</th>
      <th scope="col">DESCRIPTION</th>
      <th scope="col">DATE</th>
      <th scope="col">DURATION</th>
      <th scope="col">VENUE</th>
      <th scope="col">TRAINER NAME</th>
    </tr>
  </thead>
  <tbody>
    {data.map(
        (values, index)=>{
            return <tr>
            <td>{values.title}</td>
            <td>{values.desc}</td>
            <td>{values.date}</td>
            <td>{values.duration}</td>
            <td>{values.venu}</td>
            <td>{values.trainerName}</td>
          </tr>
        }
    )}
   
  </tbody>
</table>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll