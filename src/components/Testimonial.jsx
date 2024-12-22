import React from 'react';
import img_21 from '../assets/img-21.png';

const Testimonial = () => {
  return (
    <section className='bg-primary  py-20 lg:py-28 overflow-hidden' id='Client'>
        <div className='max-w-[540px] lg:max-w-[1140px] mx-auto'> 
           <div className='flex flex-col lg:flex-row'>
               {/* Left Content Start */}
               <div className='w-full lg:w-2/4 mt-12 px-6'>
                    <div className='animation-fadeInRight' data-aos="fade-left" data-aos-offset="400">
                        <div className=' mb-12'>
                           
                            <span className='relative mb-4 inline-block font-bold  pe-8 ps-8 px-8 text-black bg-gold leading-9 after:content after:block after:absolute after:top-full after:left-3  after:border-t-[10px] after:border-t-gold after:border-r-[10px] after:border-r-transparent after:h-0 after:w-0'>
                                Testimonial
                            </span>
                            <h2 className='mb-4  text-2xl lg:text-4xl font-semibold max-w-xs text-white'>
                                What Our Client Say About Us
                            </h2>
                          
                        </div>

                        <div className='overflow-hidden swiper'>
                            <div className="swiper-wrapper">

                                <div className="swiper-slide">
                                    <div className="testimonial_item text-white">
                                        <figure>
                                            <blockquote className="blockquote font-normal mb-4">
                                                <p>Conveniently customize proactive web services for leveraged
                                                    without
                                                    continuaery services aggregate fricctionle ou wellies
                                                    richard.and very
                                                    aggregate fricctionle ou wellies customize continually..</p>
                                            </blockquote>
                                            <figcaption className="blockquote-footer">
                                                <h4 className=' font-semibold  text- lg:text-2xl '>Jhon Doe</h4>
                                                <p className='text-[#6c757d]'>Co-Founder</p>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>



                                <div className="swiper-slide">
                                    <div className="testimonial_item text-white">
                                        <figure>
                                            <blockquote className="blockquote font-normal mb-4">
                                                <p>Conveniently customize proactive web services for leveraged
                                                    without
                                                    continuaery services aggregate fricctionle ou wellies
                                                    richard.and very
                                                    aggregate fricctionle ou wellies customize continually..</p>
                                            </blockquote>
                                            <figcaption className="blockquote-footer">
                                                <h4 className=' font-semibold  text- lg:text-2xl '>Jhon Doe</h4>
                                                <p className='text-[#6c757d]'>Co-Founder</p>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>


                                

                            </div>
                        </div>
                    </div>
               </div>
                {/* Left Content End */}
              

                {/* Right Content Start */}
                <div className='w-full lg:w-2/4 mt-12 px-6'>
                    <div className='fadeInLeft' data-aos="fade-right" data-aos-offset="400">
                        <img src={img_21} alt="" />
                    </div>
                </div>
                {/* Right Content End */}
           </div>
        </div>
    </section>
  )
}

export default Testimonial