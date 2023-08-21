import React from 'react'
import "./services.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import timeicon from "../../assets/images/time-icon.png";
import teamicon from "../../assets/images/team-icon.png";
import focusicon from "../../assets/images/focus-icon.png";
import trusticon from "../../assets/images/trust-icon.png";

import seo from "../../assets/images/ServicesImage/laravel-develpment.png";
import Form from "./Form";

const Laravel = () => {
  return (
    <div>
      

 <>
    <Header/>
    
    <section className="digitalservices2">
        <div className="container">
            <div className="row digitalservices_main">
            <div className="col-lg-7 digitalservices_main_div1">
                       
                        <h1>Laravel</h1>
                        <p > Empowering Web Development with Elegance and Efficiency</p>
                    </div>
                    <div className="col-lg-5">
                        <Form />
                    </div>
            </div>
        </div>
     </section>

    <section className="dev-passion mt-4 mb-1">
        <div className="container">
            <div className='row text-center'>
            <h2>Unleashing the Full Potential of Laravel Framework for Rapid and Scalable Web Application Development</h2>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="passion">
                       
                        <p>Laravel is a top decision to foster solid and exceptionally proficient web applications satisfying present-day needs. Enlist committed Laravel engineers with us for solid sites with stylish front-closes planned on expressive and exquisite grammar.</p>
                        <p>Enlist Laravel Engineer in India as we put our earnest attempts to make complex, custom Laravel web and versatile application arrangements on our strong MVC design and its wealthy in-fabricated highlights. Controlling its persuasive ORM and server-side delivering, our Laravel designers offer prevalent, useful Laravel arrangements.</p>
                        <p>Laravel is a PHP structure that our engineers influence for adaptable coding and testing with efficient association and sending. Their mastery in Oh no, edge parts of Laravel, code-forming apparatuses, steering speed, and Sealed area delivers continuous, shocking UI/UX which is ideally suited for any reason or kind of business.</p>
                        <p>As an open-source, Laravel gives a strong groundwork to plan sites that are down to earth, various, and exceptionally captivating. Following item arranged capabilities, our specialists reuse the existent parts to fabricate adaptable, modifiable, and organized web applications lining up with your development.

Our Laravel engineers for enlist consolidate dynamic Laravel with plan and improvement consistently to convey flexible applications and remarkable start to finish items for enduring impressions.</p>
<p>Recruit seaward Laravel designers to foster Laravel straight out of the case whenever it might suit you.</p>
                    </div>
                </div>
                <div className="col-lg-6 dev-pass">
                    <img className="img-fluid bdr-rd" src={seo} alt="seo"/>
                </div>
            </div>
        </div>
    </section>

   \     <section className="why-us  pt-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 pe-2 pe-md-5 greyback">
                    <div className="frame1">
                        <div className="inner-head pb-2">
                             <h2>Why Hire Grintech Experts for Laravel</h2> 
                        </div>
                       <p>Hire dedicated Laravel Developer on a Full-time, Hourly, or Fixed Project Cost basis & save up to 25% on development cost</p>
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

    </div>
  )
}

export default Laravel
