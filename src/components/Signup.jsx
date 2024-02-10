import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
    const[input,setInput]=new useState([{
    name: "",
      age: "",
      mobile: "",
      address: "",
      pincode: "",
      email: "",
      password: "",
    }])
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})

    }
    const readValues=()=>{
        axios.post("http://localhost:3001/api/registeration/signup").then(
            (response)=>{
                console.log(response.data)
                if(response.data.status==="success")
                {
                    alert("succesfully inserted")
                }
                else{
                    alert("something went wrong")
                }
            }
        )
    }

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={input.name}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Age:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="age"
                  value={input.age}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Mobile:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="mobile"
                  value={input.mobile}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={input.address}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Pincode:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="pincode"
                  value={input.pincode}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={input.email}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={input.password}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={readValues}>
                  Add Details
                </button>
              </div>
            </div>
            <div style={{textAlign:"center"}}><Link to="/"> Back to login</Link></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup
