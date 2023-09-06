import React, { useState } from 'react'
import '../assets/css/bootstrap.min.css'
import '../assets/css/owl.carousel.min.css'
import '../assets/css/flaticon.css'
import '../assets/css/price_rangs.css'
import '../assets/css/slicknav.css'
import '../assets/css/animate.min.css'
import '../assets/css/magnific-popup.css'
import '../assets/css/fontawesome-all.min.css'
import '../assets/css/themify-icons.css'
import '../assets/css/slick.css'
import '../assets/css/nice-select.css'
import '../assets/css/style.css'
import '../stylePages/HomePage/App.css'
// import '../assets/scss/_h1-hero.scss'
import homeBlog from "../assets/img/blog/home-blog1.jpg"
import jobList1 from "../assets/img/icon/job-list1.png"
import jobList2 from "../assets/img/icon/job-list2.png"
import jobList3 from "../assets/img/icon/job-list3.png"
import jobList4 from "../assets/img/icon/job-list4.png"
import blog2 from "../assets/img/blog/home-blog2.jpg"
import ApplyProcess from '../components/ApplyProcess'
import Testimonial from '../components/Testimonial'
import OnlineCv from '../components/OnlineCv'
import SupportCompany from '../components/SupportCompany'
import axios from 'axios'
// import '../assets/scss/style.scss'
// import '../Doc/css/main.css'
// import '../Doc/css/normalize.min.css'
// import '../Doc/css/font-awesome.min.css'




