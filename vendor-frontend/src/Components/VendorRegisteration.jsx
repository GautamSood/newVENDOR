import React from 'react'
import axios from "axios"
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"; 
import { useState } from 'react';

const VendorRegisteration = () => {


      const [passwordeye, setpasswordeye] = useState("password");
      const navigate = useNavigate();

      const setUserCookie = (data) => {
        Cookies.set("userDetailsCookie", "data");
        console.log(Cookies.get("userDetailsCookie"));
        navigate("/invoice");
      };
   
  
  const formsubmit = (e) => {
     e.preventDefault();
      console.log("function is working")
      let formData = new FormData(e.target);
      formData = Object.fromEntries(formData);
 
    const id = toast.loading("Please wait...");


    axios
      .post("vendors/auth/signUp", {
        data: formData,
      })
      .then((res) => {
        console.log(res);
        toast.update(id, {
          render: "you are logedIn 🫱🏾‍🫲🏿",
          type: "success",
          isLoading: false,
          closeOnClick: true,
          autoClose: 5000,
        });
        setUserCookie(res);
      })
      .catch((res) => {
        console.log(res.message);
        toast.update(id, {
          render: "Something went wrong",
          type: "error",
          isLoading: false,
          closeOnClick: true,
          autoClose: 5000,
        });
      });
  };
  
  const viewPassword = () => {
    if (passwordeye === "password") {
      setpasswordeye("");
    } else {
      setpasswordeye("password");
    }
  };


  return (
    <div style={{ fontFamily: "serif" }}>
      <h1 className="" style={{ textAlign: "center" }}>
        Vendor Registerations
      </h1>

      <div className="container">
        <button type="button " className="btn btn-outline-primary m-2" onClick={() => {
          axios.get("/vendors/getInfo").then((res) => {
            console.log(res)
          }).catch((err) => {
            console.log(err);
          });
        }} >
          Home
        </button>
        <button
          type="button"
          className="btn btn-outline-primary m-2"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
      </div>

      <div className="container">
        <form
          onSubmit={(event) => {
            formsubmit(event);
          }}
        >
          <div className="mb-3 row">
            <div className="col">
              <label htmlFor="NameOfTheCompany" className="form-label">
                Name Of The Company / Firm
              </label>
              <input
                className="form-control"
                name="NameOfTheCompany"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="col">
              <label htmlFor="Contact Person Name" className="form-label">
                Contact Person Name
              </label>
              <input
                className="form-control"
                name="ContactPersonName"
                aria-describedby="emailHelp"
              />
            </div>
          </div>

          <div className="mb-3 row">
            <div className="col">
              <label htmlFor="PrimaryEmailID" className="form-label">
                Primary Email ID
              </label>
              <input className="form-control" name="PrimaryEmailID" />
            </div>
            <div className="col">
              <label htmlFor="Password" className="form-label">
                Password
              </label>
              <div className='input-group'>
                <input
                  type={passwordeye}
                  className="form-control"
                  name="Password"
                />
                <div
                  className="input-group-btn"
                  onClick={() => {
                    viewPassword();
                  }}
                >
                  <span className="btn btn-outline-secondary">
                    {passwordeye === "password" ? (
                      <FontAwesomeIcon icon={faEyeSlash} />
                    ) : (
                      <FontAwesomeIcon icon={faEye} />
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-3 row">
            <div className="col">
              <label htmlFor="SecondaryEmailID" className="form-label">
                Secondary Email ID
              </label>
              <input className="form-control" name="SecondaryEmailID" />
            </div>
            <div className="col"></div>
          </div>

          <div className="mb-3 row">
            <div className="col">
              <label htmlFor="Address" className="form-label">
                Address
              </label>
              <input className="form-control" name="Address" />
            </div>
            <div className="col">
              <label htmlFor="Street" className="form-label">
                Street
              </label>
              <input className="form-control" name="Street" />
            </div>
          </div>

          <div className="mb-3 row">
            <div className="col">
              <label htmlFor="State" className="form-label">
                State
              </label>
              <input className="form-control" name="State" />
            </div>
            <div className="col">
              <label htmlFor="PinCode" className="form-label">
                Pin Code
              </label>
              <input className="form-control" name="PinCode" />
            </div>
          </div>

          <div className="mb-3 row">
            <div className="col">
              <label htmlFor="PrimaryMobileNumber" className="form-label">
                Primary Mobile Number
              </label>
              <input className="form-control" name="PrimaryMobileNumber" />
            </div>

            <div className="col">
              <label htmlFor="SecondaryMobileNumber" className="form-label">
                Secondary Mobile Number
              </label>
              <input className="form-control" name="SecondaryMobileNumber" />
            </div>
          </div>

          <div className="mb-3 row">
            <div className="col">
              <label htmlFor="BankName" className="form-label">
                Bank Name
              </label>
              <input className="form-control" name="BankName" />
            </div>
            <div className="col">
              <label htmlFor="BankAddress" className="form-label">
                Bank Address
              </label>
              <input className="form-control" name="BankAddress" />
            </div>
          </div>

          <div className="mb-3 row">
            <div className="col">
              <label htmlFor="BankAccountNumber" className="form-label">
                Bank Account Number
              </label>
              <input className="form-control" name="BankAccountNumber" />
            </div>
            <div className="col">
              <label htmlFor="BankIFSCCode" className="form-label">
                Bank IFSC Code
              </label>
              <input className="form-control" name="BankIFSCCode" />
            </div>
          </div>

          <div className="mb-3 row">
            <div className="col">
              <label htmlFor="TypeOfVendor" className="form-label">
                Type Of Vendor
              </label>
              <select
                className="form-select"
                name="TypeOfVendor"
                defaultValue={"Courier"}
              >
                <option value="Courier">Courier</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="FrequencyBillSubmission" className="form-label">
                Frequency Bill Submission
              </label>
              <select
                className="form-select"
                name="FrequencyBillSubmission"
                defaultValue={"Recurring"}
              >
                <option value="Recurring">Recurring</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>

          <div className="mb-3 row">
            <div className="col">
              <label htmlFor="GSTInputCred" className="form-label">
                GST Input Credit Eligibility
              </label>
              <select
                className="form-select"
                name="GSTInputCred"
                defaultValue={"Courier"}
              >
                <option value="Courier">Courier</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="TDSApplicabilityType" className="form-label">
                TDS Applicability Type
              </label>
              <select
                className="form-select"
                name="TDSApplicabilityType"
                defaultValue={"Recurring"}
              >
                <option value="Recurring">Recurring</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>

          <div className="mb-3 row">
            <div className="col">
              <label htmlFor="LowerTDSCertificate" className="form-label">
                Does vendor has lower TDS Certificate
              </label>
              <select
                className="form-select"
                name="LowerTDSCertificate"
                defaultValue={"Courier"}
              >
                <option value="Courier">Courier</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col">
              <label
                htmlFor="LowerTaxDeductionCertificate"
                className="form-label"
              >
                Lower Tax Deduction Certificate
              </label>
              <select
                className="form-select"
                name="LowerTaxDeductionCertificate"
                defaultValue={"Recurring"}
              >
                <option value="Recurring">Recurring</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>

          <h3>Details of Buyer</h3>

          <button type="submit" className="btn btn-success">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default VendorRegisteration