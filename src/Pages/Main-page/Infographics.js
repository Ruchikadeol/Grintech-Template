import React from 'react'
import globe from "../../assets/images/globe.png"
import "./infographics.css";

const Infographics = () => {
  return (
    <div style={{backgroundColor:"#cad9e2"}}>
              <div class="container">
            <div class="row">
                <div class="col-lg-12 d-flex justify-content-center align-items-center flex-column pt-4 pb-5" id="infographic">
                    <section class="step">
                        <div class="circle border-gradient border-gradient-purple" data-aos="fade-right">
                            <img src={globe} alt="globe" class="img-fluid globe-img" />
                            <div class="circle-head">
                                <h4>Our Methods </h4>Strategic Approaches and Effective Execution
                            </div>
                        </div>
                        <article data-step="1" class="b1" data-aos="fade-down" data-aos-delay="500">
                            <header class="d-flex align-items-center">
                                <div>
                                   <i class="fas fa-user-friends s1"></i>
                                </div>
                                <div>
                                   <h4 class="text-uppercase ps-4">Individual Idea Generation</h4>
                                   <p class=" ps-4">Encouraging Creativity and Collaboration</p>
                                </div>
                            </header>
                        </article>
                        <article data-step="2" class="b2" data-aos="fade-down" data-aos-delay="1000">
                            <header class="d-flex align-items-center">
                               <div>
                                   <i class="fas fa-lightbulb s2"></i>
                                </div>
                                <div>
                                   <h4 class="text-uppercase ps-4">Idea Generation and Exploration</h4>
                                   <p class=" ps-4">Nurturing Creative Thinking and Innovation</p>
                                </div>
                            </header>
                        </article>
                        <article data-step="3" class="b3" data-aos="fade-down" data-aos-delay="1500">
                            <header class="d-flex align-items-center">
                               <div>
                                   <i class="fas fa-clock s3"></i>
                                </div>
                                <div>
                                   <h4 class="text-uppercase ps-4">Time Management and Planning</h4>
                                   <p class=" ps-4">Efficiently Utilizing Resources and Meeting Deadlines</p>
                                </div>
                            </header>
                        </article>
                        <article data-step="4" class="b4" data-aos="fade-down" data-aos-delay="2000">
                            <header class="d-flex align-items-center">
                               <div>
                                   <i class="fas fa-dollar-sign s4"></i>
                                </div>
                                <div>
                                   <h4 class="text-uppercase ps-4">Affordable Solutions</h4>
                                   <p class=" ps-4">Cost-Conscious Approaches for Value Creation</p>
                                </div>
                            </header>
                        </article>
                    </section>
                </div>
            </div>



        </div>
    </div>
  )
}

export default Infographics
