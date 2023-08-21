import React from "react";
import newsteam from "../../assets/images/staff-meeting.webp";
import "./newsletter.css";

export default function Newsletter(){
   return(
      <>
      <section className='newsletter'>
         <div className='container'>
            <div className='row news-frame px-0'>
               <div className='col-lg-7 col-md-7 news-text-frame'>
                  <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                  <form class="row pt-2">
                     <div class="col-lg-8">
                        <input type="text" class="form-control" id="email" placeholder="Your email address..."/>
                     </div>
                     <div class="col-lg-4">
                        <button type="submit" class="btn quote-btn mb-3">Get a Quote</button>
                     </div>
                  </form>
                  <p>Get a question? <a className="contact-text" href="#">Contact Us</a></p>
               </div>
               <div className='col-lg-5 col-md-5 px-0 news-img-frame'>
                  <img className="img-fluid news-img" src={newsteam} alt="staff"/>
                  <div className="news-caption">
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
      </>
   )
}