import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo/logo.png";
import { Link, useNavigate } from "react-router-dom";
import "../stylePages/navbar/App.css";
import { useCookies } from "react-cookie";


const Navbar = ( {userType} ) => {
  const [mobile, setMobile] = useState(false);
  const [cookie, setCookie] = useCookies(["access_token"]);
  const [user, setUser] = useState(false);
  const navigate = useNavigate();


  const handleMobile = (e) => {
    e.preventDefault();
    setMobile(true);
    document.body.style.overflow = "hidden"; // Disable scrolling
  };

  const handleUser = (e) => {
    e.preventDefault();
    setUser(!user);
  };

  const logout = (e) => {
    // e.preventDefault();
    setCookie("access_token", "");
    window.localStorage.removeItem("userID");
    window.localStorage.removeItem("token")
    navigate("/login");
  };

  useEffect(() => {
    // Enable scrolling when the mobile state changes to false
    if (!mobile) {
      document.body.style.overflow = "auto";
    }
  }, [mobile]);

  return (
    <header>
      {/* <!-- Header Start --> */}
      <div className="header-area header-transparrent">
        <div className="headder-top header-sticky">
          <div className="container">
            <div className="row align-items-center justify">
              {/* <div className="col-lg-3 col-md-2"> */}
                {/* <!-- Logo --> */}
                <div className="logo">
                  <a href="/">
                    <img src={logo} alt="" />
                  </a>

                  {/* hamburger  */}
                  <div className="hamburger" onClick={handleMobile}>
                    <i className="fa-solid fa-bars"></i>
                  </div>
                </div>
              {/* </div> */}

              <div
                className={`user-overlay ${user ? "active-user" : ""}`}
                onClick={handleUser}
              ></div>

              {/* <div className="col-lg-9 col-md-9"> */}
                <div className="menu-wrapper">
                   {/* <!-- Main-menu --> */}
                  <div className="main-menu"> 
                     <nav className="d-none d-lg-block"> 
                      <ul id="navigation">
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/job">Find a job</Link>
                        </li>
                        <li>
                          <Link to="/about">About</Link>
                        </li>
                        <li>
                          <Link>Page</Link>
                          <ul className="submenu">
                            <li>
                              <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                              <Link to="/jobDetails">Job Details</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              {/* </div> */}

{!cookie.access_token ? (
                    <div className="header-btn d-none f-right d-lg-block pc-header-btn">
                      <Link to="/register" className="btn head-btn1">
                        Register
                      </Link>
                      <Link to="/login" className="btn head-btn2">
                        Login
                      </Link>
                    </div>
                  ) : (
                    <div className="user-image">
                    {userType ?  ( <i className="fa-solid fa-user fa-2xl" onClick={handleUser}></i>)
                    : ( <i className="fa-solid fa-building fa-2xl" onClick={handleUser}></i> ) }
                    </div>
                  )}


              {/* <!-- Mobile Menu --> */}
              <div className={`mobile-menu `}>
                <div
                  className={`mobile_menu d-block d-lg-none ${
                    mobile ? "mob-nav" : ""
                  }`}
                >
                  <div className="main-menu">
                    <nav className="d-none d-lg-block">
                      <i
                        className="fa-solid fa-x fa-2xl"
                        onClick={() => setMobile(false)}
                      ></i>
                      <ul id="navigation">
                        <li onClick={() => setMobile(false)}>
                          <Link to="/">Home</Link>
                        </li>
                        <li onClick={() => setMobile(false)}>
                          <Link to="/job">Find a job</Link>
                        </li>
                        <li onClick={() => setMobile(false)}>
                          <Link to="/about">About</Link>
                        </li>
                        <li>
                          <Link>Page</Link>
                          <ul className="submenu">
                            <li>
                              <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                              <Link to="/jobDetails">Job Details</Link>
                            </li>
                          </ul>
                        </li>
                        <li onClick={() => setMobile(false)}>
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  {/* <!-- Header-btn --> */}
                  {!cookie.access_token ? (
                    <div className="header-btn d-none f-right d-lg-block">
                      <Link to="/register" className="btn head-btn1">
                        Register
                      </Link>
                      <Link to="/login" className="btn head-btn2">
                        Login
                      </Link>
                    </div>
                  ) : (
                    <div className="user-image mobile-user">
                      <i className="fa-solid fa-user fa-2xl" onClick={handleUser}></i>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`user-info ${user ? "active-user" : ""}`}>
        <Link to="/dashboard" onClick={() => {setUser(false); setMobile(false)}}>Dashboard</Link>
        {/* <Link to="/login"> */}
        <button class="Btn" onClick={() => {logout(); setMobile(false);}}>
          <div class="sign">
            <svg viewBox="0 0 512 512">
              <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
            </svg>
          </div>
          <div class="text">Logout</div>
        </button>
        {/* </Link> */}
      </div>

      {/* <!-- Header End// --> */}
    </header>
  );
};

export default Navbar;
