import React from 'react'
import "./services.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import timeicon from "../../assets/images/time-icon.png";
import teamicon from "../../assets/images/team-icon.png";
import focusicon from "../../assets/images/focus-icon.png";
import trusticon from "../../assets/images/trust-icon.png";
import Commonsection from './Commonsection';

import seo from "../../assets/images/ServicesImage/figma.png";
import Form from "./Form";

const Figma = () => {
  return (
    <>
       <Header/>
       
       <section className="digitalservices">
           <div className="container">
               <div className="row digitalservices_main">
               <div className="col-lg-7 digitalservices_main_div1">
                            
                           <h1>Figma / Adobe XD</h1>
                           <p >Figma vs. Adobe XD: Exploring the Best Tools for UI/UX Design</p>
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
                           <h2> Comparing the Features and Capabilities of Figma and Adobe XD for Seamless User Interface and User Experience Design</h2>
                           <p>Figma and Adobe XD are two popular design tools used for creating user interfaces and experiences. Figma is a cloud-based design tool known for its collaboration features, allowing multiple designers to work on the same project simultaneously. It operates entirely in the cloud, which means you can access your designs from any device with an internet connection. Figma also offers built-in prototyping capabilities and a component-based design system, making it easy to create interactive prototypes and maintain consistency across designs.</p>
                        
                           <p>On the other hand, Adobe XD is a design and prototyping tool that is part of the Adobe Creative Cloud suite. It integrates seamlessly with other Adobe tools, such as Photoshop and Illustrator, allowing designers to import and export assets between applications. Adobe XD offers robust prototyping features with advanced animations and microinteractions. It also supports plugins, enabling designers to extend its functionality and enhance their workflow. Adobe XD also facilitates the creation of design systems, making it easier to maintain reusable design assets and styles.</p>
                           <p>Ultimately, the choice between Figma and Adobe XD depends on personal preference, team collaboration needs, and specific project requirements. Both tools have their strengths and are widely used by designers, so it's recommended to try out both and determine which one suits your workflow and preferences better.</p>
                   </div>
                       </div>
                   <div className="col-lg-6 dev-pass">
                       <img className="img-fluid bdr-rd" src={seo} alt="seo"/>
                   </div>
               </div>
           </div>
       </section>

       
    <Commonsection name="Figma / Adobe XD " technology="Designing" classname="blueback"/>
       <Footer/>  
       </>
   
   

  )
}

export default Figma
