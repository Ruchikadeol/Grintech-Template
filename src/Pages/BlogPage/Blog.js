import React, { useEffect, useState } from 'react';
import sanityClient from '../../sanityClient';
import { Icon } from '@iconify/react';
import "./blog.css";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Sideicons from "../../Components/Sideicons/Sidebar";
import Relatedpost from './Relatedpost';
import { Link } from 'react-router-dom';
import Related from "../../assets/images/Rectangle 99.png";
import Form from "../Services/Form";
import {WhatsAppWidget} from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
const Blog = () => {

    const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         try {
    //             const query = `*[_type == "post"]`;
    //             const data = await sanityClient.fetch(query);
    //             setPosts(data);

    //         } catch (error) {
    //             console.error('Error fetching Sanity blog posts:', error);
    //         }
    //     };

    //     fetchPosts();
    // }, []);

    useEffect(() => {
        const fetchData = async () => {
            const query = '*[_type == "post"]{..., "mainImageUrl": mainImage.asset->url}'; // Include "mainImageUrl" field to materialize the URL

            try {
                const result = await sanityClient.fetch(query);
                setPosts(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    console.log(posts)

    return (
        <div>
            <Header />
            <Sideicons />
            <WhatsAppWidget phoneNumber="8264420387" message="Hello, how can I help you?" companyName="Grintech Web Agency" />
            <section className="blog">
            <div className="container">
                <div className="row blog_main">
                <div className="col-lg-6 blog_main_div1">
                          
                            <h1 >Grintech Web Services</h1>
                            <p >In today's digital age, having a website that stands out is crucial for businesses to attract and retain customers. Grintech Web Agency is a leading web design company that offers expert web designing services to help businesses create responsive and engaging websites.</p>
                        </div>
                        <div className="col-lg-6">
                            <Form />
                        </div>
                </div>
            </div>
         </section>
         

            <section className='blog_search'>
                <div className='container'>'
                    <div className='row '>
                        <h2 className="text-center mt-3 mb-4">All Blogs</h2>
                    </div>
                </div>
            </section>

            <section className='blog_post'>
                <div className='container'>
                    <div className='row'>

                        {posts.map((post, index) => (
                            <div className='col-md-4 mt-3'>
                                <Link style={{ color: "black" }} to ={`/single-blog/${post.slug.current}`} onClick={() => localStorage.setItem('itemId', index)}>
                                <div key={post._id} className='blog_post'>
                                    <img className='img-fluid' src={post.mainImageUrl}></img>

                                    <h6 className='mt-2'>{post.title}</h6>
                                    <br />
                                    <div className='d-flex justify-content-between align-items-center'>

                                        <Link style={{ color: "#008bd0" }} to={`/single-blog/${post.slug.current}`} onClick={() => localStorage.setItem('itemId', index)}>Read more  <Icon icon="fluent-mdl2:forward" color="#008bd0" /> </Link>

                                    </div>
                                </div>
                                </Link>
                            </div>
                        ))}



                    </div>
                </div>
            </section>
            <section className='relatedblog_post'>
                <div className='container'>
                <div className='row '>
                        <h2 className="text-center mt-3 mb-4">Latest Blogs</h2>
                    </div>
                    <div className='row'>
                    {posts.slice(0,4).map((post, index) => (
                            <div className='col-md-3 '>
                                <Link style={{ color: "black" }} to ={`/single-blog/${post.slug.current}`}>
                                <div key={post._id} className='blog_post'>
                                    <img className='img-fluid' src={post.mainImageUrl}></img>

                                    <h6>{post.title}</h6>
                                    <br />
                                    <div className='d-flex justify-content-between align-items-center'>

                                        <Link style={{ color: "#008bd0" }} to={`/single-blog/${post.slug.current}`} onClick={() => localStorage.setItem('itemId', index)}>Read more  <Icon icon="fluent-mdl2:forward" color="#008bd0" /> </Link>

                                    </div>
                                </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                        <input type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="mb-3 col-md-6 col-sm-12">
                                        <label for="exampleInputEmail1" class="form-label">Phone </label>
                                        <input type="tel" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="mb-3 col-md-6 col-sm-12">
                                        <label for="exampleInputEmail1" class="form-label">Email address <span className='star'>*</span></label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
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
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                                </div>
                                <div class="g-recaptcha" data-sitekey="your_site_key"></div>
                                <button type="submit" class="btn " style={{ backgroundColor: "#177a0e", color: "white" }}>Submit</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Blog
