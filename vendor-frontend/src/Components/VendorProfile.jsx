import React from 'react'

const VendorProfile = () => {
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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

      <div className="mt-5 mx-auto" style={{ width: "80%" }}>
        <div
          className="mx-auto"
          style={{
            borderRadius: "50%",
            backgroundColor: "gray",
            width: "11rem",
            height: "11rem",
            display: "table",
          }}
        >
          <h1
            className=""
            style={{
              textAlign: "center",
              verticalAlign: "middle",
              display: "table-cell",
            }}
          >
            S
          </h1>
        </div>
        <div className="mx-auto mt-5" style={{ width: "60%" }}>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Contact Person Name</th>

                <th scope="col" style={{ textAlign: "end" }}>
                  Sunny
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name Of The Company / Firm</td>
                <td style={{ textAlign: "end" }}>@mdo</td>
              </tr>
              <tr>
                <td>Primary Email ID</td>
                <td style={{ textAlign: "end" }}>@fat</td>
              </tr>
              <tr>
                <td>Secondary Email ID</td>
                <td style={{ textAlign: "end" }}>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default VendorProfile