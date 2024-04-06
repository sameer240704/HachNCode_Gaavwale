import React from 'react'
import { useState, useEffect } from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LoginIcon from '@mui/icons-material/Login';


const Navigaton = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  
    return(
        <div className={scrolled ? "nav-container scrolled" : "nav-container"}>
            <a className='nav-logo' href="#">Edutainment</a>
            <ul className='nav-items'>
                <li className='nav-ele'><a href="#home" className={activeLink === 'home' ? 'active nav-ele' : 'nav-ele'} onClick={() => onUpdateActiveLink('home')}>Home</a></li>
                <li className='nav-ele'><a href="#skills" className={activeLink === 'labs' ? 'active nav-ele' : 'nav-ele'} onClick={() => onUpdateActiveLink('labs')}>Labs</a></li>
                <li className='nav-ele'><a href="#projects" className={activeLink === 'courses' ? 'active nav-ele' : 'nav-ele'} onClick={() => onUpdateActiveLink('courses')}>Courses</a></li>
                <li className='social-icon'>
                    <a href="#">
                        <LoginIcon className='nav-icon' sx={{fontSize:"42px", border:"1px solid #121212", padding:"5px", borderRadius:"50%"}}/>
                    </a>
                </li>
                <li className='social-icon'>
                    <a href="https://www.linkedin.com/in/aditi-ambasta-9581b4288/" target="_blank">
                        <LinkedInIcon className='nav-icon' sx={{fontSize:"42px", border:"1px solid #121212", padding:"5px", borderRadius:"50%"}}/>
                    </a>
                </li>
                
                <button className='nav-items-button' type="submit"><span>Sign Up</span></button>
                {/* <button className='nav-items-button-log' type="submit"><span>Log In</span></button> */}
            </ul>
        </div>
    )
}

export default Navigaton
