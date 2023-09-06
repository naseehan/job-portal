import React, { useEffect, useState } from 'react'
import '../stylePages/ProfileStyles/App.css'
import CompanyProfile from '../components/companyDashboard/CompanyProfile'
import PostJob from '../components/companyDashboard/PostJob'
import { useNavigate } from 'react-router'


const CompanyDashboard = () => {

  const [active, setActive] = useState(1)
  const navigate = useNavigate()
  const isLoggedIn = localStorage.getItem("token")

  // if company is not logged in redirect to login page
  useEffect(() => {
    if (isLoggedIn == null) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);


    const handleItemClick = (index) => {
        setActive(index)
    }

// if(isLoggedIn == null){
//   navigate('/login');
//     return null; // Return null while navigating to prevent rendering the rest of the component
//   }


  return (
    
    <section className="company-dashboard profile-section">
          <div className="user-profile">
        <div className="dashboard-menu">
                <ul>
                    <li 
                        onClick={ () =>handleItemClick(0)}
                        className={`${active === 0 ? "active-window" : ""}`}
                    >Dashboard</li>
                    <li 
                        onClick={ () =>handleItemClick(1)}
                        className={`${active === 1 ? "active-window" : ""}`}
                    >My Profile</li>
                    <li 
                        onClick={ () =>handleItemClick(2)}
                        className={`${active === 2 ? "active-window" : ""}`}
                    >Post a Job</li>
                  
                </ul>
        </div>
        <div className="inner-sections">
              <CompanyProfile active={active}/>
              <PostJob active={active} />
        </div>
    </div>
    </section>
  )
}

export default CompanyDashboard