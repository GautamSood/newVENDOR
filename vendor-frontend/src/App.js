import { BrowserRouter, Routes, Route } from "react-router-dom";
import VendorRegisteration from "./Components/VendorRegisteration";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import Login from "./Components/Login";
import Demo from "./Components/demo";
import InvoiceMaster from "./Components/InvoiceSubmission";
import VendorProfile from "./Components/VendorProfile";


function App() {
  axios.defaults.baseURL = "http://localhost:4000/api/v1";
  axios.defaults.withCredentials = true;
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <BrowserRouter>
        <Routes>
          {/* <Route path="*" element={<NoPage />} /> */}
          <Route path="/" element={<VendorRegisteration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/invoice" element={<InvoiceMaster />} />
          <Route path="/VendorProfile" element={<VendorProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
