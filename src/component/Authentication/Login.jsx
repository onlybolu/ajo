import  { useState } from "react";
import Logo from "../logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { MultiStepLoader as Loader } from "../ui/multi-step-loader"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();


  const loadingStates = [
    {
      text: "Buying a condo",
    },
    {
      text: "Travelling in a flight",
    },
    {
      text: "Borrow loan",
    },
    {
      text: "Buying a car",
    },
    {
      text: "We goto a bar",
    },
    {
      text: "Buying a house",
    },
    {
      text: "Pay a bill",
    },
    {
      text: "Welcome to Realsavers",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the request starts
   
    axios
      .post("https://ajo-backend1.onrender.com/login", { email, password })
      .then((result) => {
        if (result.status === 200) {
          toast("Login successful");
          setIsLoading(true)
          setTimeout(() => {
            navigate("/");
          }, 14500); 
        } else {
          toast.error("Login failed");
        }
      })
      .catch((err) => {
        toast.error("An error occurred during login");
        console.log(err);
      })
      .finally(() => {
        setLoading(false); 
      });
  };

  return (
    <div
      style={{
        background: "linear-gradient(#e3e5e6,#ece6cb,#e4e4e2,#eee8cd)",
        // height: "100vh",
        // position: "fixed",
        width: "100%",
      }}
    >
    {isLoading && 
      <div className="w-full h-[60vh] my-auto flex items-center justify-center">
      {/* Core Loader Modal */}
      <Loader loadingStates={loadingStates} loading={isLoading} duration={2000} />
    </div>
      }
      
     <div  className={`${isLoading ? "hidden" : "flex"}`} style={{position:"sticky",zIndex:"1000",top:"0"}}>
     <Logo  />

     </div>
      <div className="sanda d-flex justify-content-center gap-5 align-items-center w-100" style={{overflowY:"scroll",height:"120vh"}}>
        <div>
          <form action="submit" onSubmit={handleSubmit}>
            <div>
              <div>
                <h2 className="d-flex align-items-center justify-content-center">
                  Login
                </h2>
                <p className="text-secondary">
                  Sign in for secured monthly payout
                </p>
              </div>
              <ToastContainer />
              <div className="d-flex flex-column mb-4 gap-2">
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
              <div className="d-flex flex-column mb-4 gap-2">
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
              {loading ? "Logging in..." : "Login"} {/* Show loading text */}
            </button>
          </form>
          <button
            className="d-flex align-items-center justify-center btn w-100 text-center mt-4 border border-dark p-1 rounded-pill"
            style={{ cursor: "pointer", textAlign: "center" }}
          >
            <img className="w-7" src="./Googlelogo.webp" alt="" /> Google{" "}
          </button>
          <div>
            <p className="text-center text-secondary mt-4">
              Don’t have an account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
        </div>

        <div className="w-50 d-none pb-5 mb-5 d-md-block">
          <img className="img-fluid" src="./login.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
