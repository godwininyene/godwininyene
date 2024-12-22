import React from 'react';
import img_5 from  '../assets/img-5.png';
import img_6 from  '../assets/img-6.png';
import img_7 from  '../assets/img-7.png';
import img_8 from  '../assets/img-8.png';


const Services = () => {
    const services = [
        {
            id:0,
            service_avatar:img_5,
            title:"Ui / Ux Design",
            desc:" Conveniently and proacve unique and idene solutions easyuse producton."
        },
        {
            id:1,
            service_avatar:img_6,
            title:" Mobile Apps",
            desc:" Conveniently and proacve unique and idene solutions easyuse producton."
        },
        {
            id:2,
            service_avatar:img_7,
            title:" Website Design",
            desc:" Conveniently and proacve unique and idene solutions easyuse producton."
        },
        {
            id:3,
            service_avatar:img_8,
            title:"Animation",
            desc:" Conveniently and proacve unique and idene solutions easyuse producton."
        },
    ]
  return (
    <section className='bg-primary-light  py-20 lg:py-28 overflow-hidden' id='Services'>
        <div className='max-w-[540px] lg:max-w-[1140px] mx-auto'>
            <div className='flex items-center flex-col lg:flex-row-reverse'>
                {/* Left Conent Start */}
                <div className='w-full lg:w-2/4 mt-6  px-6 lg:px-3 text-white'>
                   <div className='ml-0 lg:ml-8 max-w-[80%]'>
                        <span className='font-bold relative mb-4 inline-block  pe-8 ps-8 px-8 text-black bg-gold leading-9 after:content after:block after:absolute after:top-full after:left-3 after:border-t-[10px] after:border-t-gold after:border-r-[10px] after:border-r-transparent after:h-0 after:w-0'>
                            Services
                        </span>
                        <h2 className='mb-4  text-2xl lg:text-4xl font-semibold'>
                            I Provide Wide Range Of Digital Services.
                        </h2>
                        <p className=' mb-8 font-light leading-7'>
                            While existing solutions offer to solve just one problem at
                            a time our team is up to build a secure, useful, & easy-to-use 
                            product based on integration, and even a digital arbitration system.
                        </p>
                        <a href="#" className='inline-block font-semibold text-black rounded-sm bg-gold leading-[46px] px-4 lg:px-8 border-2 border-transparent ml-4 transition-all duration-300 ease-in hover:border-gold hover:bg-transparent hover:text-gold'>Hire Me</a>
                   </div>
                </div>
                {/* Left Conent End */}

                {/* Right Conent Start */}
                <div className={`w-full lg:w-2/4 mt-12 lg:mt-6  px-6 lg:px-3`}>
                    <div className='flex flex-wrap -mx-3 -mt-6'>
                        {services.map(service=>(
                            <div key={service.id} data-aos="fade-up" data-aos-duration="300" className={`w-full md:w-2/4 flex-shrink-0  mt-3 lg:mt-5 px-3 ${service.id %2 !==0? 'lg:transform lg:translate-y-10' : ''}`}>
                             <div className='bg-primary rounded-lg text-center text-white'>
                                <div className=' p-[30px]'>
                                    <div className='mb-5'>
                                         <img src={service.service_avatar} alt="" className='inline-block'/>
                                    </div>
                                    <div className=''>
                                        <h5 className=' mb-3 font-semibold text-xl'>{service.title}</h5>
                                        <p className=''> {service.desc} </p>
                                    </div>
                                </div>
                             </div>
                         </div>
                        ))}
                    </div>
                </div>
                {/* Right Conent End */}
            </div>
        </div>
    </section>
  )
}

export default Services