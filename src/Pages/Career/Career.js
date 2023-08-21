import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import "./career.css";
import image from "../../assets/images/ServicesImage/wordpress.png";
import image2 from "../../assets/images/ServicesImage/html-css-boostrap.png";
import { Icon } from '@iconify/react';

const Career = () => {
    return (
        <>
            <Header />

            <section className='career-main'>
                <h1>Careers</h1>
                <p>Join Our Team: Explore Exciting Career Opportunities with Us!</p>

            </section>

            <section>
                <div className='container job-posting'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div class="stage">
                                <img src={image} className='box bounce-2 img-fluid'></img>
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <h2>CMS Developer</h2>
                            <p><strong>Experience:</strong> 1- 3 Years</p>
                            <p><strong>Salary Package:</strong> 15k- 35k / Month</p>
                            <p><strong>Education Qualification:</strong> B.Tech (IT/CSE)/ M.Tech/ MCA /BCA /BSC (IT)</p>
                            <p></p>
                            <p></p>

                            <h4>Skills Required:
                            </h4>

                            <ul>
                                <li>  Customize WordPress themes to align with client requirements, including layout modifications, color scheme adjustments, and font changes.</li>
                                <li>    Integrate e-commerce functionalities, such as shopping carts, checkout processes, and payment gateways, into WordPress websites. </li>
                                <li>    Convert HTML templates into WordPress themes, ensuring responsiveness and cross-browser compatibility.</li>
                                <li>     Collaborate with designers and back-end developers to ensure seamless integration of design and functionality.</li>
                                <li>     Troubleshoot and debug issues with WordPress themes, plugins, and integrations.</li>
                                <li>     Optimize WordPress websites for performance, security, and SEO.</li>
                                <li>     Keep up to date with the latest WordPress trends, plugins, and best practices.</li>
                                <li>       Document technical specifications, guidelines, and project progress.</li>


                            </ul>
                            <button className='jobpostingbtn' data-bs-toggle="modal" data-bs-target="#career-modal">Apply Now!</button>


                        </div>
                    </div>
                </div>
            </section>


            <section className='jobopeningeven'>
                <div className='container mt-5 job-posting '>
                    <div className='row'>


                        <div className='col-md-6 order-2 order-md-1'>
                            <h2>Frontend Developer</h2>
                            <p><strong>Experience:</strong> 1- 3 Years</p>
                            <p><strong>Salary Package:</strong> 15k- 35k / Month</p>
                            <p><strong>Education Qualification:</strong> B.Tech (IT/CSE)/ M.Tech/ MCA /BCA /BSC (IT)</p>
                            <p></p>
                            <p></p>

                            <ul>
                                <li>Strong proficiency in HTML5, CSS3, and Bootstrap for responsive web design. </li>
                                <li>Proficient in JavaScript, including ES6+ syntax and DOM manipulation.</li>
                                <li>Experience working with JavaScript frameworks such as Vue, React, or Angular.</li>
                                <li>Familiarity with jQuery and its plugins for enhanced interactivity and animation.</li>
                                <li>Solid understanding of responsive web design principles and cross-browser compatibility.</li>
                                <li>Proficient in converting Figma design files into HTML/CSS templates.</li>
                                <li>Strong problem-solving skills and attention to detail.</li>
                                <li>Ability to work in a fast-paced, deadline-driven environment.</li>
                                <li>Knowledge of version control systems such as Git is a plus.</li>

                            </ul>
                            <button className='jobpostingbtn' data-bs-toggle="modal" data-bs-target="#career-modal">Apply Now!</button>

                        </div>

                        <div className='col-md-6 order-1 order-md-2'>
                            <div class="stage">
                                <img src={image2} className='box bounce-2 img-fluid '></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className='jobopening'>
                <div className='container mt-5 job-posting '>
                    <div className='row'>
                    <div className='col-md-6'>
                        <h2>Didn't Find? What you were looking for ? </h2>
                    </div>

                    <div className='col-md-6'>
                    <button className='jobpostingbtn' data-bs-toggle="modal" data-bs-target="#career-modal">Click Here</button>
                    </div>
                    </div>
                </div>
            </section> */}


            <div class="modal fade" id="career-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            {/* <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div> */}
            <div class="modal-body modal-body-custom">
              <form action="?" method="POST">
                <div className='d-flex justify-content-between '>
                  <h4 className='text-center mb-3'> <b style={{ fontWeight: "900" }}><span style={{ color: "#177a0e" }}>Apply Now</span> </b></h4> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className='row'>
                  <div class="mb-3 col-md-12 col-sm-12">
                    <label for="exampleInputEmail1" class="form-label">Full Name </label>
                    <input type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp" />
                  </div>
                  <div class="mb-3 col-md-12 col-sm-12">
                    <label for="exampleInputEmail1" class="form-label">Contact</label>
                    <input type="tel" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div class="mb-3 col-md-12 col-sm-12">
                    <label for="exampleInputEmail1" class="form-label">Email address </label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                 <div className='col-md-12 col-sm-12'>
                 <label for="exampleInputEmail1" class="form-label">Resume </label>
                  <input size="40" class="wpcf7-form-control wpcf7-file wpcf7-validates-as-required form-control" accept=".pdf,.txt,.doc,.docx" aria-required="true" aria-invalid="false" type="file" name="your-resume" />
                  </div>
                </div>
               

                <div class="mb-3 mt-4">
                  <label for="exampleFormControlTextarea1" class="form-label">Your Message Here</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                </div>
                <div class="g-recaptcha" data-sitekey="your_site_key"></div>
                <button type="submit" class="btn " style={{backgroundColor:"#177a0e", color:"white"}}>Submit</button>
              </form>
            </div>
            
          </div>
        </div>
      </div>

            <Footer />
        </>
    )
}

export default Career
