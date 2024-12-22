import React from 'react';
import img_9 from  '../assets/img-9.jpg';
import img_10 from  '../assets/img-10.jpg';
import img_11 from  '../assets/img-11.jpg';
import img_12 from  '../assets/img-12.jpg';
import img_13 from  '../assets/img-13.jpg';
import img_14 from  '../assets/img-14.jpg';

const Portfolio = () => {
  return (
    <section className='bg-primary  py-20 lg:py-28 overflow-hidden' id='Portfolio'>
        <div className='max-w-[540px] lg:max-w-[1140px] mx-auto'> 
            <div className='text-center text-white'>
                <span className='relative mb-4 inline-block font-bold  pe-8 ps-8 px-8 text-black bg-gold leading-9 after:content after:block after:absolute after:top-full after:left-3  after:border-t-[10px] after:border-t-gold after:border-r-[10px] after:border-r-transparent after:h-0 after:w-0'>
                    Portfolio
                </span>
                <h2 className='mb-4  text-2xl lg:text-4xl font-semibold'>
                    Some Of My Creative Work
                </h2>
                <ul className='mb-10 flex flex-wrap justify-center text-center '>
                    <li  className='text-gold font-semibold cursor-pointer p-3'>All</li>
                    <li  className='text-white font-semibold cursor-pointer p-3'>Mobile</li>
                    <li  className='text-white font-semibold cursor-pointer p-3'>Website</li>
                    <li  className='text-white font-semibold cursor-pointer p-3'>Animation</li>
                    <li  className='text-white font-semibold cursor-pointer p-3'>Exclusive</li>
                </ul>
            </div>
            <div className='relative flex flex-col lg:flex-row flex-wrap justify-between items-center'>

                <div className='w-full lg:w-[32%] h-72 text-center overflow-hidden rounded-lg flex-shrink-0 mb-2'>
                    <img src={img_9} alt="" className='max-w-full h-auto inline'/>
                </div>

                <div className='w-full lg:w-[32%] text-center h-72 overflow-hidden rounded-lg flex-shrink-0 mb-2'>
                    <img src={img_10} alt="" className='inline' />
                </div>

                <div className='w-full lg:w-[32%] text-center h-72 overflow-hidden rounded-lg flex-shrink-0 mb-2'>
                    <img src={img_11} alt="" className='inline'/>
                </div>


                <div className='w-full lg:w-[32%] text-center h-72 overflow-hidden rounded-lg flex-shrink-0 mb-2'>
                    <img src={img_12} alt="" className='inline'/>
                </div>

                <div className='w-full lg:w-[32%] text-center h-72 overflow-hidden rounded-lg flex-shrink-0 mb-2'>
                    <img src={img_13} alt="" className='inline'/>
                </div>
                <div className='w-full lg:w-[32%] text-center h-72 overflow-hidden rounded-lg flex-shrink-0 mb-2'>
                    <img src={img_14} alt="" className='inline' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio