import React from 'react';
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';
import me from './../assets/me.png'
import resume from './../assets/Godwin-Inyene-resume.pdf'

const Hero = () => {
  return (
    <section id="Home" className='bg-primary h-auto lg:h-screen py-12  overflow-hidden  relative before:content before:hidden  lg:before:block before:absolute before:top-0 before:left-2/4  before:w-full before:h-full  before:bg-primary-light'>
        {/*Social Icons start */}
        <ul className='hidden lg:flex flex-wrap flex-col gap-4 absolute top-[24%] left-[15px]' data-aos='fade' data-aos-delay='600'>
            <li>
                <a href="https://www.linkedin.com/in/godwin-inyene-598714233 " className='inline-block w-10 h-10 leading-10 text-center text-base font-normal text-gold bg-white transition-all duration-300 hover:bg-gold hover:text-black'>
                    <FaLinkedin className='text-base inline'/>
                </a>
            </li>

            <li>
                <a href="https://github.com/godwininyene" className='inline-block w-10 h-10 leading-10 text-center text-base font-normal text-gold bg-white transition-all duration-300 hover:bg-gold hover:text-black'>
                    <FaGithub className='text-base inline'/>
                </a>
            </li>

            <li>
                <a href="https://web.facebook.com/godwin.inyene.5/" className='inline-block w-10 h-10 leading-10 text-center text-base font-normal text-gold bg-white transition-all duration-300 hover:bg-gold hover:text-black'>
                    <FaFacebook className='text-base inline'/>
                </a>
            </li>
            <li>
                <a href="mailto:godwinhigh2@gmail.com" className='inline-block w-10 h-10 leading-10 text-center text-base font-normal text-gold bg-white transition-all duration-300 hover:bg-gold hover:text-black'>
                    <FaEnvelope className='text-base inline'/>
                </a>
            </li>
        </ul>
        {/*Social Icons End */}


         {/*Banner Start */}
        <div className='max-w-[540px] lg:max-w-[1140px] mx-auto w-full'>
            <div className=''>

            
                <div className='flex flex-wrap -mx-[12px]'>
                    {/*Left Content Start */}
                    <div className='flex-shrink-0 w-full lg:w-[58.3%] px-[32px]'>
                        <div className='animate-fadeInLeft' >
                            <span className='text-white font-medium text-base'>
                                Welcome My Portfolio
                            </span>
                            <h2 className=' text-4xl lg:text-6xl text-white font-semibold mb-4'>
                                Hello, I‘m Godwin Inyene 
                                <br/>
                                <span className='text-gold'>Professional</span> 
                                <br/>
                                Full-stack Developer
                            </h2>
                            <p className='text-white mb-8 text-base max-w-xl'>
                                A full-stack developer passionate about crafting seamless, scalable,
                                and user-friendly web solutions. From intuitive interfaces to robust back-end systems,
                                I bring ideas to life with clean code and a creative touch.
                            </p>
                            <div className='flex lg:gap-5 items-center font-normal'>
                            <Link to={`Contact`} activeClass={'text-gold'}spy={true} smooth={true} offset={0} duration={1000} className='inline-block rounded-sm font-semibold bg-gold leading-[46px] px-4 lg:px-8 border-2 border-transparent  transition-all duration-300 ease-in hover:border-gold hover:bg-transparent hover:text-gold cursor-pointer'>Hire Me</Link>
                            <a href={resume} download={true} className='inline-block rounded-sm font-semibold bg-transparent leading-[46px] px-4 lg:px-8 border-2 border-white ml-4  text-white transition-all duration-300 ease-in hover:border-gold hover:bg-gold hover:text-black'>Download Cv</a>
                            </div>
                        </div>
                    </div>
                    {/*Left Content End */}


                    {/*Right Content Start */}
                    <div className='hidden lg:block flex-shrink-0 w-[41%]'>
                        <div className='absolute z-[5] before:content before:block before:absolute before:top-[50px] before:-left-[80px] before:h-[80px] before:w-[80px] before:z-[3]      after:content after:h-[80px] after:w-[80px] after:absolute after:block after:left-[632px] after:bottom-[167px] after:z-[4]'>
                            <div className='-mb-[50px] animate-fadeUp relative before:content before:block before:absolute before:bottom-0  before:-left-[59px] before:w-[634px] before:h-[634px] before:z-[3] before:rounded-[50%] before:bg-primary           after:content after:block after:absolute after:bottom-0 after:-left-[42px] after:w-[600px] after:h-[600px] after:z-[4] after:rounded-[50%] after:bg-primary-light'>
                               <div className='w-full overflow-hidden mr-5'>
                                <img src={me} alt="" className='relative z-[5] w-full' />
                               </div>
                            </div>

                            {/* <div className='absolute -left-[42%] bottom-[20%] z-[9] animate-shakeX'>
                                <img src={img_2} alt="" className='max-w-full h-auto' />
                            </div>

                            <div className='absolute -left-[19%] top-[15%] z-[9] animate-shakeY w-[80px] rounded bg-primary text-cent p-4'>
                                <img src={img_3} alt="" className='max-w-full h-auto' />
                            </div>

                            <div className='absolute -right-[20%] top-[29%] z-[9] animate-swing w-[100px] rounded bg-primary text-cent p-4'>
                                <img src={img_4} alt="" className=' w-full h-auto' />
                            </div> */}
                        </div>
                    </div>
                    {/*Right Content End */}
                </div>
            </div>
        </div>
        {/*Banner End */}
    </section>
  )
}

export default Hero