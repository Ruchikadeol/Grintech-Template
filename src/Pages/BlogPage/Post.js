import React from 'react'
import { Link } from 'react-router-dom'

const Post = (props) => {
  return (
   
      <div className='col-lg-3 col-md-4 col-sm-6 mt-3'>
        <div className='post-box mx-10'>
        <img className='img-fluid' src={props.image}></img>
        <h5>Lorem Ipsum is simply dummy text of the printing typesetting industry.</h5>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
        <Link className='postbox_link' to="/single-blog"> Read Article</Link>
        </div>
    </div>
  )
}

export default Post
