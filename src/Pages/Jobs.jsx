import React, { useEffect, useState } from "react";

import list1 from "../assets/img/icon/job-list1.png";
// import list2 from "../assets/img/icon/job-list2.png";
// import list3 from "../assets/img/icon/job-list3.png";
// import list4 from "../assets/img/icon/job-list4.png";
import "../assets/css/flaticon.css";
import axios from "axios";

const Jobs = () => {
  const [range, setRange] = useState(0);
  const [jobs, setJobs] = useState([]);
  const handleRange = (e) => {
    setRange(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/jobs`
        );
        setJobs(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData()
  }, [jobs]);

  return (
    <main>
      {/* <!-- Hero Area Start--> */}
      <div className="slider-area ">
        <div className="single-slider section-overly slider-height2 d-flex align-items-center custom-jobs">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="hero-cap text-center">
                  <h2>Get your job</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Hero Area End -->
        <!-- Job List Area Start --> */}
      <div className="job-listing-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            {/* <!-- Left content --> */}
            <div className="col-xl-3 col-lg-3 col-md-4">
              <div className="row">
                <div className="col-12">
                  <div className="small-section-tittle2 mb-45">
                    <div className="ion">
                      <svg
                        // xmlns="http://www.w3.org/2000/svg"
                        // xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="20px"
                        height="12px"
                      >
                        <path
                          fill-rule="evenodd"
                          fill="rgb(27, 207, 107)"
                          d="M7.778,12.000 L12.222,12.000 L12.222,10.000 L7.778,10.000 L7.778,12.000 ZM-0.000,-0.000 L-0.000,2.000 L20.000,2.000 L20.000,-0.000 L-0.000,-0.000 ZM3.333,7.000 L16.667,7.000 L16.667,5.000 L3.333,5.000 L3.333,7.000 Z"
                        />
                      </svg>
                    </div>
                    <h4>Filter Jobs</h4>
                  </div>
                </div>
              </div>
              {/* <!-- Job Category Listing start --> */}
              <div className="job-category-listing mb-50">
                {/* <!-- single one --> */}
                <div className="single-listing">
                  <div className="small-section-tittle2">
                    <h4>Job Category</h4>
                  </div>
                  {/* <!-- Select job items start --> */}
                  <div className="select-job-items2">
                    <select name="select">
                      <option value="">All Category</option>
                      <option value="">Category 1</option>
                      <option value="">Category 2</option>
                      <option value="">Category 3</option>
                      <option value="">Category 4</option>
                    </select>
                  </div>
                  {/* <!--  Select job items End-->
                                <!-- select-Categories start --> */}
                  <div className="select-Categories pt-80 pb-50">
                    <div className="small-section-tittle2">
                      <h4>Job Type</h4>
                    </div>
                    <label className="container">
                      Full Time
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Part Time
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Remote
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Freelance
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  {/* <!-- select-Categories End --> */}
                </div>
                {/* <!-- single two --> */}
                <div className="single-listing">
                  <div className="small-section-tittle2">
                    <h4>Job Location</h4>
                  </div>
                  {/* <!-- Select job items start --> */}
                  <div className="select-job-items2">
                    <select name="select">
                      <option value="">Anywhere</option>
                      <option value="">Category 1</option>
                      <option value="">Category 2</option>
                      <option value="">Category 3</option>
                      <option value="">Category 4</option>
                    </select>
                  </div>
                  {/* <!--  Select job items End-->
                                <!-- select-Categories start --> */}
                  <div className="select-Categories pt-80 pb-50">
                    <div className="small-section-tittle2">
                      <h4>Experience</h4>
                    </div>
                    <label className="container">
                      1-2 Years
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      2-3 Years
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      3-6 Years
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      6-more..
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  {/* <!-- select-Categories End --> */}
                </div>
                {/* <!-- single three --> */}
                <div className="single-listing">
                  {/* <!-- select-Categories start -/-> */}
                  <div className="select-Categories pb-50">
                    <div className="small-section-tittle2">
                      <h4>Posted Within</h4>
                    </div>
                    <label className="container">
                      Any
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Today
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Last 2 days
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Last 3 days
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Last 5 days
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Last 10 days
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  {/* <!-- select-Categories End --> */}
                </div>
                <div className="single-listing">
                  {/* <!-- Range Slider Start --> */}
                  <aside className="left_widgets p_filter_widgets price_rangs_aside sidebar_box_shadow">
                    <div className="small-section-tittle2">
                      <h4>Filter Jobs</h4>
                    </div>
                    <div className="widgets_inner">
                      <div className="range_item">
                        {/* <!-- <div id="slider-range"></div> --> */}
                        {/* <input type="text" className="js-range-slider" value="" /> */}
                        <input
                          type="range"
                          min="0"
                          max="5000"
                          name=""
                          id=""
                          value={range}
                          onChange={handleRange}
                        />
                        <div className="d-flex align-items-center">
                          <div className="price_text">
                            <p>Price : 0</p>
                          </div>
                          <div className="price_value d-flex justify-content-center">
                            <input
                              type="text"
                              className="js-input-from"
                              id="amount"
                              readonly
                            />
                            <span>to : ${range}</span>
                            <input
                              type="text"
                              className="js-input-to"
                              id="amount"
                              readonly
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </aside>
                  {/* <!-- Range Slider End --> */}
                </div>
              </div>
              {/* <!-- Job Category Listing End --> */}
            </div>
            {/* <!-- Right content --> */}
            <div className="col-xl-9 col-lg-9 col-md-8">
              {/* <!-- Featured_job_start --> */}
              <section className="featured-job-area">
                <div className="container">
                  {/* <!-- Count of Job list Start --> */}
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="count-job mb-35">
                        <span>39, 782 Jobs found</span>
                        {/* <!-- Select job items start --> */}
                        <div className="select-job-items">
                          <span>Sort by</span>
                          <div className="sort-by">
                            <select name="select">
                              <option value="">None</option>
                              <option value="">job list</option>
                              <option value="">job list</option>
                              <option value="">job list</option>
                            </select>
                          </div>
                        </div>
                        {/* <!--  Select job items End--> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- Count of Job list End -->


 <!-- jobs from server --> */}
                  {jobs.map((data) => (
                    <div className="single-job-items mb-30">
                      <div className="job-items">
                        <div className="company-img">
                          <a href={`/jobDetails#s${data._id}`}>
                            <img src={list1} alt="" />
                          </a>
                        </div>
                        <div className="job-tittle job-tittle2">
                          <a href="/jobDetails">
                            <h4>{data.jobTitle}</h4>
                          </a>
                          <ul>
                            <li>{data.vacancy} People</li>
                            <li>
                              <i className="fas fa-map-marker-alt"></i>
                              {data.jobPlace}
                            </li>
                            <li>₹ {data.budget}</li>
                          </ul>
                        </div>
                      </div>
                      <div className="items-link items-link2 f-right">
                        <a href="jobDetails">{data.type}</a>
                        <span>{new Date(data.deadline).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                    </div>
                  ))}

                 
                </div> 
              </section>
              {/* <!-- Featured_job_end --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Job List Area End -->
        <!--Pagination Start  --> */}
      <div className="pagination-area pb-115 text-center">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="single-wrap d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-start">
                    <li className="page-item active">
                      <a className="page-link" href="/job">
                        01
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/job">
                        02
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/job">
                        03
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/job">
                        <span className="ti-angle-right"></span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Pagination End  --> */}
    </main>
  );
};

export default Jobs;
