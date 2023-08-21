import React from "react";
import "./services.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import webservices from "../../assets/images/digi1.jpg";
import devskills from "../../assets/images/dev-skill.webp";
import passion from "../../assets/images/dev-passion.webp";
import icon1 from "../../assets/images/react-icon.png";
import icon2 from "../../assets/images/html5-icon.png";
import icon3 from "../../assets/images/css3-icon.png";
import icon4 from "../../assets/images/bootstrap-icon.png";
import icon5 from "../../assets/images/photoshop-icon.png";
import icon6 from "../../assets/images/xd-icon.png";
import icon7 from "../../assets/images/figma-icon.png";
import icon8 from "../../assets/images/jquery-icon.png";
import icon9 from "../../assets/images/javascript-icon.png";
import icon10 from "../../assets/images/ai-icon.png";
import timeicon from "../../assets/images/time-icon.png";
import teamicon from "../../assets/images/team-icon.png";
import focusicon from "../../assets/images/focus-icon.png";
import trusticon from "../../assets/images/trust-icon.png";
import whyus from "../../assets/images/why-choose-us.webp";
import seo from "../../assets/images/seo.jpg";
import Form from "./Form";

const Digitalservice = () => {
    return(
        <>
        <Header/>
        
        <section className="digitalservices">
            <div className="container">
                <div className="row digitalservices_main">
                <div className="col-lg-7 digitalservices_main_div1">
                             <span >Lorem Ipsum</span>
                            <h1>Search Engine Optimization (SEO)</h1>
                            <p >In today's digital age, having a website that stands out is crucial for businesses to attract and retain customers. Grintech Web Agency is a leading web design company that offers expert web designing services to help businesses create responsive and engaging websites.</p>
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
                            <h2>Search Engine Optimization (SEO)</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 dev-pass">
                        <img className="img-fluid bdr-rd" src={seo} alt="seo"/>
                    </div>
                </div>
            </div>
        </section>

        <section className="why-us bg-light pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 pe-2 pe-md-5">
                        <div className="frame1">
                            <div className="inner-head pb-2">
                                 <h2>Why Lorem ipsum is dummy text?</h2> 
                            </div>
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>

                        <div className="frame1 pt-5">
                            <div className="inner-head pb-2">
                                 <h2>Why Lorem ipsum is dummy text?</h2> 
                            </div>
                            <ul className="ps-3">
                               <li>Lorem Ipsum is dummy content.</li>
                               <li>Text of the printing and typesetting industry.</li>
                               <li>Sed ut perspiciatis unde omnis iste natus error.</li>
                               <li>At vero eos et accusamus et iusto odio dignissimos ducimu.</li>
                               <li>Et harum quidem rerum facilis est et expedita distinctio.</li>
                               <li>Temporibus autem quibusdam et aut officiis debitis.</li>
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
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text typesetting industry.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon-area"><img className="img-fluid" src={teamicon} alt="dedicated team"/></div>
                                    <div className="icon-text">
                                        <h5>Dedicated Team</h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text typesetting industry.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon-area"><img className="img-fluid" src={focusicon} alt="client focus"/></div>
                                    <div className="icon-text">
                                        <h5>Client Focus</h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text typesetting industry.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon-area"><img className="img-fluid" src={trusticon} alt="trusted quality"/></div>
                                    <div className="icon-text">
                                        <h5>Trusted Quality</h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text typesetting industry.</p>
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

export default Digitalservice;