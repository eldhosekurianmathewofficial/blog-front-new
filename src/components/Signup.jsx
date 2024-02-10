import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
  const [input, setInput] = new useState([
    {
      name: "",
      age: "",
      mobile: "",
      address: "",
      pincode: "",
      email: "",
      password: "",
    },
  ]);

  const inputHandler = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  const Navigate=useNavigate()
  const readValues = () => {
    console.log(input);
    axios
      .post("http://localhost:3001/api/registeration/signup", input)
      .then((response) => {
        console.log(response.data);
        if (response.data.status === "success") {
          alert("Succesfully inserted");
          Navigate("/")
        } else {
          alert("Something went wrong");
        }
      });
  };
  return (
    <div className="data my-5" >
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-lab">
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
                <label htmlFor="" className="form-lab">
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
                <label htmlFor="" className="form-lab">
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
                <label htmlFor="" className="form-lab">
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
                <label htmlFor="" className="form-lab">
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
                <label htmlFor="" className="form-lab">
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
                <label htmlFor="" className="form-lab">
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

export default Signup;
