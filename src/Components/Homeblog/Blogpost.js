import React  from "react";
import { useEffect, useState } from "react";
import sanityClient from '../../sanityClient';
import "./blogpost.css";
import b1 from "../../assets/images/b1.jpg";
import b2 from "../../assets/images/b2.jpg";
import b3 from "../../assets/images/b3.jpg";
import b4 from "../../assets/images/b4.jpg";
import { Link } from 'react-router-dom'
import BlockContent from '@sanity/block-content-to-react';
const Blogpost = () => {
  const [posts, setPosts] = useState([]);
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


    return (
        <>
          <section className="home-blog bg-light">
            <div className="container">
                <div className="row">
                  <div className="blog-head text-center mb-4">
                    <h2>Latest Blog Post</h2>
                  </div>
                 {
                  posts.slice(0,4).map((item, index)=>(
                    <div className="col-lg-3">
                    <Link to={`/single-blog/${item.slug.current}`} onClick={() => localStorage.setItem('itemId', index)}>
                      <div className="post-frame">
                        <img className="img-fluid tm" src={item.mainImageUrl} alt="blog1"/>
                        <div className="post-content">
                          <h5>{item.title}</h5>
                       
                        </div>
      
                      </div>
                    </Link>
                  
                  </div>
                  ))
                 }

                </div>
            </div>
          </section>
        </>
    )
}

export default Blogpost