import React from 'react'
import './style/Header.css'
import { FaRegUserCircle } from "react-icons/fa";
import { LuShoppingCart } from 'react-icons/lu';
import logo from '../assets/images/logo/logo.png'

const Header = () => {
  return (
    <div>
      <div className="flex header-main justify-center">
        <img src={logo} alt="" className='header-logo-image'/>
        <div className='flex'>
            <ul className='flex justify-evenly w-70'>
                <li>home</li>
                <li>home</li>
                <li>home</li>
                <li>home</li>
            </ul>
        </div>
        <input type="search" className='header-search-bar' />
        <div className='flex justify-evenly w-30'>

        <LuShoppingCart className='header-icon'/>
        <FaRegUserCircle className='header-icon'/>
        </div>
      </div>
    </div>
  )
}

export default Header
