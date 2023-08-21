import React, { useState } from 'react'
import "./ourworks.css";
import data from './data';
import { Link } from 'react-router-dom';

const Client = (props) => {



  return (
   <section className='clients'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='row'>
                                {
                                    props.sites.map((item) => {
                                        const { id, name, category } = item;

                                        const divStyle = {
                                            backgroundImage: `url(${item.img})`,
                                            
                                          };

                                        return (
                                            <div className='col-lg-3 col-md-4 col-sm-12'>.

                                                <div class="example" style={divStyle}>
                                                    <Link to={item.Link} target="_blank">
                                                   

                                                        <div class="content">
                                                        <span class="decoration left-top"></span>
                                                        <span class="decoration left-bottom"></span>
                                                            <div className='text'>
                                                          
                                                                <img src={item.logo} className=''></img>
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

export default Client
