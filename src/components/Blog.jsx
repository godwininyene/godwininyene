import React from 'react';
import img_22 from '../assets/img-22.jpg';
import img_23 from '../assets/img-23.jpg';
import img_24 from '../assets/img-24.jpg';
import {FaUser}    from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';
import {AiFillEye} from 'react-icons/ai'

const Blog = () => {
  return (
    <section className='bg-primary-light  py-20 lg:py-28 overflow-hidden' id='Blog'>
        <div className='max-w-[540px] lg:max-w-[1140px] mx-auto px-3'> 
            <div className='text-center text-white mb-12'>
                <span className='relative mb-4 inline-block font-bold  pe-8 ps-8 px-8 text-black bg-gold leading-9 after:content after:block after:absolute after:top-full after:left-3  after:border-t-[10px] after:border-t-gold after:border-r-[10px] after:border-r-transparent after:h-0 after:w-0'>
                    Blog Post
                </span>
                <h2 className='mb-4  text-2xl lg:text-4xl font-semibold'>
                    Our Latest Blog
                </h2>
            </div>

            <div className='flex flex-wrap -mx-3 justify-between'>

                <div className='w-full lg:w-[33%] px-3 mt-6'>
                    <div className='animate-slideInUp' data-aos="fade-up" data-aos-offset="300">
                        <div className='blog__item-iner'>
                            <div className='blog__img'>
                                <img src={img_22} alt="" className='w-full' />
                            </div>

                            <div className='p-8 bg-[rgba(255,255,255,0.1)]'>
                                <ul className='flex flex-wrap gap-5 mb-4'> 
                                    <li className='flex items-center'>
                                        <span className='mr-2 text-gold'>
                                            <FaUser />
                                        </span>
                                        <a href="#" className='text-white inline-block'>Admin</a>
                                    </li>

                                    <li className='flex items-center'>
                                        <span className='mr-2 text-gold'>
                                            <FaComment />
                                        </span>
                                        <a href="#" className='text-white inline-block'>15</a>
                                    </li>

                                    <li className='flex items-center'>
                                        <span className='mr-2 text-gold'>
                                            <AiFillEye />
                                        </span>
                                        <a href="#" className='text-white inline-block'>25k view</a>
                                    </li>

                                </ul>
                                <h3 className='font-semibold text-3xl mb-4 text-white'>
                                    <a href="">How Create Mockup Design</a>
                                </h3>
                                <p className='text-white leading-6'>
                                    Conveniently innovate web services user-centric before progressive
                                    architect distinctively.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='w-full lg:w-[33%] px-3 mt-6'>
                    <div className='animation-slideInUp' data-aos="fade-up" data-aos-offset="300" data-aos-delay="200">
                        <div className='blog__item-iner'>
                            <div className='blog__img'>
                                <img src={img_23} alt="" className='w-full'/>
                            </div>

                            <div className='p-8 bg-[rgba(255,255,255,0.1)]'>
                                <ul className='flex flex-wrap gap-5 mb-4'> 
                                    <li className='flex items-center'>
                                        <span className='mr-2 text-gold'>
                                            <FaUser />
                                        </span>
                                        <a href="#" className='text-white inline-block'>Admin</a>
                                    </li>

                                    <li className='flex items-center'>
                                        <span className='mr-2 text-gold'>
                                            <FaComment />
                                        </span>
                                        <a href="#" className='text-white inline-block'>15</a>
                                    </li>

                                    <li className='flex items-center'>
                                        <span className='mr-2 text-gold'>
                                            <AiFillEye />
                                        </span>
                                        <a href="#" className='text-white inline-block'>25k view</a>
                                    </li>

                                </ul>
                                <h3 className='font-semibold text-3xl mb-4 text-white'>
                                    <a href="">Presentation Mockup Design.</a>
                                </h3>
                                <p className='text-white leading-6'>
                                    Conveniently innovate web services user-centric before progressive
                                    architect distinctively.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='w-full lg:w-[33%] px-3 mt-6'>
                    <div className='animation-slideInUp' data-aos="fade-up" data-aos-offset="300" data-aos-delay="300">
                        <div className='blog__item-iner'>
                            <div className='blog__img'>
                                <img src={img_24} alt="" className='w-full'/>
                            </div>

                            <div className='p-8 bg-[rgba(255,255,255,0.1)]'>
                                <ul className='flex flex-wrap gap-5 mb-4'> 
                                    <li className='flex items-center'>
                                        <span className='mr-2 text-gold'>
                                            <FaUser />
                                        </span>
                                        <a href="#" className='text-white inline-block'>Admin</a>
                                    </li>

                                    <li className='flex items-center'>
                                        <span className='mr-2 text-gold'>
                                            <FaComment />
                                        </span>
                                        <a href="#" className='text-white inline-block'>15</a>
                                    </li>

                                    <li className='flex items-center'>
                                        <span className='mr-2 text-gold'>
                                            <AiFillEye />
                                        </span>
                                        <a href="#" className='text-white inline-block'>25k view</a>
                                    </li>

                                </ul>
                                <h3 className='font-semibold text-3xl mb-4 text-white'>
                                    <a href="">Photo Poster Mockup Design.</a>
                                </h3>
                                <p className='text-white leading-6'>
                                    Conveniently innovate web services user-centric before progressive
                                    architect distinctively.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </section>

  )
}

export default Blog