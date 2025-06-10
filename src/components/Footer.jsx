import React from 'react'
import './style/Footer.css'
import logo from '../assets/images/logo/logo.png'
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import visa from '../assets/images/icons/visa.svg'
import master from '../assets/images/icons/master.svg'
import paypal from '../assets/images/icons/paypal.svg'
import apple from '../assets/images/icons/apple-pay.svg'
import google from '../assets/images/icons/google-pay.svg'

const Footer = () => {
    return (
        <>
            <div className='footer-main-div'>
                <div className='footer-upper-div'>
                    <h1>STAY UP TO DATE ABOUT <br /> OUR LATEST OFFERS</h1>
                    <div className='footer-upper-inputs'><input type="email" name="email" id="email" placeholder='📧 Enter Your Email' /><br />
                        <input type="button" className='footer-subscribe-button' value='Subscribe To News Letter' /></div>
                </div>
                <div className='flex footer-inner-div'>
                    <div className='footer-inner-first'>
                        <img src={logo} alt="" />
                        <p>We offer top-quality refurbished laptops, desktops, and accessories — reliable, affordable, and built to perform. From students to professionals, we’ve got you covered.
                        </p>
                        <div className="flex ">
                            <div className='footer-icon'>
                                <FaTwitter />
                            </div>
                            <div className='footer-icon'>
                                <FaFacebookF />
                            </div>
                            <div className='footer-icon'>
                                <FaInstagram />
                            </div>
                            <div className='footer-icon'>
                                <FaGithub />
                            </div>
                        </div>
                    </div>
                    <div className='footer-inner-second'>
                        <h3>COMPANY</h3>
                        <ul>
                            <li>About</li>
                            <li>Features</li>
                            <li>Works</li>
                            <li>Career</li>
                        </ul>
                    </div>
                    <div className='footer-inner-second'>
                        <h3>HELP</h3>
                        <ul>
                            <li>Customer Support</li>
                            <li>Delivery Details</li>
                            <li>Tearms & Condition</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className='footer-inner-second'>
                        <h3>FAQ</h3>
                        <ul>
                            <li>Account</li>
                            <li>Manage Deliveries</li>
                            <li>Orders</li>
                            <li>Payments</li>
                        </ul>
                    </div>
                    <div className='footer-inner-second'>
                        <h3>RESOURSES</h3>
                        <ul>
                            <li>Free eBooks</li>
                            <li>Development Tutorial</li>
                            <li>How To - Blog</li>
                            <li>Youtube Playlist</li>
                        </ul>
                    </div>
                </div>
                <hr className='footer-hr' />
                <div className='flex justify-between footer-last-div'>
                    <p>Laptop Buddy &copy; 2025, All Rights Reserved</p>
                    <div className='flex'>
                        <img src={visa} alt="" />
                        <img src={master} alt="" />
                        <img src={google} alt="" />
                        <img src={paypal} alt="" />
                        <img src={apple} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
