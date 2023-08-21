import React from 'react'
import Header from '../../Components/Header/Header'
import "./seoservices.css";
import Footer from '../../Components/Footer/Footer';
import { Icon } from '@iconify/react';
import image from "../../assets/images/seo_page.jpg"
import Form from './Form';
import { useState } from 'react';

const Seoservices = () => {

    const [number1, setNumber1] = useState()
    const [number2, setNumber2] = useState()
    const [number3, setNumber3] = useState()
    const [number4, setNumber4] = useState()

    useState(() => {
        let counter = 0;
        setInterval(() => {
            if (counter == 65) {
                clearInterval();
            }
            else {
                counter = counter + 1;
            }
            setNumber1(counter)
        }, 30)
    }, [number1])

    useState(() => {
        let counter = 0;
        setInterval(() => {
            if (counter == 70) {
                clearInterval();
            }
            else {
                counter = counter + 1;
            }
            setNumber2(counter)
        }, 28)
    }, [number2])

    useState(() => {
        let counter = 0;
        setInterval(() => {
            if (counter == 75) {
                clearInterval();
            }
            else {
                counter = counter + 1;
            }
            setNumber3(counter)
        }, 25)
    }, [number3])



    useState(() => {
        let counter = 0;
        setInterval(() => {
            if (counter == 85) {
                clearInterval();
            }
            else {
                counter = counter + 1;
            }
            setNumber4(counter)
        }, 20)
    }, [number4])

    return (
        <div className=''>
            <Header />
            <section className='seo'>
                <div className='container'>
                    <div className='row seo_main'>
                        <div className='col-md-6 div1'>
                            <span>Affordable SEO Services</span>
                            <h1>A Fresh Approach to Modern SEO Services</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quos fuga, earum aut atque expedita repellendus?</p>
                        </div>

                        <div className='col-md-6 div2'>
                            <Form />
                        </div>

                    </div>
                </div>
            </section>



            <section style={{ backgroundColor: "#f1f2f3" }}>
                <div className='container'>
                    <div className='row seo_btn_section'>
                        <div className='col-lg-3 seo_btn_section_div'>

                            <Icon icon="emojione-monotone:telephone" color="#177a0e" width="96" height="96" />
                            <p><b>Call US at:</b><br />8264420387</p>
                        </div>
                        <div className='col-lg-6 seo_btn_section_div1'>
                            <span>Stop losing business to your competitors...</span>
                            <h1>Measure Your Website's Performance</h1>

                        </div>
                        <div className="col-lg-3 ">
                        <Icon icon="icon-park-twotone:seo" color="green" width="132" height="132" />
                        </div>
                    </div>
                </div>
            </section>



            <section className='mt-5'>
                <div className='container'>
                    <div className='row text-center'>
                        <h1>Why SEO is so important?</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam ducimus eaque quidem officia consectetur suscipit nemo molestias corporis, officiis repellat obcaecati quae sequi provident blanditiis cumque dolorem consequatur accusantium recusandae laboriosam ab ipsam hic temporibus. Asperiores sunt consequuntur consectetur sequi repellat! Voluptatibus reprehenderit temporibus commodi beatae excepturi, cupiditate ducimus. Odit, mollitia earum eveniet veritatis accusamus praesentium incidunt consequatur possimus accusantium.</p>
                    </div>
                </div>
            </section>

            <section className='mt-5'>
                <div className='container'>
                    <div className='row '>
                        <h1>Lorem Ipsum?</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam ducimus eaque quidem officia consectetur suscipit nemo molestias corporis, officiis repellat obcaecati quae sequi provident blanditiis cumque dolorem consequatur accusantium recusandae laboriosam ab ipsam hic temporibus. Asperiores sunt consequuntur consectetur sequi repellat! Voluptatibus reprehenderit temporibus commodi beatae excepturi, cupiditate ducimus. Odit, mollitia earum eveniet veritatis accusamus praesentium incidunt consequatur possimus accusantium.</p>
                    </div>




                </div>
            </section>

            <section className='how-we-can-help'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src={image} className='img-fluid'></img>
                        </div>
                        <div className='col-md-6'>


                            <span> <b>#Best SEO Company to Increase your Sales & Revenue</b></span>
                            <h1>How we Can <span style={{ color: "#177a0e" }}>Help</span> You?</h1>
                            <div>
                                <p><Icon icon="material-symbols:check" color="#177a0e" width="24" height="24" /> Rank #1 in Search Engines.</p>
                                <p><Icon icon="material-symbols:check" color="#177a0e" width="24" height="24" /> Increase Trust & Credibility with your Audience.</p>
                                <p><Icon icon="material-symbols:check" color="#177a0e" width="24" height="24" /> Bring More Visitors to your Website.</p>
                                <p><Icon icon="material-symbols:check" color="#177a0e" width="24" height="24" /> Stand out from the Competition</p>
                                <div className='row text-center mt-5 experience-seo'>
                                    <div className='col-md-4'>
                                        <p><b>10+</b></p>
                                        <p>Years of experience</p>
                                    </div>
                                    <div className='col-md-4'>
                                        <p><b>10+</b></p>
                                        <p>Years of experience</p>
                                    </div>
                                    <div className='col-md-4'>
                                        <p><b>10+</b></p>
                                        <p>Years of experience</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='seo_roundslider'>
                <div className='container'>
                    <div className='row pb-3'>
                        <h1>60,000+ Searches Happen Each Second</h1>
                        <p>In 2023, SEO is not about ranking for popular terms; it’s about being found when it matters most. Our skilled search engine optimization experts carefully research the right keywords for your business, ensuring you are gaining qualified traffic that converts to your bottom line.</p>
                    </div>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='skill'>
                                <div className='outer_box'>
                                    <div className='inner_box'>
                                        <div id='number1'>
                                            <span>{number1}%</span>
                                        </div>
                                    </div>
                                </div>

                                <svg className='seosvg' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                    <defs>
                                        <linearGradient id="GradientColor">
                                            <stop offset="0%" stop-color="#177a0e" />
                                            <stop offset="100%" stop-color="#177a0e" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                                </svg>
                            </div>

                            <p>Lorem ipsum text is a dummy text</p>
                        </div>

                        <div className='col-md-3'>
                            <div className='skill'>
                                <div className='outer_box'>
                                    <div className='inner_box'>
                                        <div id='number2'>
                                        <span>{number2}%</span>
                                        </div>
                                    </div>
                                </div>

                                <svg className='seosvg' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                    <defs>
                                        <linearGradient id="GradientColor2">
                                            <stop offset="0%" stop-color="#177a0e" />
                                            <stop offset="100%" stop-color="#177a0e" />
                                        </linearGradient>
                                    </defs>
                                    <circle className='circle2' cx="80" cy="80" r="70" stroke-linecap="round" />
                                </svg>
                            </div>
                            <p>Lorem ipsum text is a dummy text</p>
                        </div>

                        <div className='col-md-3'>
                            <div className='skill'>
                                <div className='outer_box'>
                                    <div className='inner_box'>
                                        <div id='number3'>
                                        <span>{number3}%</span>
                                        </div>
                                    </div>
                                </div>

                                <svg className='seosvg' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                    <defs>
                                        <linearGradient id="GradientColor3">
                                            <stop offset="0%" stop-color="#177a0e" />
                                            <stop offset="100%" stop-color="#177a0e" />
                                        </linearGradient>
                                    </defs>
                                    <circle className='circle3' cx="80" cy="80" r="70" stroke-linecap="round" />
                                </svg>
                            </div>
                            <p>Lorem ipsum text is a dummy text</p>
                        </div>

                        <div className='col-md-3'>
                            <div className='skill'>
                                <div className='outer_box'>
                                    <div className='inner_box'>
                                        <div id='number4'>
                                        <span>{number4}%</span>
                                        </div>
                                    </div>
                                </div>

                                <svg className='seosvg' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                    <defs>
                                        <linearGradient id="GradientColor4">
                                            <stop offset="0%" stop-color="#177a0e" />
                                            <stop offset="100%" stop-color="#177a0e" />
                                        </linearGradient>
                                    </defs>
                                    <circle className='circle4.' cx="80" cy="80" r="70" stroke-linecap="round" />
                                </svg>
                            </div>
                            <p>Lorem ipsum text is a dummy text</p>
                        </div>



                    </div>
                </div>

            </section>







            <Footer />
        </div>
    )
}

export default Seoservices
