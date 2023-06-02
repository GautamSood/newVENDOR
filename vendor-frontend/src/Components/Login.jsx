import React from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"; 

const Login = () => {

    const [passwordeye, setpasswordeye] = useState("password");
    const navigate = useNavigate();

    const setUserCookie = (data) => {       
         Cookies.set("userDetailsCookie", "data");
         console.log(Cookies.get("userDetailsCookie"));
         navigate("/invoice");
     };

    const handlesubmit = (e) => {
       
        e.preventDefault();
        console.log("function is working");
        let formData = new FormData(e.target);
        formData = Object.fromEntries(formData);
        console.log(formData);
        const id = toast.loading("Please wait...");
        
        axios
          .post("/vendors/auth/signIn", {
            data: formData,
          })
          .then((res) => {
            toast.update(id, {
              render: "you are logedIn 🫱🏾‍🫲🏿",
              type: "success",
              isLoading: false,
              closeOnClick: true,
              autoClose: 5000,
            });
            // console.log(res);
            setUserCookie(res);
          })
          .catch((err) => {
            console.log(err.message);
            toast.update(id, {
              render: "Something went wrong",
              type: "error",
              isLoading: false,
              closeOnClick: true,
              autoClose: 5000,
            });
          });
    }
  
  const viewPassword = () => {
    if (passwordeye === "password") {
      setpasswordeye("");

    }
    else {
     setpasswordeye("password"); 
    }
  }

  return (
    <>
      <div className="container" style={{ width: "50%" }}>
        <h1 style={{ textAlign: "center" }} className="mt-5">
          Login
        </h1>
        <button
          className="btn btn-outline-primary mb-5"
          onClick={() => {
            navigate("/");
          }}
        >
          SignUp
        </button>
        <form
          onSubmit={(e) => {
            handlesubmit(e);
          }}
        >
          <div className="form-group mb-3 ">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="Email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <div className="row">
              <div className="input-group">
                <input
                  type={passwordeye}
                  className="form-control"
                  id="exampleInputPassword1"
                  name="Password"
                  placeholder="Password"
                />

                <div
                  className="input-group-btn"
                  onClick={() => {
                    viewPassword();
                  }}
                >
                  <span className="btn btn-outline-secondary">
                    {passwordeye === "password" ? (
                      <FontAwesomeIcon icon={faEye} />
                    ) : (
                      <FontAwesomeIcon icon={faEyeSlash} />
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Login