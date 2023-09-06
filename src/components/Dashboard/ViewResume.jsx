import React, { useEffect, useState } from 'react'
import resumeAuthor from '../../assets/img/resume/resume-author.png'
import axios from 'axios'

const ViewResume = ({className, userId}) => {

  const [resume, setResume] = useState([])
useEffect(() => {
  // fetching resume from db
  const fetchData = async() => {
    try {
       const storedToken = localStorage.getItem("token"); // Retrieve the token from local storage
       console.log(storedToken);
      const headers = {
        Authorization: `Bearer ${storedToken}`,
      };
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/viewResume`,
      { headers },
      { params: { userId }})
      setResume(response.data)
    // try {
    //   const token = "<your-jwt-token>"; // Replace with the actual JWT token
    //   const headers = {
    //     Authorization: `Bearer ${token}`,
    //   };
    //   const response = await axios.get(
    //     `${process.env.REACT_APP_BASE_URL}/viewResume`,
    //     { headers }
    //   );
    //   setResume(response.data);

    } catch (error) {
      console.log(error);
    }
  }
  fetchData()
}, [])


// useEffect(() => {
//   resume.forEach((resumes) => {
//     console.log(resumes);
//   })
// }, [])


  return (
    <>
    {className === 4 ? 
    <section className="view-resume">
      {resume.map((data) => (
       
        <div className="resume-full">
            <div className="personal-info">
              
                <div>
                    <img src={resumeAuthor} alt="" />
                    <div>
                    <h3>{data.name}</h3>
                    <p>{data.designation}</p>
                    </div>
                </div>
                <div>
                    <h1>Contact Info</h1>
                    <p>
                      Phone: <span>{data.number}</span>
                    </p>
                    <p>
                      Email: <span>{data.email}</span>
                    </p>
                    <p>
                      Website: <span>{data.link}</span>
                    </p>
                </div>
            </div>


{/* career objective */}
<div className="career">
  <h6>Career Objective</h6>
  <p>{data.objective}
  </p>
</div>

{/* Personal Informantion */}
<div className="personal">
  <h6>Personal Informantion</h6>
  <div className="personal-information">
    <div>
      <label htmlFor="">Father’s Name: </label>
      <span>{data.father}</span>
    </div>
    <div>
      <label htmlFor="">Mother’s Name: </label>
      <span> {data.mother}</span>
    </div>
    <div>
      <label htmlFor="">Date of Birth: </label>
      <span> {data.birth}</span>
    </div>
    <div>
      <label htmlFor="">Religion: </label>
      <span> {data.religion}</span>
    </div>
    {/* <div>
      <label htmlFor="">Nationality: </label>
      <span> {data.number}</span>
    </div> */}
    <div>
      <label htmlFor="">Gender: </label>
      <span> {data.gender}</span>
    </div>
    <div>
      <label htmlFor="">Marital Status: </label>
      <span>{data.status}</span>
    </div>
    <div>
      <label htmlFor="">Weight: </label>
      <span> {data.weight} KG</span>
    </div>
    <div>
      <label htmlFor="">Height </label>
      <span> {data.height}</span>
    </div>
    <div>
      <label htmlFor="">Present Address: </label>
      <span> {data.address}.</span>
    </div>
  </div>
</div>


{/* Educational Qualification */}
<div className="qualification">
  <h6>Educational Qualification</h6>
  <div className='each-edu'>
    <div className="edu-date">
      <label htmlFor="">01. </label>
      <span>{new Date(data.startingPeriod).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} - {new Date(data.endingPeriod).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
    </div>
    <div className="edu-info">
      <h5>{data.institute}</h5>
      <ul>
        <li>
          <p>Education Level: </p>
          <span> {data.level}</span>
        </li>
        <li>
          <p>My Major: </p>
          <span> {data.major}</span>
        </li>
        <li>
          <p>Result/GPA: </p>
          <span> {data.gpa}/5.00</span>
        </li>
      </ul>
    </div>
    </div>
    
    {/* <div className='each-edu'>
    <div className="edu-date">
      <label htmlFor="">02. </label>
      <span> {data.number}</span>
    </div>
    <div className="edu-info">
      <h5>International Collegiate School & College</h5>
      <ul>
        <li>
          <p>Education Level: </p>
          <span> HSC</span>
        </li>
        <li>
          <p>My Major: </p>
          <span> Science</span>
        </li>
        <li>
          <p>Result/GPA: </p>
          <span> 4.96/5.00</span>
        </li>
      </ul>
    </div>

  </div> */}
</div>

        </div>
        ))}
    </section>
    : null
    }
    </>
    
  )
}

export default ViewResume