import React from 'react';
import daylad_1 from './../assets/daylad_1.png'
import daylad_2 from './../assets/daylad_2.png'
import trust_1 from './../assets/trust_1.png'
import trust_2 from './../assets/trust_2.png'
import wave_1 from './../assets/wave_1.png'
import wave_2 from './../assets/wave_2.png'

import ee_1 from './../assets/ee_1.png'
import ee_2 from './../assets/ee_2.png'

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
                    {/* <li  className='text-white font-semibold cursor-pointer p-3'>Mobile</li>
                    <li  className='text-white font-semibold cursor-pointer p-3'>Website</li>
                    <li  className='text-white font-semibold cursor-pointer p-3'>Animation</li>
                    <li  className='text-white font-semibold cursor-pointer p-3'>Exclusive</li> */}
                </ul>
            </div>
            <div className='relative flex flex-col lg:flex-row flex-wrap justify-between '>

                <div className='w-full lg:w-[32%]  text-center  flex-shrink-0 mb-2'>
                    <div className="bg-gradient-to-br from-green-400 via-teal-500 to-blue-600 p-2 overflow-hidden relative rounded-lg">
                        <img src={daylad_1} alt="" className='max-w-full h-auto inline rounded-lg'/>
                        <img src={daylad_2} alt="" className='max-w-full h-auto inline-block mb-1 -mt-12 rounded-lg'/>
                        <a href='https://dayladexpo.com.ng/' target='_blank' className={`w-full inline-block text-center font-semibold border  bg-transparent border-gold text-gold rounded-lg py-4 px-8 transition-all duration-300 hover:bg-gold hover:text-white`}>Visit Site</a>
                   </div>
                </div>

                <div className='w-full lg:w-[32%]  text-center  flex-shrink-0 mb-2'>
                    <div className="bg-gradient-to-br from-green-400 via-teal-500 to-blue-600 p-2 overflow-hidden relative rounded-lg">
                        <img src={trust_1} alt="" className='max-w-full h-auto inline rounded-lg'/>
                        <img src={trust_2} alt="" className='max-w-full h-auto inline-block mb-1 -mt-12 rounded-lg'/>
                        <a href='https://trust-platformfinance.vercel.app/' target='_blank' className={`w-full inline-block text-center font-semibold border  bg-transparent border-gold text-gold rounded-lg py-4 px-8 transition-all duration-300 hover:bg-gold hover:text-white`}>Visit Site</a>
                   </div>
                </div>

                <div className='w-full lg:w-[32%] text-center  flex-shrink-0 mb-2'>
                    <div className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-2 overflow-hidden relative rounded-lg">
                        <img src={wave_1} alt="" className='max-w-full h-auto inline rounded-lg'/>
                        <img src={wave_2} alt="" className='max-w-full h-auto inline-block mb-1 -mt-5 rounded-lg'/>
                        <a href='https://wavehub.com.ng/' target='_blank' className={` w-full inline-block text-center font-semibold border  bg-transparent border-gold text-gold rounded-lg py-4 px-8 transition-all duration-300 hover:bg-gold hover:text-white`}>Visit Site</a>
                   </div>
                </div>

                <div className='w-full lg:w-[32%] text-center  flex-shrink-0 mb-2'>
                    <div className="bg-gradient-to-tr from-yellow-400 via-orange-500 to-red-500 p-2 overflow-hidden relative rounded-lg">
                        <img src={ee_1} alt="" className='max-w-full h-auto inline rounded-lg'/>
                        <img src={ee_2} alt="" className='max-w-full h-auto inline-block mb-1 -mt-12 rounded-lg'/>
                        <a href='https://allbrighttechd.onrender.com/' target='_blank' className={`w-full inline-block text-center font-semibold border  bg-transparent border-primary text-white rounded-lg py-4 px-8 transition-all duration-300 hover:bg-gold hover:text-white`}>Visit Site</a>
                   </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio