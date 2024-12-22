import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';


const Contact = () => {
  return (
    <section className='bg-primary  py-20 lg:py-28 overflow-hidden' id='Contact'>
        <div className='max-w-[540px] lg:max-w-[1140px] mx-auto px-3'> 
            <div className='text-center text-white mb-12'>
                <span className='relative mb-4 inline-block font-bold  pe-8 ps-8 px-8 text-black bg-gold leading-9 after:content after:block after:absolute after:top-full after:left-3  after:border-t-[10px] after:border-t-gold after:border-r-[10px] after:border-r-transparent after:h-0 after:w-0'>
                    Contact
                </span>
                <h2 className='mb-4  text-2xl lg:text-4xl font-semibold'>
                    Get In Touch
                </h2>
            </div>

            <div className='animate-fadeInUp' data-aos="fade-up" data-aos-offset="400" data-aos-duration="200">
                <div className='flex flex-wrap -mt-7 -mx-6'>
                    {/* Left Content Start */}
                    <div className='w-full lg:w-[33.33%] px-6 mt-12'>
                        <ul className='contact-info'>
                            <li className='bg-[rgba(255,255,255,0.1)] mb-5 gap-5 py-6 px-8 flex items-center border border-[rgba(255,255,255,0.1)]'>
                                <div className='flex-shrink-0 h-[70px] w-[70px] flex items-center justify-center rounded-full bg-gold text-center text-2xl'>
                                    <FaPhone />
                                </div>
                                <div className='contact-content text-white'>
                                    <h4 className=' text-2xl font-semibold mb-1'>Phone Number</h4>
                                    <p>+2348144098649, +23408144098649</p>

                                </div>
                            </li>

                            <li className='bg-[rgba(255,255,255,0.1)] mb-5 gap-5 py-6 px-8 flex items-center border border-[rgba(255,255,255,0.1)]'>
                                <div className='flex-shrink-0 h-[70px] w-[70px] flex items-center justify-center rounded-full bg-gold text-center text-2xl'>
                                    <FaEnvelope />
                                </div>
                                <div className='contact-content text-white'>
                                    <h4 className=' text-2xl font-semibold mb-1'>Email Address</h4>
                                    <p>godwinhigh2@gmail.com</p>

                                </div>
                            </li>

                            <li className='bg-[rgba(255,255,255,0.1)] mb-5 gap-5 py-6 px-8 flex items-center border border-[rgba(255,255,255,0.1)]'>
                                <div className='flex-shrink-0 h-[70px] w-[70px] flex items-center justify-center rounded-full bg-gold text-center text-2xl'>
                                    <FaPhone />
                                </div>
                                <div className='contact-content text-white'>
                                    <h4 className=' text-2xl font-semibold mb-1'>Office Address</h4>
                                    <p>+2348144098649, +23408144098649</p>

                                </div>
                            </li>



                        </ul>
                    </div>
                    {/* Left Content End */}


                     {/* Right Content Start */}
                     <div className='w-full lg:w-[66.66%] px-6 mt-12'>
                        <form action="">
                            <div className='flex flex-wrap'>
                                <div className='w-full lg:w-2/4 px-3 mt-6'>
                                    <input type="text" placeholder='Your Name' className='block w-full text-base font-normal text-white border border-[rgba(255,255,255,0.1)] px-5 py-4 bg-[rgba(255,255,255,0.1)] transition-all duration-300 focus:border-gold focus:outline-0' />
                                </div>
                                <div className='w-full lg:w-2/4 px-3 mt-6'>
                                    <input type="text" placeholder='Your Email' className='block w-full text-base font-normal text-white border border-[rgba(255,255,255,0.1)] px-5 py-4 bg-[rgba(255,255,255,0.1)] transition-all duration-300 focus:border-gold focus:outline-0' />

                                </div>

                                <div className='w-full px-3 mt-6'>
                                    <textarea placeholder='Your Message' className=' min-h-[250px] block w-full text-base font-normal text-white border border-[rgba(255,255,255,0.1)] px-5 py-4 bg-[rgba(255,255,255,0.1)] transition-all duration-300 focus:border-gold focus:outline-0' />

                                </div>
                            </div>
                            <button className='mt-10 inline-block bg-gold leading-[46px]  rounded-sm font-semibold px-8 border-2 border-transparent ml-4 ps-8 pe-8 transition-all duration-300 ease-in hover:border-gold hover:bg-transparent hover:text-gold'>Submit Message</button>
                        </form>
                    </div>
                    {/* Right Content End */}

                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact