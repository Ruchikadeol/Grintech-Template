import React from 'react'
import "./services.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Commonsection from './Commonsection';

import seo from "../../assets/images/ServicesImage/photoshop.png";
import Form from "./Form";

const Photoshop = () => {
  return (
  

 <>
 <Header/>
 
 <section className="digitalservices2">
     <div className="container">
         <div className="row digitalservices_main">
         <div className="col-lg-7 digitalservices_main_div1">
                  
                     <h1>Adobe Photoshop/ Adobe Illustrator</h1>
                     <p >Empowering Visual Creativity with Photoshop and Adobe Illustrator: Unleashing the Potential of Graphic Design </p>
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
                     <h2>Harnessing the Power of Image Editing and Vector Design for Stunning Visual Communication </h2>
                     <p>Photoshop is primarily used for image editing, retouching, and manipulation. It is commonly used to edit and enhance photographs, create digital artwork, and design graphics for web and print. While Illustrator is a vector graphics editor designed for creating scalable and resolution-independent artwork. It is commonly used for creating logos, icons, illustrations, typography, and other graphics that require precision and scalability.</p>
                     <p>Photoshop provides a wide range of tools and features for image editing, including layers, filters, selection tools, masking, color correction, and various special effects. It also supports non-destructive editing, allowing users to make changes without permanently altering the original image and Illustrator focuses on vector-based design, allowing users to create and manipulate shapes, paths, and curves. It provides tools for drawing, painting, and creating complex illustrations. Illustrator supports features like anchor points, bezier curves, gradients, and a wide range of typography tools. The artwork created in Illustrator can be scaled to any size without losing quality.</p>
                   <p>While Photoshop and Illustrator have distinct purposes, they can also complement each other in various design workflows. For example, designers may create the initial concept and illustrations in Illustrator and then import them into Photoshop for further editing, composition, and image manipulation. Both software applications are widely used by graphic designers, digital artists, photographers, and other professionals in the creative industry to bring their ideas to life.</p>
                 </div>
             </div>
             <div className="col-lg-6 dev-pass">
                 <img className="img-fluid bdr-rd" src={seo} alt="seo"/>
             </div>
         </div>
     </div>
 </section>

 <Commonsection name="Adobe Photoshop/ Adobe Illustrator" technology="Designing" classname="greyback" />


 <Footer/>  
 </>

  )
}

export default Photoshop
