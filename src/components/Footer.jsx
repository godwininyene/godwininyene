import React from 'react';
import logo from '../assets/logo.png';
import { FaBasketballBall } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaBehance } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-primary-light'>
        <div className='max-w-[540px] lg:max-w-[1140px] mx-auto px-3'> 
           
            <div className='footer-content  py-16 text-center' data-aos='fade-up'>
                <a href="" className='inline-block py-2 mr-4 text-center mb-7'>
                    <img src={logo} alt=""  className='inline'/>
                </a>
                <ul className='flex  flex-wrap items-center justify-center ml-auto mb-5'>
                    <li>
                        <a href="" className='text-base font-bold text-white py-8 px-4'>Home</a>
                    </li>

                    <li>
                        <a href="" className='text-base font-bold transition-all duration-300 text-white hover:text-gold py-8 px-4 '>Services</a>
                    </li>

                    <li>
                        <a href="" className='text-base font-bold transition-all duration-300 text-white hover:text-gold py-8 px-4'>Portfolio</a>
                    </li>

                    <li>
                        <a href="" className='text-base font-bold transition-all duration-300 text-white hover:text-gold py-8 px-4'>Resume</a>
                    </li>

                    <li>
                        <a href="" className='text-base font-bold transition-all duration-300 text-white hover:text-gold py-8 px-4'>Client</a>
                    </li>

                    <li>
                        <a href="" className='text-base font-bold transition-all duration-300 text-white hover:text-gold py-8 px-4'>Blog</a>
                    </li>
                    <li>
                        <a href="" className='text-base font-bold transition-all duration-300 text-white hover:text-gold py-8 px-4'>Contact</a>
                    </li>
                </ul>

                <ul className='flex flex-wrap items-center justify-center ml-auto mb-5 gap-5'>
                    <li className='flex-shrink-0'>
                        <a href="" className='text-base font-bold inline-grid place-items-center bg-gold w-10 h-10 rounded-full'>
                           <FaBasketballBall />
                        </a>
                    </li>

                    <li className='flex-shrink-0'>
                        <a href="" className='text-base font-bold inline-grid place-items-center bg-gold w-10 h-10 rounded-full'>
                           <FaLinkedin />
                        </a>
                    </li>

                    <li className='flex-shrink-0'>
                        <a href="" className='text-base font-bold inline-grid place-items-center bg-gold w-10 h-10 rounded-full'>
                           <FaInstagram />
                        </a>
                    </li>

                    <li className='flex-shrink-0'>
                        <a href="" className='text-base font-bold inline-grid place-items-center bg-gold w-10 h-10 rounded-full'>
                           <FaBehance />
                        </a>
                    </li>
                </ul>
            </div>

            <div className='footer-copy-right py-4 border-t border-t-[rgba(255,255,255,0.1)]'>
                <p className='text-center text-white'>
                    All Right Reserved. Designed and Developed by Gereal-Tech <br />
                    Template Credit : PixiansStudioUIUX
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer