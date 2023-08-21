import React from 'react';
import { Routes, Route, BrowserRouter as Router, ScrollRestoration } from 'react-router-dom';
// import Header from "../src/Components/Header/Header.js";
import About from "./Pages/About/About.js"
// import Sidebar from "./Components/Sideicons/Sidebar.js";
// import Newsletter from "./Components/Newsletter/Newsletter.js";
// import Footer from "./Components/Footer/Footer.js";
import Home from "./Pages/Main-page/Home.js";
import Services from "./Pages/Services/Webservices.js";
import Seoservices from './Pages/Services/Seoservices.js';
import Digitalservices from './Pages/Services/Digitalservices.js';
import Blog from './Pages/BlogPage/Blog.js';
import Singleblog from './Pages/SingleblogPage/Singleblog.js';
import "./App.css";
import Contact from './Pages/Contactus/Contact.js';
import Ourworks from './Pages/OurWorks/Ourworks.js';
import Seowork from './Pages/OurWorks/Seowork.js';
import Htmlcss from './Pages/Services/Htmlcss.js';
import Reactspa from './Pages/Services/Reactspa.js';
import Photoshop from './Pages/Services/Photoshop.js';
import Figma from './Pages/Services/Figma.js';
import Laravel from './Pages/Services/Laravel.js';
import Cakephp from './Pages/Services/Cakephp.js';
import Yii from './Pages/Services/Yii.js';
import Wordpress from './Pages/Services/Wordpress.js';
import Ecommerce from './Pages/Services/Ecommerce.js';
import Javascript from './Pages/Services/Javascript.js';
import Seoservice from "./Pages/Services/Seoservice.js"
import ContentMarketing from './Pages/Services/ContentMarketing.js';
import CodeIgnitor from './Pages/Services/CodeIgnitor.js';
import CorePhp from './Pages/Services/CorePhp.js';
import ScrollToTop from "./ScrollToTop.js"
import Career from './Pages/Career/Career.js';
import Ppc from './Pages/Services/Ppc.js';
import Market from './Pages/Services/Market.js';
import Branding from './Pages/Services/Branding.js';
import Prrm from './Pages/Services/Prrm.js';
import Uiux from './Pages/Services/Uiux.js';
import Gallery from './Pages/Gallery/Gallery.js';
class App extends React.Component {
  render() {

    return (
      <div>
        <Router>
     <ScrollToTop />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/web-services' element={<Services />}></Route>
            <Route path='/seo-services' element={<Seoservices />}></Route>
            <Route path='/digital-services' element={<Digitalservices />}></Route>
            <Route path='/blogs' element={<Blog />}></Route>
            <Route path='/single-blog/:slugid' element={<Singleblog />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/our-works' element={<Ourworks />}></Route>
            <Route path='/seowork' element={<Seowork />}></Route>

            <Route path='/our-services-html-css' element={<Htmlcss />}></Route>
            <Route path='/our-services-react' element={<Reactspa />}></Route>
            <Route path='/our-services-photoshop' element={<Photoshop />}></Route>
            <Route path='/our-services-figma' element={<Figma />}></Route>
            <Route path='/our-services-ui-ux' element={<Uiux />}></Route>
            <Route path='/our-services-laravel' element={<Laravel />}></Route>
            <Route path='/our-services-cakephp' element={<Cakephp />}></Route>
            <Route path='/our-services-codeigniter' element={<CodeIgnitor />}></Route>
            <Route path='/our-services-yii-development' element={<Yii />}></Route>
            <Route path='/our-services-wordpress' element={<Wordpress />}></Route>
            <Route path='/our-services-ecommerce-website' element={<Ecommerce />}></Route>
            <Route path='/our-services-javascript' element={<Javascript />}></Route>


            <Route path='/our-services-seo-smm-smo' element={<Seoservice />}></Route>
            <Route path='/our-services-ppc' element={<Ppc />}></Route>
            <Route path='/our-services-market-research' element={<Market />}></Route>
            <Route path='/our-services-branding' element={<Branding />}></Route>
            <Route path='/our-services-content-writing' element={<ContentMarketing />}></Route>
            <Route path='/our-services-content-pr-rm' element={<Prrm />}></Route>
            <Route path='/careers' element={<Career />}></Route>
            <Route path='/our-services-core-php' element={<CorePhp />}></Route>
            <Route path='/gallery' element={<Gallery />}></Route>
        
            
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;


