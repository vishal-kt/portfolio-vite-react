import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../../assets/lotties/textlogo.json'
import {Link , NavLink} from 'react-router-dom'
import ThemeButton from '../ThemeButton'

function Header() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  
  return (
  <div className='n-wrapper bg-gray-900 bg-opacity-30 rounded-lg mt-2 p-2 flex items-center justify-between'>
    <div className='n-left flex row-auto'>

      <div className='logo text-black'>
        <Link to="/">
        Vishal kumar  </Link></div>

      <div className=''>
         {/* <Lottie 
	      options={defaultOptions}
        height={100}
        width={1000}
      /> */}
      
      </div>


    </div>
    <div className='n-right flex items-center'>
      <div className='n-list'>
        <ul className='flex space-x-3' style={{listStyleType:'none'}}>
          <li> <NavLink to="/">
              Home
          </NavLink>
            </li>
          <li><NavLink to="/projects">
              Projects
          </NavLink></li>
          <li><NavLink to="/about">
              About
          </NavLink></li>
          <li><NavLink to="/contact">
              Contact
          </NavLink></li>
         
        </ul>
      </div>
    </div>
    <div className='n-theme'>
      <div className='togglebtn'><ThemeButton/></div>
    </div>
  </div>
  )
}

export default Header