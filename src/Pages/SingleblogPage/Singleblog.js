import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Sidebar from '../../Components/Sideicons/Sidebar';
import about from "../../assets/images/single-blog.png";
import aboutmob from "../../assets/images/single-blog-mob.png";
import "./singleblog.css";
import sideimage from "../../assets/images/close-up-young-business-person-doing-internship 1.png"
import Relatedpost from '../BlogPage/Relatedpost';
import Related from "../../assets/images/Rectangle 99.png";
import BlockContent from '@sanity/block-content-to-react';
import sanityClient from '../../sanityClient';
import { useRef } from 'react';
const Singleblog = () => {
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);
  const form = useRef();
  const [userName, setUserName] = useState('');
  const [messageError, setMessageError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const query = '*[_type == "post"]';

      try {
        const result = await sanityClient.fetch(query);
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const handleChange = (event) => {
    event.preventDefault();
    setMessage("Yayy!! Message Sent, Our Team will Contact you soon.");
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
      <section className='singleblogback'>
        <h2>Blogs</h2>
      </section>

      <section className='Single_blog_content'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-md-12 col-sm-12'>
              {data.map((item, index) => {
                if (localStorage.getItem('itemId') == index) {
                  return (
                    <div className='container singleblog' key={index}>
                      <div className='row'>
                        <div className='col-md-12'>
                          <h2 className='text-center'><b>{item.title}</b></h2>
                          <BlockContent
                            blocks={item.body}
                            projectId={'m6x5ko6c'} // Replace with your Sanity project ID
                            dataset={'production'} 
                            className="newcontent"// Replace with your Sanity dataset name
                          />
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>

            <div className='stickyformcontainer col-lg-4 col-md-12 col-sm-12'>
              <form id="sticky">
                <div className='singleblog_form'>
                  <form className='form_single_blog' onSubmit={handleChange}>
                    <div className='row'>
                      <div class="mb-3 col-md-12 col-sm-12">
                        <input type="text" placeholder='FullName...' class="form-control form_custom_input" aria-describedby="emailHelp" name="fullname" id="fullname" value={userName} onInvalid={handleInvalidname} onInput={handleInputname} required />
                      </div>
                      <div class="phone-input-container mb-3">
                        <select id="country-code">
                          <option value="+91">+91</option>
                          {
                            data.map((item) => (
                              <option className='pt-3' value={item.dial_code}>{item.dial_code}</option>
                            ))
                          }

                        </select>
                        <input type="tel" placeholder='Phone...' name="phone" id="phone" class="form-control form_custom_input" pattern="[0-9]{9,12}" onChange={handlePhoneChange} onInvalid={handleInvalidphone} onInput={handleInputphone} aria-describedby="emailHelp" required />
                        <div id="validation-message"></div>
                      </div>
                      <div class="mb-3 col-md-12 col-sm-12">
                        <input type="email" placeholder='Email...' class="form-control form_custom_input" aria-describedby="emailHelp" name="email" id="email" onInvalid={handleInvalidemail} onInput={handleInputemail} required />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                      </div>
                      <div class="mb-3 col-md-12 col-sm-12">
                        <select class="form-select example2" aria-label="Default select example " required>
                          <option selected disabled>Looking For...</option>
                          <option value="1">UI/UX Design</option>
                          <option value="2">Website Redesign</option>
                          <option value="3">Development</option>
                          <option value="3">SEO /SMM</option>
                        </select>
                      </div>
                    </div>
                    <div class="mb-3 mt-4">
                      <textarea class="form-control form_custom_input" rows="2" placeholder='Question/ Requirement' name="message" id="message" onInvalid={handleInvalidmessage} onInput={handleInputmessage} required></textarea>
                    </div>
                    <div className='row'>
                      <div className='col-md-12 col-sm-12 col-lg-12'>
                        <button type="submit" class="btn form_button" style={{ backgroundColor: "#177a0e", color: "white" }}>Get A Quote</button>
                      </div>
                      <div className='col-md-12 col-sm-12 col-lg-12'>
                        <a href='https://www.upwork.com/freelancers/~01bb68f80af91ff72f' target='_blank' class="btn form_button" style={{ backgroundColor: "#177a0e", color: "white" }}>Hire us on upwork</a>
                      </div>
                    </div>
                    <p style={{ fontSize: "14px", color: "#014072" }}> {message} </p>
                  </form>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Singleblog;
