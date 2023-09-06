import React, { useEffect, useState } from "react";
import "../stylePages/Login/App.css";
import "../stylePages/Register/App.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

const Login = ({userType, setUserType, setUserId}) => {
  // for candidate
  const [candidateEmail, setCandidateEmail] = useState("");
  const [candidatePassword, setCandidatePassword] = useState("");

  // for company
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyPassword, setCompanyPassword] = useState("");
  const [companyError, setCompanyError] = useState("");

  const navigate = useNavigate();
  const [_, setCookies] = useCookies(["access_token"]);
  const [error, setError] = useState("");
  const [button, setButton] = useState(true);
  const [candidate, setCandidate] = useState(true)
  const [company, setCompany] = useState(false)
  const [token, setToken] = useState("")
 
  

useEffect(() => {
  const storedUserType = localStorage.getItem("userType");
  if (storedUserType) {
    setUserType(storedUserType === "candidate");
  }
}, []);


  const handleCandidate = (e) => {
    e.preventDefault()
    setCompany(false)
    setCandidate(true)
    setButton(true)
  };

  const handleCompany = (e) => {
    e.preventDefault()
    setCandidate(false)
    setCompany(true)
    setButton(false)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/candidate/login`,
        { candidateEmail, candidatePassword }
      );
      setUserId(response.data.userID);
      setCookies("access_token", response.data.token);
      window.localStorage.setItem("userID", response.data.userID);
      setUserType(true)
      localStorage.setItem("userType", "candidate");
      setToken(response.data.token);
      console.log(response.data.resume);
      localStorage.setItem("token", response.data.token)
      navigate("/");
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          setError("User doesn't exist");
        } else if (error.response.status === 300) {
          setError("Invalid Email or Password");
        } else {
          setError("An error occured please try again later.");
        }
      } else {
        // Request was made but no response was received
        setError("An error occurred. Please check your internet connection.");
      }
      setTimeout(() => {
        setError(null);
      }, 2000);
    }
  };

  const handleCompanySubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/company/login`,
        { companyEmail, companyPassword }
      );
      setCookies("access_token", response.data.token);
      window.localStorage.setItem("userID", response.data.userID);
      setUserType(false)
      localStorage.setItem("userType", "company");
      localStorage.setItem("token", response.data.token) 
      navigate("/");
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          setCompanyError("User doesn't exist");
        } else if (error.response.status === 300) {
          setCompanyError("Invalid Email or Password");
        } else {
          setCompanyError("An error occured please try again later.");
        }
      } else {
        // Request was made but no response was received
        setCompanyError(
          "An error occurred. Please check your internet connection."
        );
      }
      setTimeout(() => {
        setCompanyError(null);
      }, 2000);
    }
  };

  return (
    <section className="login-section register-section">
      <div className="login-form register-form">
        <h3>Log In Here</h3>

        <div className="register-type">
          <button
            onClick={handleCandidate}
            className={`candidate-button ${button ? "active" : ""}`}
          >
            Candidate
          </button>
          <button
            onClick={handleCompany}
            className={`company-button ${button ? "" : "active"}`}
          >
            Company
          </button>
        </div>

        {/* candidate form */}
        <div
          className={`candidate-form login-form ${
            candidate ? "" : "hidden-candidate"
          }`}
          id="candidate"
        >
          <form action="" onSubmit={handleSubmit}>
            {error && <p className="error-message">{error}</p>}
            <label htmlFor="candidateEmail">Email*</label>
            <input
              type="email"
              name="candidateEmail"
              id="candidateEmail"
              placeholder="info@example.com"
              value={candidateEmail}
              onChange={(e) => setCandidateEmail(e.target.value)}
            />

            <label htmlFor="candidatePassword">Password*</label>
            <input
              type="password"
              name="candidatePassword"
              id="candidatePassword"
              placeholder="Password"
              value={candidatePassword}
              onChange={(e) => setCandidatePassword(e.target.value)}
            />

            <button type="submit">Login</button>
            <div className="to-signup">
              <p>Don’t have an account? </p>
              <Link to="/register">Sign up</Link>
            </div>
          </form>
        </div>

        {/* company form */}
        <div className={`company-form login-form ${company ? "" : "hidden-company"}`} id='company'>
        <form action="" onSubmit={handleCompanySubmit}>
          {companyError && <p className="error-message">{companyError}</p>}
          <label htmlFor="companyEmail">Email*</label>
          <input
            type="email"
            name="companyEmail"
            id="companyEmail"
            placeholder="info@example.com"
            value={companyEmail}
            onChange={(e) => setCompanyEmail(e.target.value)}
          />
          <label htmlFor="companyPassword">Password*</label>
          <input
            type="password"
            name="companyPassword"
            id="companyPassword"
            placeholder="Password"
            value={companyPassword}
            onChange={(e) => setCompanyPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <div className="to-signup">
            <p>Don’t have an account? </p>
            <Link to="/register">Sign up</Link>
          </div>
        </form>
        </div>

      </div>
    </section>
  );
};

export default Login;
