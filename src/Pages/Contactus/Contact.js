import React from 'react'
import { useState } from 'react';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Sidebar from '../../Components/Sideicons/Sidebar'
import "./contact.css";
import { Icon } from '@iconify/react';
import Sliderr from './Sliderr';
import { Link } from 'react-router-dom';
import Socialslide from '../Main-page/Socialslider';
import india from "../../assets/images/Logo/india.png"
import australia from "../../assets/images/Logo/austrailia.png"
import usa from "../../assets/images/Logo/usa.png"
import uk from "../../assets/images/Logo/uk.png"
import ReCAPTCHA from "react-google-recaptcha";
import {WhatsAppWidget} from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import data from "../../Components/country.json"


const Contact = () => {

    const [disabled, setDisabled] = useState(false);
    const [userName, setUserName] = useState('');
    const [messageError, setMessageError] = useState("");

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
    if (value.length >= 50) {
      e.target.setCustomValidity('');
    } else {
      e.target.setCustomValidity('Message should be 50 characters long.');
    }
    setMessageError(value);
  };

    return (

        <div>
            <Header />
            <Sidebar />
            <section>
                <div className='container contact__back'>
                    <div className='row'>
                        <div className='col-lg-8 col-md-12 col-sm-12'>
                            <div className='contact___form'>
                                <form>
                                    <h1 className='text-center mb-3'> <b style={{ fontWeight: "900" }}>Let's Discuss Your <span style={{ color: "#0078d6" }}>Project</span> </b></h1>
                                    <div className='row'>
                                        <div class="mb-3 col-md-6">
                                            <label for="exampleInputEmail1" class="form-label">First Name <span className='star'>*</span></label>
                                            <input type="text" class="form-control"  aria-describedby="emailHelp" name="fullname" id="fullname" value={userName} onInvalid={handleInvalidname} onInput={handleInputname} required/>
                                        </div>

                                        <div class="mb-3 col-md-6">
                                            <label for="exampleInputEmail1" class="form-label">Last Name </label>
                                            <input type="text" class="form-control"  aria-describedby="emailHelp" />
                                        </div>
                                        <label for="exampleInputEmail1" class="form-label">Phone <span className='star'>*</span></label>
                    <div class="phone-input-container mb-3">
                  
  <select id="country-code" className='optionSelection'>
    <option value="+91">+91</option>
    {
        data.map((item)=>(
            <option className='pt-3' value={item.dial_code}>{item.dial_code}</option>
        ))
    }

  </select>
  <input type="tel" name="phone" id="phone" class="form-control form_custom_input" pattern="[0-9]{9,12}" onChange={handlePhoneChange} onInvalid={handleInvalidphone} onInput={handleInputphone} aria-describedby="emailHelp" required/>
  <div id="validation-message"></div>
</div>
                                        <div class="mb-3 col-md-6">
                                            <label for="exampleInputEmail1" class="form-label">Email address <span className='star'>*</span></label>
                                            <input type="email" class="form-control"  aria-describedby="emailHelp" name="email" id="email" onInvalid={handleInvalidemail} onInput={handleInputemail} required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"/>
                                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                        </div>
                                        <div class="mb-3 col-md-6">
                                            <label for="exampleInputPassword1" class="form-label">Website URL </label>
                                            <input type="text" class="form-control" id="exampleInputPassword1" />
                                        </div>
                                    </div>
                                    <select class="form-select " aria-label="Default select example">
                                        <option selected disabled>Looking For...</option>
                                        <option value="1">UI/UX Design</option>
                                        <option value="2">Website Redesign </option>
                                        <option value="3">Development </option>
                                        <option value="3">SEO /SMM </option>
                                    </select>

                                    <div class="mb-3 mt-4">
                                        <label for="exampleFormControlTextarea1" class="form-label">Your Message Here <span className='star'>*</span></label>
                                        <textarea class="form-control"  rows="3" name="message" id="message" value={messageError} onInvalid={handleInvalidmessage} onInput={handleInputmessage} required></textarea>
                                    </div>

                                    

                                    <button type="submit" 
                                        class="btn contact__button">Submit</button>
                                </form>

                            </div>
                        </div>
                        <div className='col-lg-4 col-md-12 col-sm-12'>
                            <div className='contact__sidebar'>
                                <h2> <b>Hate Filling out Forms?</b></h2>
                                <div className='red__line mb-3'></div>
                                <h4>
                                    Request a Quote
                                </h4>
                                <p>
                                    <Link className='contact__sidebar_Link' to="mailto:aarti@grintechwebagency.com">aarti@grintechwebagency.com</Link>
                                </p>
                                <h4>
                                    For Reseller Partner
                                </h4>
                                <p>
                                    <Link className='contact__sidebar_Link' to="mailto:info@grintechwebagency.com">info@grintechwebagency.com</Link>
                                </p>

                                <h4>
                                    HR Queries
                                </h4>
                                <p>
                                    <Link className='contact__sidebar_Link' to="mailto:hr@grintechwebagency.com">hr@grintechwebagency.com</Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='contact__content'>
                            <h2> What do we have for you?</h2>
                            <ul>
                                <li>Our Business Development Manager will connect with you through the contact details you drop on our website.</li>
                                <li>A discussion of the Requirements will be followed by Suggestions on what's Best for your Business.</li>
                                <li>Next, we will Commence Executing the Plans and Suggestions prepared previously.
                                </li>
                            </ul>
                            <div className='contact_ceodetail'>
                                <span>
                                    <i>" The goal of seeing your website on the top of SERPs is what fuels our plans, efforts, and execution."
                                    </i>
                                    <br /><span>(Founder & CEO)</span>
                                </span><br />

                                <Link className='contact__sidebar_Link' to="/">www.Grintechwebagency.com</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container'>
                    <div className='row'>
                        <h1 className='text-center'> <b style={{ fontWeight: "900" }}>Let’s Get to <span style={{ color: "#0078d6" }}>'Talkin'</span> </b></h1>
                        <div className='blue__line'></div>
                    </div>

                    <div className='row mt-3'>
                        <div className='col-lg-3 col-md-6 col-sm-12 contact__items'>
                          
                            <div className='d-flex '><Icon icon="ic:round-person-2" width="48" height="48" /> <div> <h6>Mail for:</h6>
                                <p><Link to="mailto:info@grintechwebagency.com"> Complaint/Registeration</Link></p></div></div>

                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 contact__items'>
                         
                            <p className=''><Icon icon="logos:whatsapp-icon" width="24" height="24" /> <Link to="https://web.whatsapp.com/7888752763">Whatsapp</Link></p>
                            <p><Icon icon="devicon:twitter" width="24" height="24" /> <Link to="">Twitter</Link></p>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 contact__items'>
                          
                            <p className=''><Icon icon="emojione-v1:flag-for-india" width="24" height="24" /> +91 8264420387</p>
                            {/* <p><Icon icon="emojione-v1:flag-for-india" width="24" height="24" /> +91 8264420387</p> */}
                            <p><Icon icon="emojione-v1:flag-for-india" width="24" height="24" /> 0172 4643298</p>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 contact__items'>
                          
                            <h6 className=''> Services: <Link to="mailto:aarti@grintechwebagency.com">info@grintechwebagency.com</Link></h6>
                            <h6> HR: <Link to="mailto:mailto:hr@grintechwebagency.com">: hr@grintechwebagency.com</Link></h6>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container mt-5'>
                    <div className='row '>
                    <WhatsAppWidget phoneNumber="8264420387" message="Hello, how can I help you?" companyName="Grintech Web Agency" />

                        <h1 className='text-center'> <b>Sun Never Sets in Grintech Web Agency </b></h1>
                    </div>

                    <div className='row text-center mt-5'>
                        <div className='col-md-3'>
                            <img className='w-25' src={india}></img>
                            <h5>India</h5>
                            
                        </div>
                        <div className='col-md-3'>
                            <img className='w-25' src={usa}></img>
                            <h5>USA</h5>
                            <p>Lorem ipsum address</p>
                        </div>

                        <div className='col-md-3'>
                            <img className='w-25' src={uk}></img>
                            <h5>Uk</h5>
                            <p>Lorem ipsum address</p>
                        </div>

                        <div className='col-md-3'>
                            <img className='w-25' src={australia}></img>
                            <h5>Austrailia</h5>
                            <p>Lorem ipsum address</p>
                        </div>


                    </div>
                </div>
            </section>
            <Footer />

        </div>
    )
}

export default Contact
