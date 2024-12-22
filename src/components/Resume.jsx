import React from 'react';
import img_15 from '../assets/img-15.png';
import img_3 from '../assets/img-3.png';
import img_16 from '../assets/img-16.png';
import img_17 from '../assets/img-17.png';
import img_18 from '../assets/img-18.png';
import img_19 from '../assets/img-19.png';
import img_20 from '../assets/img-20.png';

const Resume = () => {
  return (
    <section className='bg-primary-light  py-20 lg:py-28 overflow-hidden' id='Resume'>
        <div className='max-w-[540px] lg:max-w-[1140px] mx-auto'> 
            <div className='text-center text-white'>
                <span className='relative mb-4 inline-block font-bold  pe-8 ps-8 px-8 text-black bg-gold leading-9 after:content after:block after:absolute after:top-full after:left-3  after:border-t-[10px] after:border-t-gold after:border-r-[10px] after:border-r-transparent after:h-0 after:w-0'>
                    Resume
                </span>
                <h2 className='mb-4  text-2xl lg:text-4xl font-semibold'>
                    My Professional Skills & Experience
                </h2>

                <div className='flex justify-center items-end flex-wrap flex-col lg:flex-row -mx-3'>

                    <div className='w-full lg:w-[32%] px-3 flex-shrink-0 relative -order-1 lg:order-none'>
                        <div className=''>
                            <img src={img_15} alt="" className='max-w-full h-auto inline'/>
                        </div>
                    </div>

                    <div className='w-full lg:w-[32%] flex-shrink-0 px-3 -order-1 mt-6'>
                        <div className='animation-fadeInLeft ' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="300">
                            <ul className='flex flex-wrap'>

                                <li className='bg-white shadow-md w-[120px] p-4 m-2'>
                                    <div className='mb-2'>
                                        <img src={img_3} alt="" className='max-w-full h-auto inline'/>
                                    </div>
                                    <div  className=''>
                                        <h5 className='text-gold text-center text-xl font-semibold'>
                                            <span className=''>90</span>
                                            <span>%</span>
                                        </h5>
                                    </div>
                                </li>

                                <li className='bg-white shadow-md w-[120px] p-4 m-2'>
                                    <div className='mb-2'>
                                        <img src={img_16} alt="" className='max-w-full h-auto inline'/>
                                    </div>
                                    <div  className=''>
                                        <h5 className='text-gold text-center text-xl font-semibold'>
                                            <span className=''>90</span>
                                            <span>%</span>
                                        </h5>
                                    </div>
                                </li>



                                <li className='bg-white shadow-md w-[120px] p-4 m-2'>
                                    <div className='mb-2'>
                                        <img src={img_17} alt="" className='max-w-full h-auto inline'/>
                                    </div>
                                    <div  className=''>
                                        <h5 className='text-gold text-center text-xl font-semibold'>
                                            <span className=''>90</span>
                                            <span>%</span>
                                        </h5>
                                    </div>
                                </li>

                                <li className='bg-white shadow-md w-[120px] p-4 m-2'>
                                    <div className='mb-2'>
                                        <img src={img_18} alt="" className='max-w-full h-auto inline'/>
                                    </div>
                                    <div  className=''>
                                        <h5 className='text-gold text-center text-xl font-semibold'>
                                            <span className=''>90</span>
                                            <span>%</span>
                                        </h5>
                                    </div>
                                </li>


                                <li className='bg-white shadow-md w-[120px] p-4 m-2'>
                                    <div className='mb-2'>
                                        <img src={img_19} alt="" className='max-w-full h-auto inline'/>
                                    </div>
                                    <div  className=''>
                                        <h5 className='text-gold text-center text-xl font-semibold'>
                                            <span className=''>90</span>
                                            <span>%</span>
                                        </h5>
                                    </div>
                                </li>

                                <li className='bg-white shadow-md w-[120px] p-4 m-2'>
                                    <div className='mb-2'>
                                        <img src={img_20} alt="" className='max-w-full h-auto inline'/>
                                    </div>
                                    <div  className=''>
                                        <h5 className='text-gold text-center text-xl font-semibold'>
                                            <span className=''>90</span>
                                            <span>%</span>
                                        </h5>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className='w-full lg:w-[32%] flex-shrink-0 px-3 mt-6 ord'>
                        <div className='animate-fadeInRight pl-12 ml-0 lg:ml-8' data-aos="fade-left" data-aos-duration="1000" data-aos-offset="300">
                            <ul className=''>
                                <li className='mb-5 flex flex-wrap relative text-left before:content before:h-4 before:w-4 before:rounded-full before:bg-gold before:absolute before:top-1 before:-left-9   after:content after:absolute after:bg-gold after:top-8 after:-left-8 after:w-[3px] after:h-[80%]'>
                                    <div className=''>
                                        <p className=''>2019</p>
                                    </div>
                                    <div>
                                        <h5 className='text-gold text-xl'>Ui / Ux Designer</h5>
                                        <p>
                                            Conveniently and proacveunique and ideasyuse producton.
                                        </p>
                                    </div>
                                </li>

                                <li className='mb-5 flex flex-wrap relative text-left before:content before:h-4 before:w-4 before:rounded-full before:bg-gold before:absolute before:top-1 before:-left-9   after:content after:absolute after:bg-gold after:top-8 after:-left-8 after:w-[3px] after:h-[80%]'>
                                    <div className=''>
                                        <p className=''>2020</p>
                                    </div>
                                    <div>
                                        <h5 className='text-gold text-xl'>Senior Designer</h5>
                                        <p>
                                            Conveniently and proacveunique and ideasyuse producton.
                                        </p>
                                    </div>
                                </li>

                                <li className='mb-5 flex flex-wrap relative text-left before:content before:h-4 before:w-4 before:rounded-full before:bg-gold before:absolute before:top-1 before:-left-9   after:content after:absolute after:bg-gold after:top-8 after:-left-8 after:w-[3px] after:h-[80%]'>
                                    <div className=''>
                                        <p className=''>2022</p>
                                    </div>
                                    <div>
                                        <h5 className='text-gold text-xl'>Senior Product Designer</h5>
                                        <p>
                                            Conveniently and proacveunique and ideasyuse producton.
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