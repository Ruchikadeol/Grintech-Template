import React from 'react'
import "./services.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
 
import CakePHP from "../../assets/images/ServicesImage/cake-php.png";
import Form from "./Form";
import Commonsection from './Commonsection';

const Cakephp = () => {
  return (
    
 <>
 <Header/>
 
 <section className="digitalservices">
     <div className="container">
         <div className="row digitalservices_main">
         <div className="col-lg-7 digitalservices_main_div1">
                
                     <h1>CakePHP</h1>
                     <p >       Harnessing the Power of CakePHP for Efficient and Secure Web Application Development</p>
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
                    <h2> Simplifying Web Development with Rapid Application Framework</h2>
                     <p>CakePHP is an open-source web application framework written in PHP. It follows the Model-View-Controller (MVC) architectural pattern and provides a structured and rapid development framework for building web applications.</p>
                     <p> CakePHP follows the principle of "convention over configuration," which means it has a set of naming conventions and default configurations that help streamline the development process. By adhering to these conventions, developers can quickly build applications without spending excessive time on configuration.</p>
                     <p>CakePHP follows the MVC pattern, separating the application logic into three main components: Models (for data handling and business logic), Views (for presenting data to the user), and Controllers (for handling user requests and managing the flow of the application).</p>
                     <p> CakePHP includes an ORM that simplifies database interactions by mapping database tables to corresponding model objects. This abstraction layer makes it easier to work with databases, perform CRUD operations, define relationships between tables, and handle data validation.</p>
                     <p>CakePHP offers a range of built-in features and functionalities, including form validation, data caching, security measures against common vulnerabilities, routing, localization, and error handling. These features help developers write cleaner and more secure code while reducing the need for external libraries or extensions.</p>
                     <p></p>
                 </div>
             </div>
             <div className="col-lg-6 dev-pass">
                 <img className="img-fluid bdr-rd" src={CakePHP} alt="seo"/>
             </div>
         </div>
     </div>
 </section>

 <Commonsection name="Cake PHP" technology="Developement" classname="blueback" />

 <Footer/>  
 </>


  )
}

export default Cakephp
