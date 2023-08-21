import React, { useEffect, useState } from 'react';
import sanityClient from '../../sanityClient';
import "./about.css";
import laptop from "../../assets/images/laptop-hold.png";
import mission from "../../assets/images/mission.png";
import vision from "../../assets/images/vision.png";
import goal from "../../assets/images/goal.png";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Sideicons from "../../Components/Sideicons/Sidebar";
import Image from "../../assets/images/pnggg.png"
import data from '../OurWorks/data.js';
import Form from "../Services/Form"
import {WhatsAppWidget} from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

export default function About() {

    const [sites, setSites] = useState(data);
    const [posts, setPosts] = useState([]);
    const [number, setNumber] = useState(false);
    const [length, setLength] = useState()
    useEffect(() => {
        const fetchData = async () => {
            const query = '*[_type == "team"]| order(id asc){..., "mainImageUrl": mainImage.asset->url}'; // Include "mainImageUrl" field to materialize the URL
                setLength(query.length-1)
            try {
                const result = await sanityClient.fetch(query);
                setPosts(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    console.log(posts)

    return (
        <>
            <Header />
            <WhatsAppWidget phoneNumber="8264420387" message="Hello, how can I help you?" companyName="Grintech Web Agency" />
            <Sideicons />
            <section className="about">
                <div className="container">
                    <div className="row about_main">
                        <div className="col-lg-6 col-md-12 col-sm-12 about_main_div1">

                            <h1 >Your Trusted Development and Digital Marketing Partner</h1>
                            <p >With a solid foundation of 7+ years of experience, Grintech Web Agency has established itself as a leading provider of web development and digital marketing solutions. As a global agency, we are proud to have a presence in 5+ countries, serving clients from various industries and backgrounds.</p>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <Form />
                        </div>
                    </div>
                </div>
            </section>

       

            <section className="laptop-hold">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 col-sm-12">
                            <div className="laptop-bg">
                                <img className="img-fluid" src={laptop} alt="laptop hold" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12">
                            <div className="row pt-2 pt-md-5">
                                <h2 className="">Why Choose Us</h2>
                                <p className="">At Grintech Web Agency, client satisfaction is at the core of everything we do. We are proud to maintain a remarkable 97% repeat customer rate, a testament to our dedication to delivering exceptional results and building long-term partnerships.</p>



                            </div>





                            <div className="row pt-3">
                                <div className="col-lg-4 col-md-4 main-frame">
                                    <div className="icon">
                                        <img className="img-fluid" src={mission} alt="mission" />
                                    </div>
                                    <div className="caption">
                                        <h5 className="pt-4 pb-2 mb-0">Mission</h5>
                                        <p className="">We are dedicated to helping businesses establish a strong online presence, engage with their target audience, and achieve their goals in the digital landscape.</p>

                                        {/* <ul>
                                            <li>  Client Satisfaction</li>
                                            <li>Technological Excellence</li>
                                            <li> Innovation and Creativity</li>
                                            <li> Ethical Practices</li>
                                            <li> Collaboration and Communication</li>
                                        </ul> */}


                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 main-frame">
                                    <div className="icon">
                                        <img className="img-fluid" src={vision} alt="vision" />
                                    </div>
                                    <div className="caption">
                                        <h5 className="pt-4 pb-2 mb-0">Vision</h5>
                                        <p>Our vision is to be a globally recognized, client-centric, and innovative web agency that delivers exceptional results, leads the industry, and positively impacts society.


                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 main-frame">
                                    <div className="icon">
                                        <img className="img-fluid" src={goal} alt="goal" />
                                    </div>
                                    <div className="caption">
                                        <h5 className="pt-4 pb-2 mb-0">Goal</h5>
                                        <p>We aim to establish itself as a trusted and leading provider of web development and digital marketing solutions while making a positive impact on our clients' success.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team-members py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-4">
                            <h2>Meet Our Team Members</h2>
                        </div>


                        {posts.slice(0,((number==true)?length:4)).map((post, index) => (
                            <div className="col-lg-3 col-md-4 col-sm-6 member-frame">
                                <img className="img-fluid tm about-team" src={post.mainImageUrl} alt="member1" />
                                <div className="img-caption">
                                    <div className="text-frame">
                                        <h5 className="mb-0">{post.name}</h5>
                                        <p className="mb-0"><small>{post.position}</small></p>
                                    </div>

                                </div>
                            </div>
                        ))}


                    </div>
                    <div className='row d-flex justify-content-center'>
                        <button className='about_viewbtn' onClick={()=>setNumber(!number)}>{number==true? <small>Close</small>:<small>View all</small>}</button>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className='row mt-3'>
                        <div className='col-lg-8 col-md-12' style={{position:"relative"}}>
                            <div className='about-owner'>
                      
                            <p>   <blockquote cite="https://www.huxley.net/bnw/four.html">
                           I'm <b>Rajesh Bhardwaj</b>, the CEO, and creator of Grintech Web Agency. GWA was established in 2022 with only a developer and Business Analyst from a single home based room office. In just couple of years GWA has 
 grown its business and clients worldwide and took its own office space with more than 15 skilled employees team today.GWA has growing their business and clientele and is a top provider of web solutions with a focus on enabling companies online. I founded GWA with a desire to provide complete online solutions catered to our clients' specific needs and a love for technology and the desire to make a difference.
<br /><br />
By offering state-of-the-art web development, design, and digital marketing services, GWA's goal is to support businesses in thriving in the digital environment. We are devoted to giving our customers the tools and tactics they need to succeed because we recognise the importance of having a strong online presence in today's cutthroat marketplace.  </blockquote></p> 
                            </div> 
                            <div className='arrow'></div>
                             </div>

                        <div className='col-lg-4 col-md-12 owner-img'>
                        <img src={Image} className=' img-fluid'></img>
                        </div>

                    </div>
                </div>
            </section>

            <section className='client'>
                <div className='container '> <h3>Our Global Clients</h3>
                    <h6> Business Expansion Scale</h6>
                    <div className='row client2'>
                        {
                            sites.map((item) => (
                                <div id="client2_image" className='col-md-2 mt-4 mb-4 '>
                                    <img src={item.logo} className='img-fluid'></img>
                                </div>
                            )
                            )
                        }
                    </div>
                </div>

            </section>

            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        {/* <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div> */}
                        <div class="modal-body modal-body-custom">
                            <form>
                                <div className='d-flex justify-content-between '>
                                    <h4 className='text-center mb-3'> <b style={{ fontWeight: "900" }}>Let's Discuss Your <span style={{ color: "#177a0e" }}>Project</span> </b></h4> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className='row'>
                                    <div class="mb-3 col-md-6 col-sm-12">
                                        <label for="exampleInputEmail1" class="form-label">Full Name <span className='star'>*</span></label>
                                        <input type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="mb-3 col-md-6 col-sm-12">
                                        <label for="exampleInputEmail1" class="form-label">Phone </label>
                                        <input type="tel" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="mb-3 col-md-6 col-sm-12">
                                        <label for="exampleInputEmail1" class="form-label">Email address <span className='star'>*</span></label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div class="mb-3 col-md-6 col-sm-12">
                                        <label for="exampleInputPassword1" class="form-label">Website URL </label>
                                        <input type="text" class="form-control" id="exampleInputPassword1" />
                                    </div>
                                </div>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected disabled>How we can help you? </option>
                                    <option value="1">Seo/SMM</option>
                                    <option value="2">Web Development</option>
                                    <option value="3">Web Design</option>
                                </select>

                                <div class="mb-3 mt-4">
                                    <label for="exampleFormControlTextarea1" class="form-label">Your Message Here</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                                </div>
                                <button type="submit" class="btn " style={{ backgroundColor: "#177a0e", color: "white" }}>Submit</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>


            {/* <Testislider /> */}
            <Footer />
        </>
    )
}