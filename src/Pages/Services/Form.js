
import React from 'react'
import { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from 'react';
import data from "../../Components/country.json"
const Form = () => {
    const form = useRef();
    const [message, setMessage] = useState("")
    const [userName, setUserName] = useState('');
    const [messageError, setMessageError] = useState("");

    const handleChange = (event) => {
        event.preventDefault()
        setMessage("Yayy!! Message Sent , Our Team will Contact you soon.")
    }
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
    event.target.setCustomValidity('Message cannot be left blank');
  };

  const handleInputmessage = (e) => {
    const value = e.target.value;
    if (value.length >= 20) {
      e.target.setCustomValidity('');
    } else {
      e.target.setCustomValidity('Message should be 20 characters long.');
    }
    setMessageError(value);
  };




    return (
        <div className='hover_form'>
            <form ref={form} onSubmit={handleChange}>

                <div className='row'>
                    <div class="mb-3 col-md-12 col-sm-12">
                        {/* <label for="exampleInputEmail1" class="form-label">Full Name <span className='star'>*</span></label> */}
                        <input type="text" placeholder='FullName...' name="fullname" id="fullname" value={userName} onInvalid={handleInvalidname} onInput={handleInputname} class="form-control form_custom_input"  aria-describedby="emailHelp"  required/>
                    </div>
                   

                    <div class="phone-input-container mb-3">
  <select className='optionSelection' id="country-code">
    <option value="+91">+91</option>
    {
        data.map((item)=>(
            <option className='pt-3' value={item.dial_code}>{item.dial_code}</option>
        ))
    }

  </select>
  <input type="tel" placeholder='Phone...' name="phone" id="phone" class="form-control form_custom_input" pattern="[0-9]{9,12}" onChange={handlePhoneChange} onInvalid={handleInvalidphone} onInput={handleInputphone} aria-describedby="emailHelp" required/>
  <div id="validation-message"></div>
</div>

                    <div class="mb-3 col-md-12 col-sm-12">
                        {/* <label for="exampleInputEmail1" class="form-label">Email address <span className='star'>*</span></label> */}
                        <input type="email" placeholder='Email...'  class="form-control form_custom_input"  aria-describedby="emailHelp" name="email" id="email" onInvalid={handleInvalidemail} onInput={handleInputemail} required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3 col-md-12 col-sm-12">

                        <select class="form-select example2" aria-label="Default select example" id="select" name="select" required>
                            <option selected disabled>Looking For...</option>
                            <option value="1">UI/UX Design</option>
                            <option value="2">Website Redesign </option>
                            <option value="3">Development </option>
                            <option value="3">SEO /SMM </option>
                        </select>
                    </div>
                </div>

                <div class="mb-3 mt-4">
                    {/* <label for="exampleFormControlTextarea1" class="form-label">Question/ Requirement</label> */}
                    <textarea class="form-control form_custom_input"   rows="2" placeholder='Question/ Requirement' name="message" id="message" value={messageError} onInvalid={handleInvalidmessage} onInput={handleInputmessage} required></textarea>
                </div>

                <div className='row'>
                    <div className='col-md-12 col-sm-12 col-lg-6'>
                        <button type="submit" class="btn form_button" style={{ backgroundColor: "#177a0e", color: "white" }}>Get A Quote</button>
                    </div>

                    <div className='col-md-12 col-sm-12 col-lg-6'>

                        <a href='https://www.upwork.com/freelancers/~01bb68f80af91ff72f' target='_blank' class="btn form_button" style={{ backgroundColor: "#177a0e", color: "white" }}>Hire us on upwork</a>
                    </div>
                </div>
                <p style={{ fontSize: "14px", color: "#014072" }}> {message} </p>
            </form>
        </div>
    )
}

export default Form


