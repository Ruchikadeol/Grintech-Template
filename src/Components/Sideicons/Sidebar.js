import React from 'react'
import "./sidebar.css";
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <>
            <div className='side-icons'>
                <div className="social-icons">
                    <ul>
                        <li><Link to="https://www.facebook.com/Grintechwebagency/" target='_blank'><Icon icon="devicon:facebook" /></Link></li>
                        <li><Link to="https://twitter.com/i/flow/login?redirect_after_login=%2FGrintechA" target='_blank'><Icon icon="skill-icons:twitter" /></Link></li>
                        <li><Link to="https://in.linkedin.com/company/grin-tech-web-agency" target="_blank"><Icon icon="devicon:linkedin" /></Link></li>
                        <li><Link to="https://www.instagram.com/grintechwebagency/" target="_blank"><Icon icon="skill-icons:instagram" /></Link></li>
                        <li><p>Follow Us</p></li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Sidebar