const HomePage = () => {

// const [mobNav, setMobNav] = useState(false)
const [jobTitle, setJobTitle] = useState("")
const [jobLocation, setJobLocation] = useState("")
const [activeSearch, setActiveSearch] = useState(false)
const [searchedJob, setSearchedJob] = useState([])
const [error, setError] = useState("")
const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/jobSearch`,{jobTitle, jobLocation})
        setActiveSearch(true)
        setSearchedJob(response.data)
    } catch (error) {
        console.log(error);
        setActiveSearch(true)
        setError("No Jobs Available")
    }
}


// useEffect(() => {
//     if (searchedJob.length > 0) {
//         searchedJob.forEach((jobs) => {
//             console.log(jobs.jobTitle);
//         });
//     }
// }, [searchedJob]);



  return (
    <section className='home-section'>
  <div 
        onClick={() => setActiveSearch(false)}
        className={`job-overlay ${activeSearch ? "active-job-overlay" : ""}`}>
      </div>
        {/* <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
            <div className="preloader-inner position-relative">
                <div className="preloader-circle"></div>
                <div className="preloader-img pere-text">
                    <img src="assets/img/logo/logo.png" alt=""/>
                </div>
            </div>
        </div>
    </div> */}
    {/* <!-- Preloader Start --> */}
    
    <main>

        {/* <!-- slider Area Start--> */}
        <div className="slider-area ">
            {/* <!-- Mobile Menu --> */}
            <div className="slider-active">
                <div className="single-slider slider-height d-flex align-items-center custom-slider">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-9 col-md-10">
                                <div className="hero__caption">
                                    <h1>Find the most exciting startup jobs</h1>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Search Box --> */}
                        <div className="row">
                            <div className="col-xl-8">
                                {/* <!-- form --> */}
                                <form action="" className="search-box" onSubmit={handleSubmit}>
                                    <div className="input-form">
                                        <input type="text" name="jobTitle" placeholder="Job Tittle or keyword" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} required/>
                                    </div>
                                    <div className="select-form input-form">
                                        <div className="select-itms">
                                            <select name="jobLocation" id="select1" value={jobLocation} onChange={(e) => setJobLocation(e.target.value)} required>
                                                <option value="">Select Location</option>
                                                <option value="Kochi">Kochi</option>
                                                <option value="TVM">TVM</option>
                                                <option value="Kozhikod">Kozhikod</option>
                                                <option value="Kollam">Kollam</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="search-form">
                                        <button type='submit'>Find job</button>
                                    </div>	
                                </form>	
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* searched job info */}
        <div className={`searched-job ${activeSearch ? "active-job" : ""}`}>
        {error && <p>{error}</p>}

            {searchedJob.map((data) => (
                <>
                <div>
                    <label htmlFor="">Job</label>
                <p>{data.jobTitle}</p>
                </div>
                <div>
                    <label htmlFor="">Vacancy</label>
                <p>{data.vacancy}</p>
                </div>
                <div>
                    <label htmlFor="">Salary</label>
                <p>{data.budget}</p>
                </div>
                <div>
                    <label htmlFor="">Type</label>
                <p>{data.type}</p>
                </div>
                <div>
                    <label htmlFor="">Deadline</label>
                <p>{new Date(data.deadline).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </div>
                </>
            ))}
        </div>
        {/* <!-- slider Area End-->
        <!-- Our Services Start --> */}
        <div className="our-services section-pad-t30">
            <div className="container">
                {/* <!-- Section Tittle --> */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-tittle text-center">
                            <span>FEATURED TOURS Packages</span>
                            <h2>Browse Top Categories </h2>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-contnet-center">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-tour"></span>
                            </div>
                            <div className="services-cap">
                               <h5><a href="jobDetails">Design & Creative</a></h5>
                                <span>(653)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-cms"></span>
                            </div>
                            <div className="services-cap">
                               <h5><a href="jobDetails">Design & Development</a></h5>
                                <span>(658)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-report"></span>
                            </div>
                            <div className="services-cap">
                               <h5><a href="jobDetails">Sales & Marketing</a></h5>
                                <span>(658)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-app"></span>
                            </div>
                            <div className="services-cap">
                               <h5><a href="jobDetails">Mobile Application</a></h5>
                                <span>(658)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-helmet"></span>
                            </div>
                            <div className="services-cap">
                               <h5><a href="jobDetails">Construction</a></h5>
                                <span>(658)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-high-tech"></span>
                            </div>
                            <div className="services-cap">
                               <h5><a href="jobDetails">Information Technology</a></h5>
                                <span>(658)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-real-estate"></span>
                            </div>
                            <div className="services-cap">
                               <h5><a href="jobDetails">Real Estate</a></h5>
                                <span>(658)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-content"></span>
                            </div>
                            <div className="services-cap">
                               <h5><a href="jobDetails">Content Writer</a></h5>
                                <span>(658)</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- More Btn -->
                <!-- Section Button --> */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="browse-btn2 text-center mt-50">
                            <a href="jobDetails" className="border-btn2">Browse All Sectors</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Our Services End -->
        <!-- Online CV Area Start --> */}
        <OnlineCv />
        {/* <!-- Online CV Area End-->
        <!-- Featured_job_start --> */}
        <section className="featured-job-area feature-padding">
            <div className="container">
                {/* <!-- Section Tittle --> */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-tittle text-center">
                            <span>Recent Job</span>
                            <h2>Featured Jobs</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        {/* <!-- single-job-content --> */}
                        <div className="single-job-items mb-30">
                            <div className="job-items">
                                <div className="company-img">
                                    <a href="jobDetails"><img src={jobList1} alt=""/></a>
                                </div>
                                <div className="job-tittle">
                                    <a href="jobDetails"><h4>Digital Marketer</h4></a>
                                    <ul>
                                        <li>Creative Agency</li>
                                        <li><i className="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                        <li>$3500 - $4000</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="items-link f-right">
                                <a href="jobDetails">Full Time</a>
                                <span>7 hours ago</span>
                            </div>
                        </div>
                        {/* <!-- single-job-content --> */}
                        <div className="single-job-items mb-30">
                            <div className="job-items">
                                <div className="company-img">
                                    <a href="jobDetails"><img src={jobList2} alt="" /></a>
                                </div>
                                <div className="job-tittle">
                                    <a href="jobDetails"><h4>Digital Marketer</h4></a>
                                    <ul>
                                        <li>Creative Agency</li>
                                        <li><i className="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                        <li>$3500 - $4000</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="items-link f-right">
                                <a href="jobDetails">Full Time</a>
                                <span>7 hours ago</span>
                            </div>
                        </div>
                         {/* <!-- single-job-content --> */}
                        <div className="single-job-items mb-30">
                            <div className="job-items">
                                <div className="company-img">
                                    <a href="jobDetails"><img src={jobList3} alt="" /></a>
                                </div>
                                <div className="job-tittle">
                                    <a href="jobDetails"><h4>Digital Marketer</h4></a>
                                    <ul>
                                        <li>Creative Agency</li>
                                        <li><i className="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                        <li>$3500 - $4000</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="items-link f-right">
                                <a href="jobDetails">Full Time</a>
                                <span>7 hours ago</span>
                            </div>
                        </div>
                         {/* <!-- single-job-content --> */}
                        <div className="single-job-items mb-30">
                            <div className="job-items">
                                <div className="company-img">
                                    <a href="jobDetails"><img src={jobList4} alt="" /></a>
                                </div>
                                <div className="job-tittle">
                                    <a href="jobDetails"><h4>Digital Marketer</h4></a>
                                    <ul>
                                        <li>Creative Agency</li>
                                        <li><i className="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                        <li>$3500 - $4000</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="items-link f-right">
                                <a href="jobDetails">Full Time</a>
                                <span>7 hours ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Featured_job_end -->
        <!-- How  Apply Process Start--> */}

            <ApplyProcess />

        {/* <!-- How  Apply Process End-->
        <!-- Testimonial Start --> */}
       <Testimonial />
        {/* <!-- Testimonial End -->
         <!-- Support Company Start--> */}
         <SupportCompany />
        {/* <!-- Support Company End--> */}
        {/* <!-- Blog Area Start --> */}
        <div className="home-blog-area blog-h-padding">
            <div className="container">
                {/* <!-- Section Tittle --> */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-tittle text-center">
                            <span>Our latest blog</span>
                            <h2>Our recent news</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="home-blog-single mb-30">
                            <div className="blog-img-cap">
                                <div className="blog-img">
                                    <img src={homeBlog} alt="" />
                                    {/* <!-- Blog date --> */}
                                    <div className="blog-date text-center">
                                        <span>24</span>
                                        <p>Now</p>
                                    </div>
                                </div>
                                <div className="blog-cap">
                                    <p>|   Properties</p>
                                    <h3><a href="single-blog.html">Footprints in Time is perfect House in Kurashiki</a></h3>
                                    <a href="/" className="more-btn">Read more »</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="home-blog-single mb-30">
                            <div className="blog-img-cap">
                                <div className="blog-img">
                                    <img src={blog2} alt="" />
                                    {/* <!-- Blog date --> */}
                                    <div className="blog-date text-center">
                                        <span>24</span>
                                        <p>Now</p>
                                    </div>
                                </div>
                                <div className="blog-cap">
                                    <p>|   Properties</p>
                                    <h3><a href="single-blog.html">Footprints in Time is perfect House in Kurashiki</a></h3>
                                    <a href="/" className="more-btn">Read more »</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Blog Area End --> */}

    </main>


    </section>
  )
}

export default HomePage