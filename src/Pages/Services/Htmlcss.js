import React from 'react'
import "./services.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Commonsection from './Commonsection';
import HTMLCSS from "../../assets/images/ServicesImage/html-css.png";
import Form from "./Form";

const Htmlcss = () => {
  return (
 
    <>
    <Header/>
    
    <section className="digitalservices2">
        <div className="container">
            <div className="row digitalservices_main">
            <div className="col-lg-7 digitalservices_main_div1">
                         
                        <h1>HTML/CSS/BOOTSTRAP</h1>
                        <p >Building Dynamic Web Experiences with HTML, CSS, and Bootstrap: Unleashing the Power of Front-End Development</p>
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
                        <h2>Combining Markup, Styling, and Responsive Frameworks for Modern and Engaging Websites</h2>
                        <p>HTML is the standard markup language used for structuring and presenting content on the web. It provides a set of tags that define the structure and semantic meaning of elements on a web page. With HTML, you can create headings, paragraphs, lists, images, links, forms, tables, and more. It acts as the backbone of web pages, defining the content and organizing the information.</p>
                      
                        <p>CSS is a stylesheet language that works alongside HTML to control the appearance and layout of web pages. It allows you to define styles, such as colors, fonts, sizes, spacing, and positioning, for HTML elements. CSS separates the presentation of a web page from its structure, enabling you to create visually appealing designs. With CSS, you can customize the look and feel of your web pages and create responsive layouts that adapt to different devices and screen sizes.</p>
                        <p>Bootstrap is a popular front-end framework that simplifies web development by providing a collection of pre-designed components, styles, and JavaScript plugins. It is built on HTML, CSS, and JavaScript and offers a responsive grid system, typography, form controls, navigation components, modals, carousels, and more. Bootstrap allows developers to create professional-looking websites quickly and efficiently. It promotes consistency and responsiveness across different devices, saving time and effort in the design and development process.</p>
                        <p>Using HTML, CSS, and Bootstrap together, you can create dynamic and responsive web pages. HTML defines the structure and content, CSS controls the presentation and styling, and Bootstrap offers pre-built components and a responsive grid system for faster development. It's important to have a good understanding of HTML and CSS fundamentals before working with frameworks like Bootstrap to have more control and flexibility over your designs.</p>
                    </div>
                </div>
                <div className="col-lg-6 dev-pass">
                    <img className="img-fluid bdr-rd" src={HTMLCSS} alt="seo"/>
                </div>
            </div>
        </div>
    </section>

    <Commonsection name="HTML/CSS/BOOTSTRAP " technology="Designing" classname="greyback"/>

    <Footer/>  
    </>
  )
}

export default Htmlcss
