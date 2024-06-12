import React, { useState } from 'react';
import NavBar from './NavBar';
import axios from 'axios';

const SearchCourse = () => {
  const [data, changeData] = useState(
    { title: '' });
  const [result, setResult] = useState([]);

  const inputHandler = (event) => {
    changeData({ ...data, [event.target.name]: event.target.value });
  };

  const readValue = () => {
    console.log(data);
    axios.post('http://localhost:8080/search', data)
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <NavBar />
      <h1><center>SEARCH COURSE</center></h1>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">TITLE</label>
            <input
              type="text"
              className="form-control"
              name='title'
              value={data.title}
              onChange={inputHandler}
            />
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <br />
            <center><button className="btn btn-success" onClick={readValue}>Search</button></center>
          </div>
        </div>
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table className="table">
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
                {result.map((value, index) => (
                  <tr key={index}>
                    <td>{value.title}</td>
                    <td>{value.desc}</td>
                    <td>{value.date}</td>
                    <td>{value.duration}</td>
                    <td>{value.venu}</td>
                    <td>{value.trainerName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCourse;
