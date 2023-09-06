import React from 'react'
import blog1 from "../assets/img/blog/home-blog1.jpg"
import blog2 from "../assets/img/blog/home-blog2.jpg"
// import '../assets/css/style.css'
// import '../assets/css/flaticon.css'
import ApplyProcess from '../components/ApplyProcess'
import Testimonial from '../components/Testimonial'
import OnlineCv from '../components/OnlineCv'
import SupportCompany from '../components/SupportCompany'

const About = () => {
  return (
    <main>

        {/* <!-- Hero Area Start--> */}
        <div class="slider-area ">
        <div class="single-slider section-overly slider-height2 d-flex align-items-center custom-about">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="hero-cap text-center">
                            <h2>About us</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        {/* <!-- Hero Area End -->
        <!-- Support Company Start--> */}
       <SupportCompany />
        {/* <!-- Support Company End-->
        <!-- How  Apply Process Start--> */}
       <ApplyProcess />
        {/* <!-- How  Apply Process End-->
        <!-- Testimonial Start --> */}
       <Testimonial />
        {/* <!-- Testimonial End -->
        <!-- Online CV Area Start --> */}
        <OnlineCv />
        {/* <!-- Online CV Area End-->
    
        <!-- Blog Area Start --> */}
        <div class="home-blog-area blog-h-padding">
            <div class="container">
                {/* <!-- Section Tittle --> */}
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-tittle text-center">
                            <span>Our latest blog</span>
                            <h2>Our recent news</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="home-blog-single mb-30">
                            <div class="blog-img-cap">
                                <div class="blog-img">
                                    <img src={blog1} alt=""/>
                                    {/* <!-- Blog date --> */}
                                    <div class="blog-date text-center">
                                        <span>24</span>
                                        <p>Now</p>
                                    </div>
                                </div>
                                <div class="blog-cap">
                                    <p>|   Properties</p>
                                    <h3><a href="single-blog.html">Footprints in Time is perfect House in Kurashiki</a></h3>
                                    <p class="more-btn">Read more »</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="home-blog-single mb-30">
                            <div class="blog-img-cap">
                                <div class="blog-img">
                                    <img src={blog2} alt=""/>
                                    {/* <!-- Blog date --> */}
                                    <div class="blog-date text-center">
                                        <span>24</span>
                                        <p>Now</p>
                                    </div>
                                </div>
                                <div class="blog-cap">
                                    <p>|   Properties</p>
                                    <h3><a href="/blog">Footprints in Time is perfect House in Kurashiki</a></h3>
                                    <p class="more-btn">Read more »</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Blog Area End --> */}

    </main>
  )
}

export default About