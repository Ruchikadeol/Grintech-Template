import React from "react";
import "./services.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import webservices from "../../assets/images/webservicesdesktop.png";
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
import php from "../../assets/images/php.png"
import Form from "./Form";


const Services = () => {
    return (
        <div>
            <Header />
         <section className="webservices">
            <div className="container">
                <div className="row webservices_main">
                <div className="col-lg-6 webservices_main_div1">
                             <span >Lorem Ipsum</span>
                            <h1 >Grintech Web Services</h1>
                            <p >In today's digital age, having a website that stands out is crucial for businesses to attract and retain customers. Grintech Web Agency is a leading web design company that offers expert web designing services to help businesses create responsive and engaging websites.</p>
                        </div>
                        <div className="col-lg-6">
                            <Form />
                        </div>
                </div>
            </div>
         </section>

         

            <section className="our-services-inner mt-5">
                <div className="container">
                    <div className="row">
                        <div className="inner-head pb-3">
                           
                            <h2>Raise Your Brand Thought Leadership with Robust Web Designs</h2>
                            <p>In today's digital landscape, establishing and maintaining a strong online presence is essential for business growth. With approximately 4.57 billion active internet users worldwide, accounting for 59 percent of the global population, the potential for reaching and engaging with customers is vast. Moreover, 53 percent of these online users conduct research before connecting with a brand, highlighting the importance of making a positive impression to secure their trust and loyalty. By leveraging the power of the internet, businesses can tap into new markets, expand their reach, and ensure they are the right choice for discerning customers.
</p>
                        </div>
                    </div>

                    
                    <div className="row">
                        <div className="col-lg-6">
                            <img className="img-fluid bdr-rd" src={devskills} alt="developer skills" />
                        </div>
                        <div className="col-lg-6 skills">
                            <h3>Our Developer Skills</h3>
                            <p>At Grintech Web Agency, our team of skilled developers possesses expertise in a wide range of technologies and platforms. Here are some of the key developer skills</p>
                            <div className="row counter-area">
                                <div className="col-lg-3 bdr-rd">
                                    <div className="circle_percent" data-percent="95">
                                        <div className="circle_inner">
                                            <div className="round_per"></div>
                                        </div>
                                    </div>
                                    <div className="count-caption">
                                        <h6>Core PHP</h6>
                                    </div>
                                </div>
                                <div className="col-lg-3 bdr-rd">
                                    <div className="circle_percent" data-percent="100">
                                        <div className="circle_inner">
                                            <div className="round_per"></div>
                                        </div>
                                    </div>
                                    <div className="count-caption">
                                        <h6>Laravel</h6>
                                    </div>
                                </div>
                                <div className="col-lg-3 bdr-rd">
                                    <div className="circle_percent" data-percent="99">
                                        <div className="circle_inner">
                                            <div className="round_per"></div>
                                        </div>
                                    </div>
                                    <div className="count-caption">
                                        <h6>Shopify</h6>
                                    </div>
                                </div>
                                <div className="col-lg-3 bdr-d">
                                    <div className="circle_percent" data-percent="95">
                                        <div className="circle_inner">
                                            <div className="round_per"></div>
                                        </div>
                                    </div>
                                    <div className="count-caption">
                                        <h6>Wordpress</h6>
                                    </div>
                                </div>
                                <div className="col-lg-3 bdr-r">
                                    <div className="circle_percent" data-percent="95">
                                        <div className="circle_inner">
                                            <div className="round_per"></div>
                                        </div>
                                    </div>
                                    <div className="count-caption">
                                        <h6>Javascript</h6>
                                    </div>
                                </div>
                                <div className="col-lg-3 bdr-r">
                                    <div className="circle_percent" data-percent="95">
                                        <div className="circle_inner">
                                            <div className="round_per"></div>
                                        </div>
                                    </div>
                                    <div className="count-caption">
                                        <h6>JQuery</h6>
                                    </div>
                                </div>
                                <div className="col-lg-3 bdr-r">
                                    <div className="circle_percent" data-percent="95">
                                        <div className="circle_inner">
                                            <div className="round_per"></div>
                                        </div>
                                    </div>
                                    <div className="count-caption">
                                        <h6>HTML/CSS</h6>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="circle_percent" data-percent="95">
                                        <div className="circle_inner">
                                            <div className="round_per"></div>
                                        </div>
                                    </div>
                                    <div className="count-caption">
                                        <h6>React</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dev-passion mt-4 mb-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="passion">
                                <h3>Explore our development Technical Skills</h3>
                                <p>Our developers possess expertise in a variety of technologies and platforms. They are skilled in: </p>
                                <ul>
                                    <li>Shopify: Building and customizing e-commerce stores on the Shopify platform.</li>
                                    <li>WordPress: Creating customized websites and themes, and extending functionality using WordPress.</li>
                                    <li>JavaScript: Developing interactive and dynamic website features.</li>
                                    <li>jQuery: Utilizing the jQuery library to simplify tasks and enhance website functionality.</li>
                                    <li>
                                        HTML/CSS: Structuring web content and applying styles for visually appealing designs.</li>
                                    <li>React: Building fast, scalable, and interactive web applications using the React library.</li>

                                </ul>
                            

                            </div>
                        </div>
                        <div className="col-lg-6 dev-pass">
                            <img className="img-fluid" src={passion} alt="passion" />
                        </div>
                        <div>
                        <p>With these skills, our developers are equipped to handle a wide range of projects and deliver high-quality solutions to meet our client's needs.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="technology">
                <div className="container">
                    <div className="row">
                        <div className="inner-head pb-3">
                            <h2>Technologies We Use</h2>
                            <p>We leverage a range of cutting-edge technologies to deliver exceptional web development and digital marketing solutions. Some of the key technologies we use include:</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="frontend-tab" data-bs-toggle="tab" data-bs-target="#frontend" type="button" role="tab" aria-controls="frontend" aria-selected="true">Frontend</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="backend-tab" data-bs-toggle="tab" data-bs-target="#backend" type="button" role="tab" aria-controls="backend" aria-selected="false">Backend</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="database-tab" data-bs-toggle="tab" data-bs-target="#database" type="button" role="tab" aria-controls="database" aria-selected="false">Database</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="cloud-tab" data-bs-toggle="tab" data-bs-target="#cloud" type="button" role="tab" aria-controls="cloud" aria-selected="false">Cloud Platform</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="server-tab" data-bs-toggle="tab" data-bs-target="#server" type="button" role="tab" aria-controls="server" aria-selected="false">Server</button>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="frontend" role="tabpanel" aria-labelledby="frontend-tab">
                                    <ul className="list-unstyled">
                                        <li className="tab-icon rounded-circle"><img className="img-fluid" src={icon1} alt="react" /></li>
                                        <li className="tab-icon rounded-circle"><img className="img-fluid" src={icon2} alt="html5" /></li>
                                        <li className="tab-icon rounded-circle"><img className="img-fluid" src={icon3} alt="css3" /></li>
                                        <li className="tab-icon rounded-circle"><img className="img-fluid" src={icon4} alt="bootstrap" /></li>
                                        <li className="tab-icon rounded-circle"><img className="img-fluid" src={icon5} alt="photoshop" /></li>
                                        <li className="tab-icon rounded-circle"><img className="img-fluid" src={icon6} alt="xd" /></li>
                                        <li className="tab-icon rounded-circle"><img className="img-fluid" src={icon7} alt="figma" /></li>
                                        <li className="tab-icon rounded-circle"><img className="img-fluid" src={icon8} alt="jquery" /></li>
                                        <li className="tab-icon rounded-circle"><img className="img-fluid" src={icon9} alt="javascript" /></li>
                                        <li className="tab-icon rounded-circle"><img className="img-fluid" src={icon10} alt="ai" /></li>
                                    </ul>
                                </div>
                                <div class="tab-pane fade" id="backend" role="tabpanel" aria-labelledby="backend-tab">
                                    <ul className="list-unstyled">
                                        <li className="tab-icon rounded-circle"><img className="img-fluid" src={php} alt="php" /></li>
                                        <li className="tab-icon rounded-circle"><img className="img-fluid" src={icon2} alt="html5" /></li>
                                        <li className="tab-icon rounded-circle"><img className="img-fluid" src={icon3} alt="css3" /></li>
                                        <li className="tab-icon rounded-circle"><img className="img-fluid" src={icon4} alt="bootstrap" /></li>
                                        <li className="tab-icon rounded-circle"><img className="img-fluid" src={icon5} alt="photoshop" /></li>
                                        <li className="tab-icon rounded-circle"><img className="img-fluid" src={icon6} alt="xd" /></li>
                                    </ul>
                                </div>
                                <div class="tab-pane fade" id="database" role="tabpanel" aria-labelledby="database-tab">
                                    <ul className="list-unstyled">
                                        <li className="tab-icon rounded-circle"><img className="img-fluid" src={icon5} alt="photoshop" /></li>
                                        <li className="tab-icon rounded-circle"><img className="img-fluid" src={icon6} alt="xd" /></li>
                                        <li className="tab-icon rounded-circle"><img className="img-fluid" src={icon7} alt="figma" /></li>
                                        <li className="tab-icon rounded-circle"><img className="img-fluid" src={icon8} alt="jquery" /></li>
                                        <li className="tab-icon rounded-circle"><img className="img-fluid" src={icon9} alt="javascript" /></li>
                                        <li className="tab-icon rounded-circle"><img className="img-fluid" src={icon10} alt="ai" /></li>
                                    </ul>
                                </div>
                                <div class="tab-pane fade" id="cloud" role="tabpanel" aria-labelledby="cloud-tab">
                                    <ul className="list-unstyled">
                                        <li className="tab-icon rounded-circle"><img className="img-fluid" src={icon1} alt="react" /></li>
                                        <li className="tab-icon rounded-circle"><img className="img-fluid" src={icon2} alt="html5" /></li>
                                        <li className="tab-icon rounded-circle"><img className="img-fluid" src={icon3} alt="css3" /></li>
                                        <li className="tab-icon rounded-circle"><img className="img-fluid" src={icon7} alt="figma" /></li>
                                        <li className="tab-icon rounded-circle"><img className="img-fluid" src={icon8} alt="jquery" /></li>
                                        <li className="tab-icon rounded-circle"><img className="img-fluid" src={icon9} alt="javascript" /></li>
                                        <li className="tab-icon rounded-circle"><img className="img-fluid" src={icon10} alt="ai" /></li>
                                    </ul>
                                </div>
                                <div class="tab-pane fade" id="server" role="tabpanel" aria-labelledby="server-tab">
                                    <ul className="list-unstyled">
                                        <li className="tab-icon rounded-circle"><img className="img-fluid" src={icon7} alt="figma" /></li>
                                        <li className="tab-icon rounded-circle"><img className="img-fluid" src={icon8} alt="jquery" /></li>
                                        <li className="tab-icon rounded-circle"><img className="img-fluid" src={icon9} alt="javascript" /></li>
                                        <li className="tab-icon rounded-circle"><img className="img-fluid" src={icon10} alt="ai" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="why-us">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img className="img-fluid bdr-rd" src={whyus} alt="why choose us" />
                        </div>
                        <div className="col-lg-6">
                            <div className="inner-head pb-3">
                                <h2>Why Choose Us</h2>
                            </div>
                            <div className="why-frame">
                                <ul className="list-unstyled">
                                    <li>
                                        <div className="icon-area"><img className="img-fluid" src={timeicon} alt="flexible timing" /></div>
                                        <div className="icon-text">
                                            <h5>Flexible Timing</h5>
                                            <p>We understand the importance of meeting deadlines and accommodating your schedule. Our team is flexible and committed to delivering projects on time, ensuring that your business operations remain uninterrupted.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon-area"><img className="img-fluid" src={teamicon} alt="dedicated team" /></div>
                                        <div className="icon-text">
                                            <h5>Dedicated Team</h5>
                                            <p>We have a team of dedicated professionals who are passionate about their work. With their expertise and commitment, they go above and beyond to meet your requirements and deliver exceptional results.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon-area"><img className="img-fluid" src={focusicon} alt="client focus" /></div>
                                        <div className="icon-text">
                                            <h5>Client Focus</h5>
                                            <p>Our clients are at the center of everything we do. We take the time to understand your specific goals, challenges, and preferences, tailoring our services to meet your unique needs.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon-area"><img className="img-fluid" src={trusticon} alt="trusted quality" /></div>
                                        <div className="icon-text">
                                            <h5>Trusted Quality</h5>
                                            <p>Quality is at the core of our services. We take pride in delivering high-quality web solutions
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )

}

export default Services