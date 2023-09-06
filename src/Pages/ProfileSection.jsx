import React, { useState } from 'react'
import '../stylePages/ProfileStyles/App.css'
import MyProfile from '../components/Dashboard/MyProfile'
// import { Link } from 'react-router-dom'
import AppliedJobs from '../components/Dashboard/AppliedJobs'
import EditResume from '../components/Dashboard/EditResume'
import ViewResume from '../components/Dashboard/ViewResume'

const ProfileSection = ({ userId,appliedJob }) => {

    const [active, setActive] = useState(1)
    
    const handleItemClick = (index) => {
        setActive(index)
    }

  return (

<section className="profile-section">
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
                    >Applied Jobs</li>
                    <li 
                        onClick={ () =>handleItemClick(3)}
                        className={`${active === 3 ? "active-window" : ""}`}
                    >Edit Resume</li>
                    <li 
                        onClick={ () =>handleItemClick(4)}
                        className={`${active === 4 ? "active-window" : ""}`}
                    >View Resume</li>
                </ul>
        </div>
        <div className="inner-sections">
            <MyProfile className={active}/>
            <AppliedJobs className={active} appliedJob={appliedJob}/>
            <EditResume className={active} />
            <ViewResume className={active} userId={userId}/>
        </div>
    </div>
</section>
    )
}

export default ProfileSection