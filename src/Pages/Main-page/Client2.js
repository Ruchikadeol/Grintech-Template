import React, { useState } from 'react'
import "../OurWorks/ourworks.css";

import data from '../OurWorks/data';
import { Link } from 'react-router-dom';

const Client2 = (props) => {



  return (
   <section className='clients'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='row'>
                                {
                                    props.sites.slice(0, 3).map((item) => {
                                        const { id, name, category } = item;

                                        const divStyle = {
                                            backgroundImage: `url(${item.img})`,
                                            
                                          };

                                        return (
                                            <div className='col-lg-4 '>.

                                                <div class="example" style={divStyle}>
                                                    <Link to={item.Link}>
                                                   

                                                        <div class="content">
                                                        <span class="decoration left-top"></span>
                                                        <span class="decoration left-bottom"></span>
                                                            <div className='text'>
                                                          
                                                             <img src={item.logo} className='img-fluid'></img>
                                                                <p>{item.desc}</p>
                                                                <p> <Link className="content_link" to={item.Link}>Read more...</Link></p>
                                                             
                                                            </div>
                                                            <span class="decoration right-top"></span>
                                                            <span class="decoration right-bottom"></span>

                
                                                        </div>
                                                       
                                                    </Link>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </section>

  )
}

export default Client2


