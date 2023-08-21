import React from 'react'
import "./services.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";


import Commonsection from "./Commonsection";

import seo from "../../assets/images/ServicesImage/e-coomerce-develop.png";
import Form from "./Form";

const Ecommerce = () => {
  return (
    
 <>
 <Header/>
 
 <section className="digitalservices2">
     <div className="container">
         <div className="row digitalservices_main">
         <div className="col-lg-7 digitalservices_main_div1">
                   
                     <h1>E-commerce-website</h1>
                     <p >Harnessing the Features and Functionality of Woo Commerce for Seamless Online Selling and Business Growth.</p>
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
                     <h2>Woo Commerce: Building Powerful E-commerce Websites with WordPress</h2>
                     <p>Ecommerce development using WooCommerce is a popular choice for businesses looking to sell products online. WooCommerce makes it easy and affordable to sell any product and service on your website. It allows you to sell digital and physical products, take secure payments, manage inventory, and sort all your taxes automatically.WooCommerce is an open-source e-commerce plugin for WordPress. It is designed for small to large-sized online merchants using WordPress.</p>
                   <p>WooCommerce provides a wide range of features and tools for selling products or services online. It allows you to set up a product catalog, manage inventory, configure shipping and tax options, accept various payment methods, and customize the appearance of your online store. It also provides extensions and integrations for additional functionalities like subscriptions, memberships, bookings, and more.</p>
                   <p>With WooCommerce, you can create a fully functional online store, whether you're selling physical products, digital downloads, or even running a dropshipping business. It is highly customizable, offering various themes and design options, as well as the ability to extend its functionality through plugins.</p>
                   <p>Overall, WooCommerce is a flexible and powerful e-commerce solution for WordPress websites, enabling individuals and businesses to establish and manage their online stores effectively.</p>
                 </div>
             </div>
             <div className="col-lg-6 dev-pass">
                 <img className="img-fluid bdr-rd" src={seo} alt="seo"/>
             </div>
         </div>
     </div>
 </section>
 
 <Commonsection name="E-commerce / Woo Commerce" technology="Developement" classname="greyback" />
 <Footer/>  
 </>


  )
}

export default Ecommerce
