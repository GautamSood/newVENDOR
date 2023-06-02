import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";


// Build By Ashutosh

const InvoiceMaster = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userDetailsCookie = Cookies.get("userDetailsCookie");
    if (!userDetailsCookie) {
      navigate("/auth/login");
    }
  }, [navigate]);

  const formsubmit = (e) => {
    e.preventDefault();
    console.log("Working!");
    let formData = new FormData(e.target);
    formData = Object.fromEntries(formData);
    console.log(formData);
    const id = toast.loading("Please wait...");

    axios
      .post("vendors/addInvoice", {
        data: formData,
      })
      .then((res) => {
        console.log(res);
        toast.update(id, {
          render: "Stored",
          type: "success",
          isLoading: false,
          closeOnClick: true,
          autoClose: 5000,
        });
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

  async function  logOut() {
    await axios.delete("/vendors/auth/signOut");
    Cookies.remove("userDetailsCookie");
    navigate("/");
  }

  return (
    <>
      <Navbar />
      <div style={{ fontFamily: "serif" }}>
        <h1 className="mt-5" style={{ textAlign: "center" }}>
          Vendor Invoice Submission
        </h1>
        <br />

        <div className="container">
          <button
            className="btn btn-outline-primary mb-5"
            onClick={() => {
              // axios
              //   .get("/vendors/getInfo")
              //   .then((res) => {
              //     console.log(res);
              //   })
              //   .catch((err) => {
              //     console.log(err);
              //   });
              logOut();
            }}
          >
            Logout
          </button>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              formsubmit(event);
            }}
          >
            <div className="mb-3 row">
              {/* <div className="col">
                  <label htmlFor="vendorid" className="form-label">Vendor ID</label>
                  <input type="number" className="form-control" id="vendorid" name="vendorid"/>
              </div> */}
            </div>
            <div className="mb-3 row">
              <div className="col">
                <label htmlFor="invoicedate" className="form-label">
                  Invoice Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="invoicedate"
                  name="invoicedate"
                  onChange={(e) => {
                    console.log(typeof e.target.value);
                  }}
                />
              </div>

              <div className="col">
                <label htmlFor="invoicecuurency" className="form-label">
                  Invoice Currency
                </label>
                <select
                  className="form-select"
                  aria-label="DocumentCurrency"
                  id="invoicecurrency"
                  defaultValue={"INR"}
                  name="invoicecuurency"
                >
                  <option value="inr">INR</option>
                  <option value="1">Dollars</option>
                  <option value="2">Dhiram</option>
                </select>
              </div>
            </div>
            <div className="mb-3 row">
              <div className="col">
                <label htmlFor="invoiceamount" className="form-label">
                  Invoice Amount
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="invoiceamount"
                  name="invoiceamount"
                />

                <div className="col">
                  <label htmlFor="invoicestatus" className="form-label">
                    Invoice Status
                  </label>
                  <select
                    className="form-select"
                    aria-label="DocumentCurrency"
                    id="invoicestatus"
                    defaultValue={"Pending"}
                    name="invoicestatus"
                  >
                    <option value="Pending">Pending</option>
                    <option value="2">Rejected</option>
                    <option value="3">Approved</option>
                  </select>
                </div>
              </div>

              <div className="col"></div>
            </div>
            <br />
            <label htmlFor="uploaddocument" className="form-label">
              Upload Documents
            </label>

            <div className="mb-3">
              <div className="row">
                <div className="col">
                  <label htmlFor="Attachment1" className="form-label">
                    Attachment1
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="Attachment1"
                  />
                </div>
                <div className="col">
                  <label htmlFor="Attachment2" className="form-label">
                    Attachment2
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="Attachment2"
                  />
                </div>
                <div className="col">
                  <label htmlFor="Attachment3" className="form-label">
                    Attachment3
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="Attachment3"
                  />
                </div>
              </div>
            </div>
            <div className="mb-5">
              <div className="row">
                <div className="col">
                  <label htmlFor="Attachment4" className="form-label">
                    Attachment4
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="Attachment4"
                  />
                </div>
                <div className="col">
                  <label htmlFor="Attachment5" className="form-label">
                    Attachment5
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="Attachment5"
                  />
                </div>
                <div className="col">
                  <label htmlFor="Attachment6" className="form-label">
                    Attachment6
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="Attachment6"
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default InvoiceMaster;
