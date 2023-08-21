import React from 'react'
import { Link } from "react-router-dom";
import './header.css';
import logo from "../../assets/images/mainlogo.png";
import { Icon } from '@iconify/react';

const Header = () => {
    return (

        <section id="header">
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <a className="navbar-brand fw-bold" href="#">
                        <Link to="/">   <img src={logo} class="img-fluid main_logo" alt='logo' /></Link>
                    </a>

                    <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="fa fa-bars"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">


                           

                            <li className="nav-item">
                                <Link to="/about" className="nav-link" >About</Link>
                            </li>



                            <li className="nav-item dropdown">
                                <a className="nav-link dropdownmenu" aria-expanded="false">
                                    Our Services
                                    <div className='submenuu'>
                                        <div className='row '>
                                            <div className='col-md-4 dropdownmenucol'>
                                                <span> Design </span>
                                                <div className='underline'></div>
                                                <br />

                                                <Link to="/our-services-ui-ux">UI/UX Design</Link>
                                                <Link to="/our-services-photoshop"> Photoshop / AI</Link>
                                                <Link to="/our-services-figma">Figma / Adobe XD</Link>
                                                <Link to="/our-services-html-css"> HTML5/CSS3/BOOTSTRAP </Link>
                                                <Link to="/our-services-javascript">VUE JS</Link>
                                                <Link to="/our-services-react">React JS</Link>
                                            </div>

                                            <div className='col-md-4 dropdownmenucol'>
                                                <span> Development </span>
                                                <div className='underline'></div>
                                                <br />
                                                <Link to="/our-services-core-php">Core PHP</Link>
                                                <Link to="/our-services-laravel">Laravel (9, 10)</Link>
                                                <Link to="/our-services-cakephp">Cakephp</Link>

                                                <Link to="/our-services-yii-development"> Ci, Yii Framework</Link>
                                                <Link to="/our-services-wordpress">Wordpress Development</Link>
                                                <Link to="/our-services-ecommerce-website">WooCommerce, eCommerce</Link>

                                                <Link to="/our-services-codeigniter">Shopify / ASP .NET</Link>
                                            </div>

                                            <div className='col-md-4 dropdownmenucol'>
                                                <span> Digital Marketing </span>
                                                <div className='underline'></div>
                                                <br />
                                                <Link to="/our-services-seo-smm-smo">SEO / SMM / SMO</Link>
                                                <Link to="/our-services-ppc">Pay Per Click</Link>
                                                <Link to="/our-services-market-research">Market Research</Link>
                                                <Link to="/our-services-branding">Branding</Link>
                                                <Link to="/our-services-content-pr-rm">PR/ RM  </Link>
                                                <Link to="/our-services-content-writing">Content Writing</Link>
                                            </div>



                                        </div>
                                    </div>
                                </a>


                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/our-works">Portfolio</Link>
                            </li>



                            <li className="nav-item">
                                <Link className="nav-link" to="/blogs"> Blogs</Link>
                            </li>



                            <li className="nav-item">
                                <Link className="nav-link" to="/careers">Career</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/gallery">Gallery</Link>
                            </li>
                            
                        </ul>
                        <form className="d-flex">
                            <Link to="/contact"> <button type="button" class="btn btn-contact">Contact Us</button></Link>
                        </form>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Header
