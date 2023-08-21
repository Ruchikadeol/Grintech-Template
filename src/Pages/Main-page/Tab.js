import React from 'react'
import arrow1 from "../../assets/images/arrow-right-green1.png";
import arrow2 from "../../assets/images/arrow-down-green1.png";
import ae from "../../assets/images/Icon/GraphicDesignIcon/ae 1.png";
import ai from "../../assets/images/Icon/GraphicDesignIcon/AdobeAi.png";
import figma from "../../assets/images/Icon/GraphicDesignIcon/Figma.png";
import photoshop from "../../assets/images/Icon/GraphicDesignIcon/Photoshop.png";
import xd from "../../assets/images/Icon/GraphicDesignIcon/Adobe_XD.png";
import tabbg from "../../assets/images/tab-bg.webp";
import {Icon} from '@iconify/react';

import html from "../../assets/images/Icon/Webdesign/html-5 1.png";
import css from "../../assets/images/Icon/Webdesign/css 1.png";
import js from "../../assets/images/Icon/Webdesign/js 1.png";
import react from "../../assets/images/Icon/Webdesign/react 1.png";
import bootstrap from "../../assets/images/Icon/Webdesign/boostrap 1.png";
import responsive from "../../assets/images/Icon/Webdesign/responsive 1.png";

import wp from "../../assets/images/Icon/CMS/wordpress 1.png";
import joomla from "../../assets/images/Icon/CMS/joomla 1.png";
import magento from "../../assets/images/Icon/CMS/Magento 1.png";
import drupal from "../../assets/images/Icon/CMS/drupal 1.png";
import woo from "../../assets/images/Icon/CMS/woo-comrc 1.png";

import laravel from "../../assets/images/Icon/PHP/PHP/laravel 1.png";
import codeignator from "../../assets/images/Icon/PHP/PHP/codingnator 1.png";
import yii from "../../assets/images/Icon/PHP/PHP/yii 1.png";
import symphony from "../../assets/images/Icon/PHP/PHP/symphony 1.png";
import corephp from "../../assets/images/Icon/PHP/PHP/service section with out icon.png";
import cakephp from "../../assets/images/Icon/PHP/PHP/cake-php 1.png";

import seo from "../../assets/images/Icon/SEO/SEO 1.png"
import ppc from "../../assets/images/Icon/SEO/ppc 1.png"
import seoaudit from "../../assets/images/Icon/SEO/seo-edit 1.png"
import reputation from "../../assets/images/Icon/SEO/Reputation-Management 1.png"
import smo from "../../assets/images/Icon/SEO/SMO 1.png"
import influencer from "../../assets/images/Icon/SEO/Influencer-Marketing 1.png"

import shopify from "../../assets/images/Icon/Others/shopify 1.png"
import dm from "../../assets/images/Icon/Others/Database-Management 1.png"
import sql from "../../assets/images/Icon/Others/SQL 1.png"
import sanity from "../../assets/images/Icon/Others/Sanity 1.png"
import aws from "../../assets/images/Icon/Others/aws 1.png"
import gcloud from "../../assets/images/Icon/Others/cloud 1.png"
import mysql from "../../assets/images/Icon/Others/myswl 1.png"
import { Link } from 'react-router-dom';

import "./tab.css";























