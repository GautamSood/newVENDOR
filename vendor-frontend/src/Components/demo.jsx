import React, {  useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const Demo = () => {
  const navigate = useNavigate(); 

  useEffect(() => {
    const userDetailsCookie = Cookies.get("userDetailsCookie");
    if (!userDetailsCookie) {
      navigate("/login");
    }
  }, [navigate]);
       const hi = () => {
         axios
           .get("/users/getInfo")
           .then((res) => {
               console.log(res);
           })
           .catch((err) => {
             console.log(err.message);
           });
       };
    
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Vendor Management
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
              <form className="d-flex">
                <div
                  className=""
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "gray",
                    width: "2rem",
                    height: "2rem",
                    cursor: "pointer",
                  }}
                >
                  <h4 className="" style={{ textAlign: "center" }}>
                    S
                  </h4>
                </div>
              </form>
            </div>
          </div>
        </nav>

        <div
          className=" mt-5 mx-auto "
          style={{ width: "80%", display: "flex", flexWrap: "wrap"}}
        >
        
          <div className="card p-4 " style={{ width: "14rem" , margin:"0.5rem" }}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className="card  p-4" style={{ width: "14rem" , margin:"0.5rem" }}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className="card p-4" style={{ width: "14rem" , margin:"0.5rem" }}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className="card  p-4" style={{ width: "14rem" , margin:"0.5rem" }}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className="card p-4 " style={{ width: "14rem" , margin:"0.5rem" }}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className="card  p-4" style={{ width: "14rem" , margin:"0.5rem" }}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className="card p-4" style={{ width: "14rem" , margin:"0.5rem" }}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className="card  p-4" style={{ width: "14rem" , margin:"0.5rem" }}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </>
    );
};

export default Demo;
