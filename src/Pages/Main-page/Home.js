import React, { useEffect, useState } from 'react'
import Banner from './Banner.js';
import Tab from './Tab.js';
import Header from '../../Components/Header/Header.js';
import Footer from '../../Components/Footer/Footer.js';
import processbg from "../../assets/images/process-bg.webp";
import plan from "../../assets/images/p1.png";
import design from "../../assets/images/p2.png";
import develope from "../../assets/images/p3.png";
import launch from "../../assets/images/p4.png";
import grow from "../../assets/images/p5.png";
import support from "../../assets/images/p6.png";
import line1 from "../../assets/images/line1.png";
import line2 from "../../assets/images/line2.png";
import line3 from "../../assets/images/line3.png";
import projectsbg from "../../assets/images/projects-bg.webp";
import statsicon1 from "../../assets/images/pi1.png";
import statsicon2 from "../../assets/images/pi2.png";
import statsicon3 from "../../assets/images/pi3.png";
import statsicon4 from "../../assets/images/pi4.png";
import callaction from "../../assets/images/get-touch-bg.webp";
import homeabout from "../../assets/images/home-about-bg.webp";
import {Icon} from '@iconify/react';

import Homeblog from "../../Components/Homeblog/Blogpost.js";
import { Link } from 'react-router-dom';
import Client2 from './Client2.js';
import data from '../OurWorks/data.js';
import Infographics from "./Infographics.js"

import AOS from "aos";
import "aos/dist/aos.css";


import PartnerImage1 from "../../assets/images/partnerlogo/logo.png"
import PartnerImage2 from "../../assets/images/partnerlogo/logo2.png"
import PartnerImage3 from "../../assets/images/partnerlogo/logo3.png"
import {WhatsAppWidget} from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

const Home = () => {

  const [sites, setSites] = useState(data);

  useEffect(()=>{
    AOS.init({
      duration: 1200,
    })
  })
 

  return (
    <div className='app'>
      <Header/>
      <Banner />
      <WhatsAppWidget phoneNumber="8264420387" message="Hello, how can I help you?" companyName="Grintech Web Agency" />
      <section id="home-services" className="mt-5">
        <div className="container">
          <div className="row">
            <div className="services-home pb-3">
              <h2>Our Services</h2>
              <p>That's great to hear! Grintech Web Agency offers a range of services in the field<br /> of web development and digital marketing.</p>
            </div>
          </div>
        </div>
      </section>

      <Tab/>
      <section id="process" className='process' style={{backgroundImage: `url(${processbg})` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="p1">
                <img src ={line1} className="l1" alt="line"></img>
                <div className='text-boxl c1'>
                  <h5>Plan</h5>
                  <p>Grintech Web Agency recognizes the importance of thorough planning to ensure the success of a project. </p>
                </div>
                <div className='num-boxl'>
                  <h6 className='nc1'>01</h6>
                  <img src ={plan} className="img-fluid" alt="plan"></img>
                </div>
              </div>
              <div className="p2">
                <img src ={line2} className="l2" alt="line"></img>
                <div className='text-boxl c2'>
                  <h5>Design</h5>
                  <p>We focus on user-friendly designs for websites and helping clients establish a strong brand identity. </p>
                </div>
                <div className='num-boxl'>
                  <h6 className='nc2'>02</h6>
                  <img src ={design} className="img-fluid" alt="design"></img>
                </div>
              </div>
              <div className="p3">
                <img src ={line3} className="l3" alt="line"></img>
                <div className='text-boxl c3'>
                  <h5>Develope</h5>
                  <p>We employ skilled developers who specialize in web development, utilizing various programming languages.</p>
                </div>
                <div className='num-boxl'>
                  <h6 className='nc3'>03</h6>
                  <img src ={develope} className="img-fluid" alt="develope"></img>
                </div>
              </div>
            </div>
            <div className="col-lg-4 bx-center">
              <div className="work-process">
                <h3 className="text-center">Our<br/>Working<br/><span>Process</span></h3>
              </div>
            </div>
            <div className="col-lg-4">
            <div className="p1">
                <img src ={line3} className="l4" alt="line"></img>
                <div className='text-boxr c3'>
                  <h5>Launch</h5>
                  <p>We support clients in opening their websites, ensuring a smooth transition from development to live.</p>
                </div>
                <div className='num-boxr'>
                  <h6 className='nc3'>04</h6>
                  <img src ={launch} className="img-fluid" alt="launch"></img>
                </div>
              </div>
              <div className="p4">
                <img src ={line2} className="l5" alt="line"></img>
                <div className='text-boxr c2'>
                  <h5>Grow</h5>
                  <p>We help clients expand their online presence and reach by implementing effective digital marketing strategies and optimizing.</p>
                </div>
                <div className='num-boxr'>
                  <h6 className='nc2'>05</h6>
                  <img src ={grow} className="img-fluid" alt="grow"></img>
                </div>
              </div>
              <div className="p3">
                <img src ={line1} className="l6" alt="line"></img>
                <div className='text-boxr c1'>
                  <h5>Support & Maintain</h5>
                  <p>We provide ongoing technical assistance and maintenance services to ensure clients’ websites and digital assets.</p>
                </div>
                <div className='num-boxr'>
                  <h6 className='nc1'>06</h6>
                  <img src ={support} className="img-fluid" alt="support"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="counter-stats" className="counter-stats" style={{backgroundImage: `url(${projectsbg})` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className='stats'>
                <div className='stats-icon'><img src ={statsicon1} className="img-fluid w-50" alt="finished projects"></img></div>
                <div className="counting" data-count="450">0</div>
                <h5>Finished Projects</h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className='stats'>
                <div className='stats-icon'><img src ={statsicon2} className="img-fluid w-50" alt="happy clients"></img></div>
                <div className="counting" data-count="400">0</div>
                <h5>Happy Clients</h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className='stats'>
                <div className='stats-icon'><img src ={statsicon3} className="img-fluid w-50" alt="working hours"></img></div>
                <div className="counting" data-count="3000">0</div>
                <h5>Working Hours</h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className='stats'>
                <div className='stats-icon'><img src ={statsicon4} className="img-fluid w-50" alt="custom themes"></img></div>
                <div className="counting" data-count="100">0</div>
                <h5>Custom Themes</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='call-to-action'>
        <div className='container'>
          <div className='row cact' style={{backgroundImage: `url(${callaction})` }}>
            <div className='col-lg-4 offset-lg-8'>
              <h3>We are offering 24/7 support</h3>
              <p>We are excellent service in IT solutions, backed by 7+ years of industry experience. With a team of professionals renowned for their expertise. Our highly skilled and dedicated staff ensures that every project is executed with precision and creativity, delivering outstanding results in web development. We take pride in offering 24/7 support, ensuring that our clients' needs are promptly addressed.   </p>
              <Link className="btn btn-action" to="/contact">Get In Touch</Link>
            </div>
          </div>
        </div>
      </section>

      <section className='home-about pt-4 pb-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7 about-frame'>
              <h3>About Us</h3>
              <h6>Who We are</h6>
              <p>Grintech Web Agency is the epitome of excellence in IT solutions, backed by 7+ years of industry experience. With a team of professionals renowned for their expertise, we have earned numerous awards for our exceptional services. Our highly skilled and dedicated staff ensures that every project is executed with precision and creativity, delivering outstanding results in web development, web design, SEO, and digital marketing. We take pride in offering 24/7 support, ensuring that our clients' needs are promptly addressed. Our commitment to transparency is reflected in our fair prices, providing excellent value for our client's investments. Feel free to call us with any questions or queries as we believe in fostering open communication. When it comes to IT solutions, including expertise in React JS, Grintech Web Agency is the go-to choice for businesses worldwide.</p>
              <Link to="/about">Explore <span className="new-get"><Icon icon="bi:arrow-right" /></span></Link>
            </div>
            <div className='col-lg-5'>
              <img src ={homeabout} className="img-fluid home-abt" alt="about"></img>
            </div>
          </div>
        </div>
      </section>
 
      <Infographics />


      <section className='portfolio'>
      <div className='container'> <h3>Our Portfolio</h3> 
      <h6> What we do?</h6>
      <Client2 sites={sites}/>
      <Link to="/our-works" style={{color:"#014072"}}>View all <span className="new-get"><Icon icon="bi:arrow-right" /></span></Link>
      </div>.
      
      </section>

     

      

      <section className='client'>
      <div className='container '> <h3>Our Global Clients</h3> 
      <h6>Business Expansion Scale</h6>
      <div className='row client2'>
       {
        sites.map((item)=>(
          <div id="client2_image" className='col-md-2 col-sm-4  mt-4 mb-4 '>
          <img src={item.logo} className='img-fluid'></img>
          </div>
        )
        )
       }

      </div>
      </div>
      </section>

      <Homeblog/>

      <section className='businesspartner'>
      <div className='container'> <h3>Our Business Partner</h3> 
  
      <h6>Alliances</h6>
   <div className='row '>
 <div className='alldisplayflex'>
        <img src={PartnerImage1} className="img-fluid w-50 " alt="Partner Image 1"/>
   
     
        <img src={PartnerImage2} className="img-fluid w-50" alt="Partner Image 2"/>

   
        <img src={PartnerImage3} className="img-fluid w-50" alt="Partner Image 3"/>


    
        <img src={PartnerImage1} className="img-fluid w-50" alt="Partner Image 4"/>
        </div>
   </div>
     
      </div>.
      
      </section>
     
      <Footer />
    </div>
  )
}

export default Home