const Tab = () => {
  return (
    <div>
      <section id="home-our-services" className="mt-5" >
        <div className="our-services">
          <div className="container">
            <div className="row">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
             
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-graphic-tab" data-bs-toggle="pill" data-bs-target="#pills-graphic" type="button" role="tab" aria-controls="pills-garphic" aria-selected="true">
                    <h6>Graphic  Designing</h6>
                    <img src={arrow1} className="arrow-first" />
                    <img src={arrow2} className="arrow-first2" />
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                    <h6>Web Designing</h6>
                    <img src={arrow1} className="arrow-first" />
                    <img src={arrow2} className="arrow-first2" />
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-Shopify-tab" data-bs-toggle="pill" data-bs-target="#pills-Shopify" type="button" role="tab" aria-controls="pills-Shopify" aria-selected="true">
                    <h6>CMS</h6>
                    <img src={arrow1} className="arrow-first" />
                    <img src={arrow2} className="arrow-first2" />
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-Magento-tab" data-bs-toggle="pill" data-bs-target="#pills-Magento" type="button" role="tab" aria-controls="pills-Magento" aria-selected="true">
                    <h6>PHP/Framework</h6>
                    <img src={arrow1} className="arrow-first" />
                    <img src={arrow2} className="arrow-first2" />
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-PHP-tab" data-bs-toggle="pill" data-bs-target="#pills-PHP" type="button" role="tab" aria-controls="pills-PHP" aria-selected="true">
                    <h6>Digital Marketing</h6>
                    <img src={arrow1} className="arrow-first" />
                    <img src={arrow2} className="arrow-first2" />
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-Joomla-tab" data-bs-toggle="pill" data-bs-target="#pills-Joomla" type="button" role="tab" aria-controls="pills-Joomla" aria-selected="true">
                    <h6>Others</h6>
                    <img src={arrow1} className="arrow-first" />
                    <img src={arrow2} className="arrow-first2" />
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                  <div className="row">
                    <div className="col-md-5 col-sm-12">
                      <div className="tab-content-box">
                        <h2>Web Designing</h2>
                        <p>The agency specializes in designing and developing attractive and user-friendly websites. They can create custom website designs tailored to your specific needs and preferences.</p>
                        <div className="new-tab-button "><Link to="/our-services-html-css">Explore <span className="new-get"><Icon icon="bi:arrow-right" /></span></Link></div>
                      </div>
                    </div>
                    <div className="col-md-7 col-sm-12">
                      <div className="tab-content-img">
                        <ul className="img-section">
                          <li><img src={html} className="img-fluid" /><p>Html</p></li>
                          <li><img src={css} className="img-fluid" /><p>Css</p></li>
                          <li><img src={js} className="img-fluid" /><p>Javascript</p></li>
                          <li><img src={react} className="img-fluid" /><p>React JS</p></li>
                          <li><img src={bootstrap} className="img-fluid" /><p>Bootstrap</p></li>
                          <li><img src={responsive} className="img-fluid" /><p>Responsive <br /> Design</p></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="pills-graphic" role="tabpanel" aria-labelledby="pills-graphic-tab">
                  <div className="row">
                    <div className="col-md-5 col-sm-12">
                      <div className="tab-content-box">
                        <h2>Graphic Designing</h2>
                        <p>Grintech Web Agency can help you with creating visually appealing designs for various purposes, such as logos, banners, brochures, and other marketing materials.</p>
                        <div className="new-tab-button "><Link to="/our-services-photoshop">Explore <span className="new-get"><Icon icon="bi:arrow-right" /></span></Link></div>
                      </div>
                    </div>
                    <div className="col-md-7 col-sm-12">
                      <div className="tab-content-img">
                        <ul className="img-section">
                        <li><img src={ai} className="img-fluid" /><p>Adobe Ai</p></li>
                          <li><img src={figma} className="img-fluid" /><p>Figma</p></li>
                          <li><img src={ae} className="img-fluid" /><p>After Effect</p></li>
                          <li><img src={photoshop} className="img-fluid" /><p>Adobe  <br /> Photoshop</p></li>
                          <li><img src={xd} className="img-fluid" /><p>Adobe XD</p></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="pills-Shopify" role="tabpanel" aria-labelledby="pills-Shopify-tab">
                  <div className="row">
                    <div className="col-md-5 col-sm-12">
                      <div className="tab-content-box">
                        <h2>CMS</h2>
                        <p>CMS stands for Content Management System. Grintech Web Agency can assist you in implementing a CMS for your website, enabling you to easily manage and update your site's content without requiring technical expertise.</p>
                        <div className="new-tab-button "><Link to="/our-services-wordpress">Explore <span className="new-get"><Icon icon="bi:arrow-right" /></span></Link></div>
                      </div>
                    </div>
                    <div className="col-md-7 col-sm-12">
                      <div className="tab-content-img">
                        <ul className="img-section">
                          <li><img src={wp} className="img-fluid" /><p>Wordpress</p></li>
                          <li><img src={joomla} className="img-fluid" /><p>Joomla</p></li>
                          <li><img src={magento} className="img-fluid" /><p>Magento</p></li>
                          <li><img src={drupal} className="img-fluid" /><p>Drupal</p></li>
                          <li><img src={woo} className="img-fluid" /><p>Woo-Commerce</p></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="pills-Magento" role="tabpanel" aria-labelledby="pills-Magento-tab">
                  <div className="row">
                    <div className="col-md-5 col-sm-12">
                      <div className="tab-content-box">
                        <h2>PHP</h2>
                        <p>PHP is a popular programming language used for web development. Grintech Web Agency has expertise in PHP development and can create dynamic and interactive websites using this language.</p>
                        <div className="new-tab-button "><Link to="/our-services-cakephp">Explore <span className="new-get"><Icon icon="bi:arrow-right" /></span></Link></div>
                      </div>
                    </div>
                    <div className="col-md-7 col-sm-12">
                      <div className="tab-content-img">
                        <ul className="img-section">
                          {/* <li><img src={corephp} className="img-fluid" /><p>Core PHP</p></li> */}
                          <li><img src={laravel} className="img-fluid" /><p>Laravel <br /> Advance</p></li>
                          <li><img src={cakephp} className="img-fluid" /><p>Cake PHP</p></li>
                          <li><img src={codeignator} className="img-fluid" /><p>Codeignator</p></li>
                          <li><img src={yii} className="img-fluid" /><p>Yii</p></li>
                          <li><img src={symphony} className="img-fluid" /><p>Symphony</p></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="pills-PHP" role="tabpanel" aria-labelledby="pills-PHP-tab">
                  <div className="row">
                    <div className="col-md-5 col-sm-12">
                      <div className="tab-content-box">
                        <h2>Digital Marketing</h2>
                        <p>The agency offers digital marketing services to help you promote your business online and reach your target audience effectively. This may include strategies such as search engine optimization (SEO), social media marketing, pay-per-click (PPC) advertising, and more.</p>
                        <div className="new-tab-button "><Link to="/our-services-seo-smm-smo">Explore <span className="new-get"><Icon icon="bi:arrow-right" /></span></Link></div>
                      </div>
                    </div>
                    <div className="col-md-7 col-sm-12">
                      <div className="tab-content-img">
                        <ul className="img-section">
                        <li><img src={seo} className="img-fluid" /><p>SEO</p></li>
                          <li><img src={ppc} className="img-fluid" /><p>PPC</p></li>
                          <li><img src={seoaudit} className="img-fluid" /><p>SEO-Audit</p></li>
                          <li><img src={reputation} className="img-fluid" /><p>Reputation <br />Management</p></li>
                          <li><img src={smo} className="img-fluid" /><p>  SMO</p></li>
                          <li><img src={influencer} className="img-fluid" /><p>Influencer <br /> Marketing</p></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="pills-Joomla" role="tabpanel" aria-labelledby="pills-Joomla-tab">
                  <div className="row">
                    <div className="col-md-5 col-sm-12">
                      <div className="tab-content-box">
                        <h2>Others</h2>
                        <p>The "others" category likely includes additional services provided by Grintech Web Agency. These could vary depending on specific client requirements and may include services like website maintenance, e-commerce development, mobile app development, UI/UX design, and more.</p>
                        <div className="new-tab-button "><Link to="/our-services-content-writing">Explore <span className="new-get"><Icon icon="bi:arrow-right" /></span></Link></div>
                      </div>
                    </div>
                    <div className="col-md-7 col-sm-12">
                      <div className="tab-content-img">
                        <ul className="img-section">
                          <li><img src={shopify} className="img-fluid" /><p>Shopify</p></li>
                          <li><img src={sanity} className="img-fluid" /><p>Sanity</p></li>
                          <li><img src={dm} className="img-fluid" /><p>Database <br /> Management</p></li>
                          <li><img src={mysql} className="img-fluid" /><p>MySQL</p></li>
                          <li><img src={sql} className="img-fluid" /><p>SQL</p></li>
                          <li><img src={gcloud} className="img-fluid" /><p>Google <br /> cloud</p></li>
                          <li><img src={aws} className="img-fluid" /><p>AWS</p></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Tab
