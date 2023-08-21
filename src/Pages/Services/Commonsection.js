import React from 'react'
import timeicon from "../../assets/images/time-icon.png";
import teamicon from "../../assets/images/team-icon.png";
import focusicon from "../../assets/images/focus-icon.png";
import trusticon from "../../assets/images/trust-icon.png";

const Commonsection = (props) => {
  return (
   
    <section className="why-us  pt-5">
    <div className="container">
        <div className="row">
        <div className={`col-lg-6 pe-2 pe-md-5 ${props.classname}`}>
                <div className="frame1">
                    <div className="inner-head pb-2">
                         <h2>Why Hire Grintech Experts for {props.name}   {props.technology} ? </h2> 
                    </div>
                   <p>Hire dedicated {props.name}   {props.technology} on a Full-time, Hourly, or Fixed Project Cost basis & save up to 25% on development cost</p>
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
  )
}

export default Commonsection
