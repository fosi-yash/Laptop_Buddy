import React from 'react'
import './style/Header.css'
import { FaRegUserCircle } from "react-icons/fa";
import { LuShoppingCart } from 'react-icons/lu';
import logo from '../assets/images/logo/logo.png'

const Header = () => {
  return (
    <div style={{backgroundColor:'#ffffff'}}>
      <div className="flex header-main justify-center">
        <img src={logo} alt="" className='header-logo-image' />
        <div className=' header-menu-bar'>
          <ul className='flex justify-around '>
            <li><select name="" id="" className='header-product-list'>
              <option className='header-product-list-option' value=""  selected>All Products</option>
              <option value="">Laptops</option>
              <option value="">Desktops</option>
              <option value="">CPUs</option>
              <option value="">Accesories</option>
            </select></li>
            <li>On Sale</li>
            <li>New Arrives</li>
            <li>Brands</li>
          </ul>
        </div>
        <input type="search" className='header-search-bar' placeholder={'🔍 Search Product'} />
        <div className='flex justify-evenly w-30 header-icon-div'>

          <LuShoppingCart className='header-icon' />
          <FaRegUserCircle className='header-icon' />
        </div>
      </div>
    </div>
  )
}

export default Header
