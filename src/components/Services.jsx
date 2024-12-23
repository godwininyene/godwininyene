import React from 'react';
import img_5 from  '../assets/img-5.png';
import img_6 from  '../assets/img-6.png';
import img_7 from  '../assets/img-7.png';
import img_8 from  '../assets/img-8.png';
import { Link } from 'react-scroll';

const Services = () => {
    const services = [
        {
            id:0,
            service_avatar:img_5,
            title:"Perfomance",
            desc:"By hiring me, you’ll receive high-performance web applications where scalability and efficiency are never a worry."
        },
        {
            id:1,
            service_avatar:img_6,
            title:"Responsive Design",
            desc:"When you hire me, you'll get a fully responsive website that delivers an excellent experience across all devices."
        },
        {
            id:2,
            service_avatar:img_7,
            title:"Security",
            desc:"When you hire me, you'll get a secure web application with robust protection against potential threats and vulnerabilities."
        },
        {
            id:3,
            service_avatar:img_8,
            title:"Creativity",
            desc:"When you hire me, you'll surely be glad you did."
        },
    ]
  return (
    <section className='bg-primary-light  py-20 lg:py-28 overflow-hidden' id='Benefits'>
        <div className='max-w-[540px] lg:max-w-[1140px] mx-auto'>
            <div className='flex items-center flex-col lg:flex-row-reverse'>
                {/* Left Conent Start */}
                <div className='w-full lg:w-2/4 mt-6  px-6 lg:px-3 text-white'>
                   <div className='ml-0 lg:ml-8 max-w-[80%]'>
                        <span className='font-bold relative mb-4 inline-block  pe-8 ps-8 px-8 text-black bg-gold leading-9 after:content after:block after:absolute after:top-full after:left-3 after:border-t-[10px] after:border-t-gold after:border-r-[10px] after:border-r-transparent after:h-0 after:w-0'>
                            Why Hire Me?
                        </span>
                        <h2 className='mb-4 text-2xl font-semibold'>
                            I deliver comprehensive full-stack solutions tailored to your digital needs.
                        </h2>
                        <p className='mb-8 font-light leading-7'>
                            While many focus on singular solutions, I design secure, efficient,
                            and user-friendly systems combining integration and innovative problem-solving
                            for a seamless experience.
                        </p>
                        <Link to={`Contact`} activeClass={'text-gold'}spy={true} smooth={true} offset={0} duration={1000}  className='inline-block font-semibold text-black rounded-sm bg-gold leading-[46px] px-4 lg:px-8 border-2 border-transparent transition-all duration-300 ease-in hover:border-gold hover:bg-transparent hover:text-gold cursor-pointer'>Hire Me</Link>
                   </div>
                </div>
                {/* Left Conent End */}

                {/* Right Conent Start */}
                <div className={`w-full lg:w-2/4 mt-12   px-6 lg:px-3`}>
                    <div className='flex flex-wrap -mx-3 -mt-6'>
                        {services.map(service=>(
                            <div key={service.id} data-aos="fade-up" data-aos-duration="300" className={`w-full md:w-2/4 flex-shrink-0  mt-3 lg:mt-5 px-3 ${service.id %2 !==0? 'lg:transform lg:translate-y-10' : ''}`}>
                             <div className='bg-primary rounded-lg text-center text-white h-full'>
                                <div className='p-[30px]'>
                                    <div className='mb-5'>
                                         <img src={service.service_avatar} alt="" className='inline-block'/>
                                    </div>
                                    <div className=''>
                                        <h5 className='mb-3 font-semibold text-xl'>{service.title}</h5>
                                        <p className='font-light'> {service.desc} </p>
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