import React, { useEffect, useState } from 'react';
import sanityClient from '../../sanityClient';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import homebanner from "../../assets/images/mainbanner.jpg";
import "./gallery.css";
import $ from "jquery";
import {WhatsAppWidget} from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

const Gallery = () => {

  useEffect(() => {

    $('.img-hover-box').on('click',function() {
      var imgsrc = $(this).find('input:hidden').val();
      $('.modal-body').css("background-image", "url('" + imgsrc + "')");
    });
    
  })

  const [posts, setPosts] = useState([]);
  useEffect(() => {
      const fetchData = async () => {
          const query = '*[_type == "gallery"]{..., "mainImageUrl": mainImage.asset->url}'; 

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
      <Header />

      <div className="body-galler mt-5" style={{backgroundImage: `url(${homebanner})` }}>
        <div className="container-fluid">
          <div className="row">
          {posts.map((post, index) => (
                           <div className="col-lg-3 col-sm-6 col-6 gx-0">
          
                           <div className="img-hover-box" data-bs-toggle="modal" data-bs-target="#exampleModal">
                           <input type="hidden" value = {post.mainImageUrl}/>
                           <div className="feature-img" style={{backgroundImage: `url(${post.mainImageUrl})` }}></div>
                             <div className="box-title">
                               <h3>{post.title}</h3>
                               <i class="bi bi-plus-lg"></i>
                             </div>
                 
                           </div>
                         </div>
                          ))}
      </div>
      </div>
      </div>
      <div className="modal gallerymodal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content gallery-modal-content">
      <div className="modal-header gallery-modal-header">

        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body gallery-modal-custom">
      </div>
    </div>
  </div>
</div>

      <Footer />
    </>
  )
}

export default Gallery
