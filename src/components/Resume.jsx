import React from 'react';
import html from './../assets/html.png'
import css from './../assets/css.png'
import js from './../assets/js.png'
import tailwind from './../assets/tailwind.svg'
import react from './../assets/react.svg'
import node from './../assets/node.svg'
import mongodb from './../assets/mongodb.png'
import github from './../assets/github.png'
import php from './../assets/php.png'
import laravel from './../assets/laravel.png'
import mysql from './../assets/mysql.png'


const Resume = () => {
  return (
    <section className='bg-primary-light  py-20 lg:py-28 overflow-hidden' id='Resume'>
        <div className='max-w-[540px] lg:max-w-[1140px] mx-auto'> 
            <div className='text-white'>
                <div className='text-center mb-12'>
                    <span className='relative mb-4 inline-block font-bold  pe-8 ps-8 px-8 text-black bg-gold leading-9 after:content after:block after:absolute after:top-full after:left-3  after:border-t-[10px] after:border-t-gold after:border-r-[10px] after:border-r-transparent after:h-0 after:w-0'>
                        Resume
                    </span>
                    <h2 className='mb-4  text-2xl lg:text-4xl font-semibold'>
                        My Professional Skills & Experience
                    </h2>
                    <p className='font-light max-w-full px-4 lg:px-0 lg:max-w-[80%] mx-auto text-center'>
                        My true strength lies in programming languages/frameworks defined in the Core section below,
                        but that doesn't mean I can't work with languages/frameworks defined in the secondary section
                        as well.
                    </p>
                </div>

                <div className='flex justify-center items-center flex-wrap flex-col lg:flex-row -mx-3'>

                    {/* <div className='w-full lg:w-[32%] px-3 flex-shrink-0 relative -order-1 lg:order-none'>
                        <div className=''>
                            <img src={me} alt="" className='max-w-full h-auto inline'/>
                        </div>
                    </div> */}


                  
                    <div className='w-full lg:w-[50%] flex-shrink-0 px-[22px] -order-1 mt-6'>
                        <div className='animation-fadeInLeft ' data-aos="fade-right" data-aos-duration="300" data-aos-offset="100">
                            <h2 className='text-2xl text-[rgb(209,213,219)] relative inline-block mb-4'>CORE</h2>
                            {/* Section Core Skills */}
                            <ul className='flex flex-wrap mb-5'>
                                <li className='bg-white shadow-md w-[100px] p-2 m-2'>
                                    <div  className=''>
                                        <h5 className='text-gold text-center text-xl font-semibold'>
                                            HTML
                                        </h5>
                                    </div>
                                    <div className='mb-2'>
                                        <img src={html} alt="" className='max-w-full h-auto inline'/>
                                    </div>
                                    
                                </li>

                                <li className='bg-white shadow-md w-[100px] p-2 m-2'>
                                    <div  className=''>
                                        <h5 className='text-gold text-center text-xl font-semibold'>
                                            CSS
                                        </h5>
                                    </div>
                                    <div className='mb-2'>
                                        <img src={css} alt="" className='max-w-full h-auto inline'/>
                                    </div>
                                   
                                </li>



                                <li className='bg-white shadow-md w-[100px] p-2 m-2'>
                                    <div  className=''>
                                        <h5 className='text-gold text-center text-xl font-semibold'>
                                            JavaScript
                                        </h5>
                                    </div>
                                    <div className='mb-2'>
                                        <img src={js} alt="" className='max-w-full h-auto inline'/>
                                    </div>
                                   
                                </li>

                                <li className='bg-white shadow-md w-[100px] p-2 m-2'>
                                    <div  className=''>
                                        <h5 className='text-gold text-center text-xl font-semibold'>
                                            Tailwind
                                        </h5>
                                    </div>
                                    <div className='mb-2'>
                                        <img src={tailwind} alt="" className='w-full h-auto inline-block'/>
                                    </div>
                                   
                                </li>


                                <li className='bg-white shadow-md w-[100px] p-2 m-2'>
                                    <div  className=''>
                                        <h5 className='text-gold text-center text-xl font-semibold'>
                                            Reactjs
                                        </h5>
                                    </div>
                                    <div className='mb-2'>
                                        <img src={react} alt="" className='max-w-full h-auto inline'/>
                                    </div>
                                  
                                </li>

                                <li className='bg-white shadow-md w-[100px] p-2 m-2'>
                                    <div  className=''>
                                        <h5 className='text-gold text-center text-xl font-semibold'>
                                            Node.js
                                        </h5>
                                    </div>
                                    <div className='mb-2'>
                                        <img src={node} alt="" className='max-w-full h-auto inline'/>
                                    </div>
                                   
                                </li>

                                <li className='bg-white shadow-md w-[100px] p-2 m-2'>
                                    <div  className=''>
                                        <h5 className='text-gold text-center text-xl font-semibold'>
                                            Mongodb
                                        </h5>
                                    </div>
                                    <div className='mb-2'>
                                        <img src={mongodb} alt="" className='max-w-full h-auto inline'/>
                                    </div>
                                   
                                </li>

                                <li className='bg-white shadow-md w-[100px] p-2 m-2'>
                                    <div  className=''>
                                        <h5 className='text-gold text-center text-xl font-semibold'>
                                            Github
                                        </h5>
                                    </div>
                                    <div className='mb-2'>
                                        <img src={github} alt="" className='max-w-full h-auto inline'/>
                                    </div>
                                   
                                </li>
                            </ul>

                            {/* Section Other Skills */}
                            <h2 className='text-2xl text-[rgb(209,213,219)] relative inline-block mb-4'>OTHERS</h2>
                            <ul className='flex flex-wrap'>
                                <li className='bg-white shadow-md w-[100px] p-2 m-2'>
                                    <div className='mb-2'>
                                        <img src={php} alt="" className='max-w-full h-auto inline'/>
                                    </div>
                                   
                                </li>

                                <li className='bg-white shadow-md w-[100px] p-2 m-2'>
                                    <div  className=''>
                                        <h5 className='text-gold text-center text-xl font-semibold'>
                                            Laravel
                                        </h5>
                                    </div>
                                    <div className='mb-2'>
                                        <img src={laravel} alt="" className='max-w-full h-auto inline'/>
                                    </div>
                                   
                                </li>



                                <li className='bg-white shadow-md w-[100px] p-2 m-2'>
                                   
                                    <div className='mb-2'>
                                        <img src={mysql} alt="" className='max-w-full h-auto inline'/>
                                    </div>
                                   
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Section Other Skills */}
                    {/* <div className='w-full lg:w-1/2 flex-shrink-0 px-3 -order-1 mt-6'>
                        <div className='animation-fadeInLeft' data-aos="fade-left" data-aos-duration="1000" data-aos-offset="300">
                            <h2 className='text-2xl text-[rgb(209,213,219)] relative inline-block mb-4'>OTHERS</h2>
                            <ul className='flex flex-wrap'>
                                <li className='bg-white shadow-md w-[120px] p-4 m-2'>
                                    <div className='mb-2'>
                                        <img src={php} alt="" className='max-w-full h-auto inline'/>
                                    </div>
                                   
                                </li>

                                <li className='bg-white shadow-md w-[120px] p-4 m-2'>
                                    <div  className=''>
                                        <h5 className='text-gold text-center text-xl font-semibold'>
                                            Laravel
                                        </h5>
                                    </div>
                                    <div className='mb-2'>
                                        <img src={laravel} alt="" className='max-w-full h-auto inline'/>
                                    </div>
                                   
                                </li>



                                <li className='bg-white shadow-md w-[120px] p-4 m-2'>
                                   
                                    <div className='mb-2'>
                                        <img src={mysql} alt="" className='max-w-full h-auto inline'/>
                                    </div>
                                   
                                </li>
                            </ul>
                        </div>
                    </div> */}


                    <div className='w-full lg:w-[50%] flex-shrink-0 px-3 mt-6 '>
                        <div className='animate-fadeInRight pl-12 ml-0 lg:ml-8' data-aos="fade-left" data-aos-duration="300" data-aos-offset="100">
                            <ul className=''>
                                <li className='mb-5   relative text-left before:content before:h-4 before:w-4 before:rounded-full before:bg-gold before:absolute before:top-1 before:-left-9   after:content after:absolute after:bg-gold after:top-8 after:-left-8 after:w-[3px] after:h-[80%]'>
                                    <div className=''>
                                        <p className=''>2022</p>
                                    </div>
                                    <div>
                                        <h5 className='text-gold text-xl'>Frontend Developer @Thrinkle Lab Limited</h5>
                                        <p className='font-light border-b border-b-gold'>
                                            Designed and developed responsive user interfaces that enhanced user engagement by 30%.
                                        </p>
                                        <p className='font-light'>
                                            Optimized website performance, reducing load times by 40% through efficient coding practices.
                                        </p>
                                    </div>
                                </li>

                                <li className='mb-5  relative text-left before:content before:h-4 before:w-4 before:rounded-full before:bg-gold before:absolute before:top-1 before:-left-9   after:content after:absolute after:bg-gold after:top-8 after:-left-8 after:w-[3px] after:h-[80%]'>
                                    <div className=''>
                                        <p className=''>2023</p>
                                    </div>
                                    <div>
                                        <h5 className='text-gold text-xl'>Web Developer @Procity</h5>
                                        <p className='font-light border-b border-b-gold'>
                                            Built scalable web applications with seamless integration of front-end and back-end systems.
                                        </p>
                                        <p>
                                            Streamlined workflows by automating processes, increasing team productivity by 25%.
                                        </p>
                                    </div>
                                </li>

                                <li className='mb-5  relative text-left before:content before:h-4 before:w-4 before:rounded-full before:bg-gold before:absolute before:top-1 before:-left-9   after:content after:absolute after:bg-gold after:top-8 after:-left-8 after:w-[3px] after:h-[80%]'>
                                    <div className=''>
                                        <p className=''>2024</p>
                                    </div>
                                    <div>
                                        <h5 className='text-gold text-xl'>Web Developer @Procity</h5>
                                        <p className='font-light border-b border-b-gold'>
                                            Deliver a secure, high-performing application used by multiple users daily.
                                        </p>
                                        <p>
                                            Implemented robust security protocols, safeguarding sensitive data and ensuring compliance.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Resume