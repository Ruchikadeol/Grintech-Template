import React from 'react'
import "./services.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import timeicon from "../../assets/images/time-icon.png";
import teamicon from "../../assets/images/team-icon.png";
import focusicon from "../../assets/images/focus-icon.png";
import trusticon from "../../assets/images/trust-icon.png";

import seo from "../../assets/images/ServicesImage/wordpress.png";
import Form from "./Form";

const Wordpress = () => {
  return (
    

 <>
 <Header/>
 
 <section className="digitalservices">
     <div className="container">
         <div className="row digitalservices_main">
         <div className="col-lg-7 digitalservices_main_div1">
      
                     <h1>Wordpress</h1>
                     <p >Leveraging the Flexibility and Simplicity of WordPress for Seamless Website Creation and Management






</p>
                 </div>
                 <div className="col-lg-5">
                     <Form />
                 </div>
         </div>
     </div>
  </section>

 <section className="dev-passion mt-4 mb-1">
     <div className="container">
         <div className="row">
             <div className="col-lg-6">
                 <div className="passion">
                     <h2>Empowering Websites with User-Friendly Content Management</h2>
                     <p>WordPress is a popular open-source content management system (CMS) that is used by millions of websites around the world. It is a web-based platform that allows users to easily create and manage the content of a website, including text, images, and multimedia</p>
                     <p>One of the main benefits of WordPress is its ease of use. It has a user-friendly interface and a wide range of features that make it easy for users to create and manage the content of their website, even if they have little or no technical expertise. It also has a large community of developers who contribute to the project and create a wide range of third-party plugins and themes that can be used to extend the functionality of the platform..</p>
                     <p>WordPress is widely used for building a wide range of websites, including blogs, e-commerce stores, and corporate websites. It is also a popular platform for building mobile apps, as it has a REST API that allows developers to access the content of a WordPress site from other applications.</p>
                     <p>Overall, WordPress is a powerful and user-friendly platform that is well-suited for building and managing websites of all types and sizes.</p>
                 </div>
             </div>
             <div className="col-lg-6 dev-pass">
                 <img className="img-fluid bdr-rd" src={seo} alt="seo"/>
             </div>
         </div>
     </div>
 </section>
 <section className="why-us  pt-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 pe-2 pe-md-5 blueback">
                    <div className="frame1">
                        <div className="inner-head pb-2">
                             <h2>Why Hire Grintech Experts for Wordpress Development</h2> 
                        </div>
                       <p>Hire dedicated Wordpress Developer on a Full-time, Hourly, or Fixed Project Cost basis & save up to 25% on development cost</p>
                    </div>

                    <div className="frame1 pt-5">
                        <div className="inner-head pb-2">
                             <h2>Speed up your advancement with Grintech Experts:</h2> 
                        </div>
                        <ul className="ps-3">
                           <li>Fast hiring within 24 hours</li>
                           <li>Simple & Transparent Pricing</li>
                           <li>Fully Signed NDA & Code Security</li>
                           <li>Regular Reporting & Transparent Communication</li>
                           <li>Easy Exit Policy</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="why-frame">
                    <ul className="list-unstyled">
                            <li>
                                <div className="icon-area"><img className="img-fluid" src={timeicon} alt="flexible timing"/></div>
                                <div className="icon-text">
                                    <h5>Flexible Timing</h5>
                                    <p>Grintech also offers flexible timing to accommodate your specific needs. Whether you require assistance during specific hours of the day or need support with managing projects across different time zones, Grintech can tailor their services to meet your scheduling preferences. </p>
                                </div>
                            </li>
                            <li>
                                <div className="icon-area"><img className="img-fluid" src={teamicon} alt="dedicated team"/></div>
                                <div className="icon-text">
                                    <h5>Dedicated Team</h5>
                                    <p>Grintech dedicated team plays a crucial role in project management, providing the expertise, collaboration, and focus needed to achieve project goals efficiently.</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon-area"><img className="img-fluid" src={focusicon} alt="client focus"/></div>
                                <div className="icon-text">
                                    <h5>Client Focus</h5>
                                    <p>Maintaining a client focus is paramount in any business or project. By prioritizing the needs, preferences, and satisfaction of clients, organizations can build strong relationships, foster loyalty, and drive sustainable growth.</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon-area"><img className="img-fluid" src={trusticon} alt="trusted quality"/></div>
                                <div className="icon-text">
                                    <h5>Trusted Quality</h5>
                                    <p>Trusted quality is a crucial factor for businesses aiming to establish a solid reputation and gain customer trust. It refers to consistently delivering products, services, and experiences that meet or exceed customer expectations, while also maintaining a high standard of reliability, durability, and performance. </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

 <Footer/>  
 </>

  )
}

export default Wordpress
