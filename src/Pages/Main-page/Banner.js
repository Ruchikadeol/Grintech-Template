import React from 'react'
import { useState } from 'react';
import "./home.css";
import homebanner from "../../assets/images/mainbanner.jpg";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from 'react';
const Banner = () => {

  const form = useRef();
  const [message, setMessage] = useState("")
  const [userName, setUserName] = useState('');
  const [messageError, setMessageError] = useState("");
  const [disabled, setDisabled] = useState(false);
  function onChangecaptcha() {
    setDisabled(true);
  }


// -----------------------------------------------------Phone Validations------------------------------------------------------------------------------------

const handlePhoneChange = (e) => {
  const sanitizedValue = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
  e.target.value = sanitizedValue;
};

const handleInvalidphone = (event) => {
  event.target.setCustomValidity('Enter valid phone number');
};

const handleInputphone = (event) => {
  event.target.setCustomValidity('');
};

// -------------------------------------------------------Name Validations---------------------------------------------------------------------------------------------

const handleInvalidname = (event) => {
  event.target.setCustomValidity('Name must be more than 3 characters.');
};

const handleInputname = (e) => {
  const value = e.target.value;
  if (value.length >= 3) {
    e.target.setCustomValidity('');
  } else {
    e.target.setCustomValidity('Name must be at least 3 characters long');
  }
  setUserName(value);
};

// -------------------------------------------------------Email Validations---------------------------------------------------------------------------------------------

const handleInvalidemail = (event) => {
event.target.setCustomValidity('Enter Valid Email Address');
};

const handleInputemail = (event) => {
event.target.setCustomValidity('');
};

//-----------------------------------------------------------------------------------------Message Validations-------------------------------------------------------------------------

const handleInvalidmessage = (event) => {
event.target.setCustomValidity('Message should be 50 characters long.');
};

const handleInputmessage = (e) => {
const value = e.target.value;
if (value.length >= 50) {
e.target.setCustomValidity('');
} else {
e.target.setCustomValidity('Message should be 50 characters long.');
}
setMessageError(value);
};

  return (
    <div>
      <section id="home-banner" style={{ backgroundImage: `url(${homebanner})` }}>

        <div className="banner-content container">
          <h1>Branding<span style={{ color: "#23C014" }}> Promote</span> your Brand <span style={{ color: "#23C014" }}>with us</span></h1>
          <p>Grintech Web Agency is a reputable IT solution provider with over 10 years of experience in delivering top-notch services. With a team of highly skilled professionals, we strive to provide the best IT solutions to businesses worldwide. Our commitment to excellence has earned us recognition as an award-winning company in the industry.</p>
          <div className="button">
            <button type="button" class="btn start-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Start A Project</button>
          </div>
        </div>
      </section>
      <div className="mouse-effect">
        <p>Explore</p>
        {/* <img src ={mouseeffect} className="img-fluid"></img> */}
        <div class="mouse">
          <div class="roll"></div>
          <div class="rollshadow"></div>
        </div>
      </div>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            {/* <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div> */}
            <div class="modal-body modal-body-custom">
              <form action="?" method="POST">
                <div className='d-flex justify-content-between '>
                  <h4 className='text-center mb-3'> <b style={{ fontWeight: "900" }}>Let's Discuss Your <span style={{ color: "#177a0e" }}>Project</span> </b></h4> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div className='row'>
                  <div class="mb-3 col-md-6 col-sm-12">
                    <label for="exampleInputEmail1" class="form-label">Full Name <span className='star'>*</span></label>
                    <input type="text" name="name2" id="name2" value={userName} onInvalid={handleInvalidname} onInput={handleInputname} class="form-control form_custom_input"  aria-describedby="emailHelp"  required/>
                  </div>

                  <div class="mb-3 col-md-6 col-sm-12">
                    <label for="exampleInputEmail1" class="form-label">Phone</label>
                    <input type="tel" placeholder='Phone...' name="phone" id="phone" class="form-control form_custom_input" pattern="[0-9]{9,12}" onChange={handlePhoneChange} onInvalid={handleInvalidphone} onInput={handleInputphone} aria-describedby="emailHelp" required/>
                  </div>
                  <div class="mb-3 col-md-6 col-sm-12">
                    <label for="exampleInputEmail1" class="form-label">Email address <span className='star'>*</span></label>
                    <input type="email" class="form-control"  aria-describedby="emailHelp" name="email" id="email" onInvalid={handleInvalidemail} onInput={handleInputemail} required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                  </div>

                  <div class="mb-3 col-md-6 col-sm-12">
                    <label for="exampleInputPassword1" class="form-label">Website URL </label>
                    <input type="text" class="form-control" id="exampleInputPassword1" />
                  </div>
                </div>
                <select class="form-select" aria-label="Default select example">
                  <option selected disabled>How we can help you? </option>
                  <option value="1">Seo/SMM</option>
                  <option value="2">Web Development</option>
                  <option value="3">Web Design</option>
                </select>

                <div class="mb-3 mt-4">
                  <label for="exampleFormControlTextarea1" class="form-label">Your Message Here</label>
                  <textarea class="form-control"  rows="2" name="message" id="message" value={messageError} onInvalid={handleInvalidmessage} onInput={handleInputmessage} required></textarea>
                </div>
                <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={onChangecaptcha}
                />
               
                <button type="submit" class="btn " disabled={!disabled} style={{ backgroundColor: "#177a0e", color: "white" }}>Submit</button>
              </form>
            </div>

          </div>
        </div>
      </div>


    </div>
  )
}

export default Banner



