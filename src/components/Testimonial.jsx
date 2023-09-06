import React from 'react'
import testFounder from '../assets/img/testmonial/testimonial-founder.png'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Testimonial = () => {
  return (
    <>
    
    <div class="testimonial-area testimonial-padding">
            <div class="container">
                {/* <!-- Testimonial contents --> */}
                <div class="row d-flex justify-content-center">
                    <div class="col-xl-8 col-lg-8 col-md-10">
                        {/* <div class="h1-testimonial-active dot-style"> */}
                        <Carousel
                            autoPlay
                            infiniteLoop
                            showArrows={true}
                            showStatus={false}
                            showIndicators={true}
                            showThumbs={false}
                        >
                            {/* <!-- Single Testimonial --> */}
                            <div class="single-testimonial text-center">
                                {/* <!-- Testimonial Content --> */}
                                <div class="testimonial-caption ">
                                    {/* <!-- founder --> */}
                                    <div class="testimonial-founder  ">
                                        <div class="founder-img mb-30">
                                            <img src={testFounder} alt=""/>
                                            <span>Margaret Lawson</span>
                                            <p>Creative Director</p>
                                        </div>
                                    </div>
                                    <div class="testimonial-top-cap">
                                        <p>“I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean it will care for you and workout hard.”</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Single Testimonial --> */}
                            <div class="single-testimonial text-center">
                                {/* <!-- Testimonial Content --> */}
                                <div class="testimonial-caption ">
                                    {/* <!-- founder --> */}
                                    <div class="testimonial-founder  ">
                                        <div class="founder-img mb-30">
                                            <img src={testFounder} alt=""/>
                                            <span>Margaret Lawson</span>
                                            <p>Creative Director</p>
                                        </div>
                                    </div>
                                    <div class="testimonial-top-cap">
                                        <p>“I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean it will care for you and workout hard.”</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Single Testimonial --> */}
                            <div class="single-testimonial text-center">
                                {/* <!-- Testimonial Content --> */}
                                <div class="testimonial-caption ">
                                    {/* <!-- founder --> */}
                                    <div class="testimonial-founder  ">
                                        <div class="founder-img mb-30">
                                            <img src={testFounder} alt=""/>
                                            <span>Margaret Lawson</span>
                                            <p>Creative Director</p>
                                        </div>
                                    </div>
                                    <div class="testimonial-top-cap">
                                        <p>“I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean it will care for you and workout hard.”</p>
                                    </div>
                                </div>
                                
                            {/* </div> */}
                        </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Testimonial