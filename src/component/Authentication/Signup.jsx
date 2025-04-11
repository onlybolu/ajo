import { useState } from "react";
import Logo from "../logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState(""); 
  const [reason, setReason] = useState(""); 
  const [loading, setLoading] = useState(false); // Add loading state
  const [isChecked, setIsChecked] = useState(false); // Add checkbox state
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isChecked) {
      alert("You must agree to the terms before signing up.");
      return;
    }

    setLoading(true); // Set loading to true when the request starts

    axios
      .post("https://ajo-backend1.onrender.com/signup", { fullname, email, password, nationality, reason })
      .then((result) => {
        if (result.status === 200) {
          toast("Signup successful");
          setTimeout(() => {
            navigate("/login"); // Redirect after 3 seconds
          }, 2000)
        } else {
          alert("Signup failed");
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          toast.error(err.response.data.message); // Show "User already exists" message
        } else {
          toast.error("An error occurred during signup"); // Show generic error message
        }
      })
      .finally(() => {
        setLoading(false); // Set loading to false when the request completes
      });
  };

  return (
    <div
    className=""
      style={{
        background: "linear-gradient(#e3e5e6,#ece6cb,#e4e4e2,#eee8cd)",
        // height: "100vh",
        // position: "fixed",
        top:"-80px",
        width: "100%"
      }}
    >
     <div className="" style={{position:"sticky",top:"0", zIndex:"1000"}}>
     <Logo />
     </div>
       <ToastContainer />
      <div className="sanda d-flex justify-content-center align-items-center  w-100" style={{overflowY:"scroll", height:"120vh"}}>
        <div>
          <form action="submit" onSubmit={handleSubmit}>
            <div>
              <div>
                <h2 className="d-flex align-items-center justify-content-center">
                  Create an account
                </h2>
                <p className="text-secondary ">
                  Signup for secured monthly payout
                </p>
              </div>
              <div className="d-flex flex-column mb-3 gap-2">
                <label htmlFor="firstname">Full name</label>
                <input
                  className="form-control bg-white text-dark border rounded-pill"
                  type="text"
                  name="text"
                  id="text"
                  placeholder="Amiele Pounders"
                  onChange={(e) => setFullname(e.target.value)}
                  value={fullname}
                  required
                />
              </div>
              <div className="d-flex flex-column mb-3 gap-2">
                <label htmlFor="Email">Email</label>
                <input
                  className="form-control bg-white text-dark border rounded-pill"
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Amielepounders72@gmail.com"
                  required
                />
              </div>
              <div className="d-flex flex-column mb-3 gap-2">
                <label htmlFor="Password">Password</label>
                <input
                  className="form-control bg-white text-dark border rounded-pill"
                  type="Password"
                  name="Password"
                  id="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="************"
                  required
                />
              </div>
              <div className="d-flex flex-column mb-3 gap-2">
                <label htmlFor="nationality">Nationality</label>
                <select
                  className="form-control bg-white  border rounded-pill"
                  id="nationality"
                  onChange={(e) => setReason(e.target.value)}
                  value={reason}
                  style={{ outline: "none", color: "grey" }}
                  required
                >
                  <option value="" disabled>
                    Select your nationality
                  </option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="India" disabled>India</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Australia">Australia</option>
                  <option value="South Africa" disabled>South Africa</option>
                </select>
              </div>
              <div className="d-flex flex-column mb-3 gap-2">
                <label htmlFor="nationality">Acc Reason</label>
                <select
                  className="form-control bg-white border rounded-pill"
                  id="nationality"
                  onChange={(e) => setNationality(e.target.value)}
                  value={nationality}
                  style={{ outline: "none", color: "grey" }}
                  required
                >
                  <option value="" disabled>
                    Reason
                  </option>
                  <option value="Nigeria">Group contribution</option>
                  <option value="United States">Personal Savings</option>
                  <option value="United Kingdom">Pay Bills</option>
                </select>
              </div>
              {/* Checkbox for terms */}
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="termsCheckbox"
                  onChange={(e) => setIsChecked(e.target.checked)}
                  checked={isChecked}
                  required
                />
                <label className="form-check-label" htmlFor="termsCheckbox" style={{textWrap:"wrap",fontSize:"15px"}}>
                  I agree to terms and agreements
                </label>
              </div>
            </div>
            <button
              className="btn w-100 text-center p-1 rounded-pill"
              style={{
                background: "#b484ff",
                cursor: loading ? "not-allowed" : "pointer", // Change cursor when loading
              }}
              type="submit"
              disabled={loading} // Disable button when loading
            >
              {loading ? "Signing up..." : "Sign up"} {/* Show loading text */}
            </button>
          </form>
          <button
            className="d-flex align-items-center justify-center btn w-100 text-center mt-4  border border-dark p-1 rounded-pill"
            style={{ cursor: "pointer", textAlign: "center" }}
          >
            <img className="w-7" src="./Googlelogo.webp" alt="" /> Google{" "}
          </button>
          <div>
            <p className="text-center text-secondary mt-4">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>

        <div className="w-50 d-none d-md-block">
          <img className="img-fluid" src="./signup.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
