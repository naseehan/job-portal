import React, { useEffect, useState } from 'react'
import jobList1 from "../assets/img/icon/job-list1.png"
import axios from 'axios'
import { useLocation } from 'react-router'
import { useDispatch } from 'react-redux';


const JobDetails = ( {setAppliedJob} ) => {


const dispatch = useDispatch()
const [jobs, setJobs] = useState([])
const [click, setClick] = useState("")
// const [appliedJob, setAppliedJob] = useState("")
// const [jobId, setJobId] = useState("")
const [clickedIndices, setClickedIndices] = useState([]);
const location = useLocation();


    useEffect(() => {
      if (location.hash) {
        const targetElement = document.querySelector(location.hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location.hash]);



useEffect(() => {
    const fetchData = async() => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/fullJob`)

            setJobs(response.data)

        } catch (error) {
            console.log(error);
        }
    }
    fetchData()
}, [])


const handleClick = async (e, index, jobId) => {
    e.preventDefault();
    try {
    if (clickedIndices.includes(index)) {
      // Remove index from clickedIndices if it was already clicked
      setClickedIndices(clickedIndices.filter((clickedIndex) => clickedIndex !== index));
    } else {
      // Add index to clickedIndices if it was not already clicked
      setClickedIndices([...clickedIndices, index]);
    }

    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/applied`, { jobId })

setAppliedJob(response.data)

//    await axios.post(`${process.env.REACT_APP_BASE_URL}/applied`, { jobId })
//     .then((response) => {
//       const appliedJob = response.data;
//     //   console.log(appliedJob);
//       dispatch(setAppliedJob(appliedJob)); // Dispatch the action to update appliedJob in Redux store
//     })
} catch (error) {
    console.log(error);
}
};


  const isApplied = (index) => {
    return clickedIndices.includes(index);
  };


  return (

    <main>

    {/* <!-- Hero Area Start--> */}
    <div class="slider-area ">
    <div class="single-slider section-overly slider-height2 d-flex align-items-center custom-blog">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="hero-cap text-center">
                        <h2>Jobs</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    {/* <!-- Hero Area End -->
    <!-- job post company Start --> */}
    
    <div class="job-post-company pt-120 pb-120">
    {jobs.map((data, index) => (
        <div class="container">
            <div class="row justify-content-between" id={`s${data._id}`}>
                {/* <!-- Left Content --> */}
                <div class="col-xl-7 col-lg-8">
                    {/* <!-- job single --> */}
                    <div class="single-job-items mb-50">
                        <div class="job-items">
                            <div class="company-img company-img-details">
                                <a href="/jobDetails"><img src={jobList1} alt=""/></a>
                            </div>
                            <div class="job-tittle">
                                <a href="/jobDetails">
                                    <h4>{data.jobTitle}</h4>
                                </a>
                                <ul>
                                    <li>{data.company}</li>
                                    <li><i class="fas fa-map-marker-alt"></i>{data.jobPlace}</li>
                                    <li>{data.budget}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                      {/* <!-- job single End --> */}
                   
                    <div class="job-post-details">
                        <div class="post-details1 mb-50">
                            {/* <!-- Small Section Tittle --> */}
                            <div class="small-section-tittle">
                                <h4>Job Description</h4>
                            </div>
                            <p>{data.description}</p>
                        </div>
                        <div class="post-details2  mb-50">
                             {/* <!-- Small Section Tittle --> */}
                            <div class="small-section-tittle">
                                <h4>Required Knowledge, Skills, and Abilities</h4>
                            </div>
                           <ul>
                            <p>{data.knowledge}</p>
                           </ul>
                        </div>
                        <div class="post-details2  mb-50">
                             {/* <!-- Small Section Tittle --> */}
                            <div class="small-section-tittle">
                                <h4>Education + Experience</h4>
                            </div>
                           <ul>
                            <p>{data.experienceLevel}</p>
                           </ul>
                        </div>
                    </div>

                </div>
                {/* <!-- Right Content --> */}
                <div class="col-xl-4 col-lg-4">
                    <div class="post-details3  mb-50">
                        {/* <!-- Small Section Tittle --> */}
                       <div class="small-section-tittle">
                           <h4>Job Overview</h4>
                       </div>
                      <ul>
                          {/* <li>Posted date : <span>12 Aug 2019</span></li> */}
                          <li>Location : <span>{data.jobPlace}</span></li>
                          <li>Vacancy : <span>{data.vacancy}</span></li>
                          <li>Job nature : <span>{data.type}</span></li>
                          <li>Salary :  <span>{data.budget}</span></li>
                          <li>Application date : <span>{new Date(data.deadline).toLocaleDateString("en-US", { month: "long",date:'numeric', year:"numeric"})}</span></li>
                      </ul>
                     <div class="apply-btn2">
                        <button class="btn" onClick={(e) => handleClick(e, index, data._id)}>
                        {isApplied(index) ? 'Applied' : 'Apply Now'}
                        </button>
                     </div>
                   </div>
                    <div class="post-details4  mb-50">
                        {/* <!-- Small Section Tittle --> */}
                       <div class="small-section-tittle">
                           <h4>Company Information</h4>
                       </div>
                          <span>{data.company}</span>
                          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <ul>
                            <li>Web : <span> {data.link}</span></li>
                            <li>Email: <span>{data.email}</span></li>
                        </ul>
                   </div>
                </div>
            </div>
        </div>
        ))}
    </div>
     {/* <!-- job post company End --> */}
    
</main>

  )
}

export default JobDetails