import React from 'react';
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className='bg-primary-light'>
        <div className='max-w-[540px] lg:max-w-[1140px] mx-auto px-3'> 
           
            <div className='footer-content  py-16 text-center' data-aos='fade-up'>
                <a href="" className='py-2 inline-block mb-2 text-4xl text-gold font-semibold'>
                    GI
                </a>
                <ul className='flex  flex-wrap items-center justify-center ml-auto mb-5'>
                    <li>
                         <Link to={`Home`} activeClass={'text-gold'}spy={true} smooth={true} offset={0} duration={1000}  className='cursor-pointer text-base font-bold transition-all duration-300 text-white hover:text-gold py-8 px-2 lg:px-4'>Home</Link>
                    </li>

                    <li>
                        <Link to={`Benefits`} activeClass={'text-gold'}spy={true} smooth={true} offset={0} duration={1000}  className='cursor-pointer text-base font-bold transition-all duration-300 text-white hover:text-gold py-8 px-2 lg:px-4'>Benefits</Link>
                    </li>

                    <li>
                        <Link to={`Portfolio`} activeClass={'text-gold'}spy={true} smooth={true} offset={0} duration={1000}  className='cursor-pointer text-base font-bold transition-all duration-300 text-white hover:text-gold py-8 px-2 lg:px-4'>Portfolio</Link>
                    </li>

                    <li>
                        <Link to={`Resume`} activeClass={'text-gold'}spy={true} smooth={true} offset={0} duration={1000}  className='cursor-pointer text-base font-bold transition-all duration-300 text-white hover:text-gold py-8 px-2 lg:px-4'>Resume</Link>
                    </li>
                    <li>
                        <Link to={`Contact`} activeClass={'text-gold'}spy={true} smooth={true} offset={0} duration={1000}  className='cursor-pointer text-base font-bold transition-all duration-300 text-white hover:text-gold py-8 px-2 lg:px-4'>Contact</Link>
                    </li>
                </ul>

                <ul className='flex flex-wrap items-center justify-center ml-auto mb-5 gap-5'>
                    <li className='flex-shrink-0'>
                        <a href="https://www.linkedin.com/in/godwin-inyene-598714233 " className='text-base font-bold inline-grid place-items-center bg-gold w-10 h-10 rounded-full'>
                           <FaLinkedin />
                        </a>
                    </li>

                    <li className='flex-shrink-0'>
                        <a href="https://github.com/godwininyene" className='text-base font-bold inline-grid place-items-center bg-gold w-10 h-10 rounded-full'>
                           <FaGithub />
                        </a>
                    </li>

                    <li className='flex-shrink-0'>
                        <a href="https://web.facebook.com/godwin.inyene.5/" className='text-base font-bold inline-grid place-items-center bg-gold w-10 h-10 rounded-full'>
                           <FaFacebook />
                        </a>
                    </li>

                    <li className='flex-shrink-0'>
                        <a href="mailto:godwinhigh2@gmail.com" className='text-base font-bold inline-grid place-items-center bg-gold w-10 h-10 rounded-full'>
                           <FaEnvelope />
                        </a>
                    </li>
                </ul>
            </div>

            <div className='footer-copy-right py-4 border-t border-t-[rgba(255,255,255,0.1)]'>
                <p className='text-center text-slate-300'>
                    All Right Reserved. Designed and Developed by Godwin Inyene <br />
                   
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer