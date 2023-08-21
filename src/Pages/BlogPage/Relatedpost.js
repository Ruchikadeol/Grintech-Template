import React from 'react'



import { Link } from 'react-router-dom'
const Relatedpost = (props) => {
  return (
    <div className='col-lg-3 col-md-3 col-sm-6 mt-3'>
    <div className='relatedpost-box mx-10'>
    <img className='img-fluid' src={props.image}></img>
    <h5>Lorem Ipsum is simply dummy text</h5>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
    <Link className='relatedpostbox_link' to="/single-blog"> Read in 8 mins</Link>
    </div>
</div>
  )
}

export default Relatedpost
