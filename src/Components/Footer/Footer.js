import React, { useEffect } from "react";
import './footer.css';
import footerbg from '../../assets/images/footer-banner.webp';
import flogo from "../../assets/images/mainlogowhite1.png";
import { Icon } from '@iconify/react';
import $ from "jquery";
import { Link } from "react-router-dom";
const Footer = () => {

    useEffect(()=>{
        $('.counting').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            
            $({ countNum: $this.text()}).animate({
              countNum: countTo
            },
          
            {
          
              duration: 3000,
              easing:'linear',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
             
              }
          
            });  
            
          
          });

          $(".circle_percent").each(function() {
            var $this = $(this),
                $dataV = $this.data("percent"),
                $dataDeg = $dataV * 3.6,
                $round = $this.find(".round_per");
            $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");	
            $this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
            $this.prop('Counter', 0).animate({Counter: $dataV},
            {
                duration: 2000, 
                easing: 'swing', 
                step: function (now) {
                    $this.find(".percent_text").text(Math.ceil(now)+"%");
                }
            });
            if($dataV >= 51){
                $round.css("transform", "rotate(" + 360 + "deg)");
                setTimeout(function(){
                    $this.addClass("percent_more");
                },1000);
                setTimeout(function(){
                    $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
                },1000);
            } 
        });
    })

    return (
    <>
      <section className="footer pt-5 pb-4" style={{backgroundImage: `url(${footerbg})` }}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <Link className="navbar-brand fw-bold" to="#">
                        <img src={flogo} class=" main_logo img-fluid" alt="footer logo"/>
                    </Link>
                </div>
                <div className="col-lg-12 text-center">
                    <div className="footer-links">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About us</Link></li>
                            <li><Link to="/our-works">Our Works</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/blogs">Blogs</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row border-top address-bar">
                <div className="col-lg-4">
                    <span className="ficon"><Icon icon="material-symbols:location-on-outline-rounded" width="30" /></span>
                    <span>905/1B, 9th Floor, Bestech Business Tower Sector 66</span>
                </div>
                <div className="col-lg-3">
                    <span className="ficon"><Icon icon="material-symbols:phone-in-talk" width="30" /></span>
                    <span><Link to="tel:+91 - 9876543210">+91 - 8264420387</Link></span>
                </div>
                <div className="col-lg-3">
                    <span className="ficon"><Icon icon="ph:envelope-simple" width="30" /></span>
                    <span><Link to="mailto:info@grintechwebagency.com">info@grintechwebagency.com</Link></span>
                </div>
                <div className="col-lg-2 text-lg-end">
                    <ul className="f-links">
                        <li><Link to="https://www.facebook.com/Grintechwebagency/" target='_blank'><Icon icon="typcn:social-facebook" width="25" /></Link></li>
                        <li><Link to="https://in.linkedin.com/company/grin-tech-web-agency" target="_blank"><Icon icon="typcn:social-linkedin" width="25" /></Link></li>
                        <li><Link to="https://www.instagram.com/grintechwebagency/" target="_blank"><Icon icon="typcn:social-instagram" width="25" /></Link></li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      <section className="footer-bottom">
        <div className="container">
            <div className="row">
                <p>© GRINTECH WEB AGENCY 2023. ALL RIGHTS RESERVED.</p>
            </div>
        </div>
      </section>
    </>
    )
}

export default Footer
