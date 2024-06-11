import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddCourse = () => {
    const [data,changeData]=useState(
        {
            "title":"",
        "desc":"",
        "date":"",
        "duration":"",
        "venu":"",
        "trainerName":""
        }
    )
    const inputHandler=(event)=>{
        changeData({...data,[event.target.name]:
            event.target.value
        })
    }
    const readvalue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/add",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("success")
                    
                } else {
                    alert("error")
                    
                }
            }
        ).catch()
    }
  return (
    <div>
        <NavBar/>
        <h1><center>ADD COURSE</center></h1>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">COURSE TITLE</label>
                            <input type="text" className="form-control"name='title'value={data.title}onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">DESCRIPTION</label>
                            <input type="text" className="form-control" name='desc'value={data.desc}onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">DATE</label>
                            <input type="text" className="form-control"name='date'value={data.date}onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">DURATION</label>
                            <input type="text" className="form-control" name='duration'value={data.duration}onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">VENUE</label>
                            <input type="text" className="form-control"name='venu'value={data.venu}onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">TRAINER NAME</label>
                            <input type="text" className="form-control"name='trainerName'value={data.trainerName}onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <br />
                            <center><button className="btn btn-success"onClick={readvalue}>Submit</button></center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddCourse