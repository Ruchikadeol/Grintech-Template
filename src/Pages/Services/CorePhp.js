import React from 'react'
import "./services.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import CakePHP from "../../assets/images/ServicesImage/core.png";
import Form from "./Form";
import Commonsection from './Commonsection';

const CorePhp = () => {
  return (
    
 <>
 <Header/>
 
 <section className="digitalservices">
     <div className="container">
         <div className="row digitalservices_main">
         <div className="col-lg-7 digitalservices_main_div1">
                
                     <h1>Core PHP</h1>
                     <p >Harnessing the Power of Server-Side Web Development </p>
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
                     <h2>Building Dynamic and Custom Web Applications with Core PHP for Enhanced Functionality and Performance </h2>
                     <p>Core PHP is a server-side scripting language that is widely used for web development. It enables developers to write code that can be executed on the server, generating dynamic web pages in response to user requests. With core PHP, you can perform a wide range of tasks, including database connectivity, form handling, session management, file manipulation, and more. It provides a vast set of functions and libraries that make it flexible and capable of handling various programming needs.</p>
                     <p> Core PHP allows developers to have complete control over the development process, as it does not rely on external frameworks or libraries. It is highly customizable and can be tailored to meet specific project requirements. Core PHP is known for its performance and efficiency, as it directly interacts with the server's resources and does not add any additional layers of abstraction. However, it requires developers to handle security, modularization, and other aspects of the application manually.</p>
                     <p>While core PHP provides a solid foundation for web development, it's worth noting that there are also modern PHP frameworks, such as Laravel, Symfony, and CodeIgniter, that offer additional features, structure, and convenience for building complex web applications. These frameworks build upon core PHP to provide a more organized and standardized approach to development, incorporating concepts like MVC (Model-View-Controller) architecture and modular design.</p>
                
              
                 </div>
             </div>
             <div className="col-lg-6 dev-pass">
                 <img className="img-fluid bdr-rd" src={CakePHP} alt="seo"/>
             </div>
         </div>
     </div>
 </section>

<Commonsection name="Core PHP" technology="Developement" classname="blueback" />

 <Footer/>  
 </>


  )
}

export default CorePhp
