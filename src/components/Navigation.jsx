import React from 'react';
import logo from '../assets/logo.png';
import {LuMenu} from 'react-icons/lu';
import { Link } from 'react-scroll';
const Navigation = () => {

    const[isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = ()=> setIsOpen(prev => !prev);

    const[isFixedClass, setiSFixedClass] = React.useState(false);

    const addFixedClass = ()=> window.pageYOffset > 200 ? setiSFixedClass(true) :setiSFixedClass(false);

    window.addEventListener('scroll', addFixedClass	)
    
    const fixedHeader ={
        position: "fixed",
        top: "0", 
        left: "0",
        width:"100%",
        zIndex: "99",
        borderBottom: "2px solid #FFB400",
        boxShadow:"0 10px 5px rgba(15, 16, 24, 0.1)"
    }
    const nav_items = [
       {id:0,title:"Home"},
       { id:1,title:"Services"},
       {id:2,title:"Portfolio"},
       {id:3,title:"Resume"},
       {id:4,title:"Client"},
       {id:5,title:"Blog"},
       {id:6,title:"Contact"}
    ]

  return (
    <div className={`header bg-primary ${isFixedClass ? 'animate-fadeInDown' :''}`} style={isFixedClass ? fixedHeader : {}}>
       <div className='max-w-[1140px] mx-auto w-full'> 
            <nav className='flex items-center  justify-between flex-wrap lg:flex-nowrap px-5 py-5 relative'>
                <a href="" className='py-2 mr-4'>
                    <img src={logo} alt="" />
                </a>

                {/*Mobile Nav Icon */}
                <button className=' border-0 outline-0 shadow-none block lg:hidden' onClick={toggleMenu}>
                    <LuMenu className='text-3xl text-white'/>
                </button>

                <div className={`${isOpen ? 'h-44': 'h-0'} overflow-hidden lg:h-auto lg:flex items-center basis-full grow transition-all duration-300 ease-linear`}>
                    <ul className='flex-col  lg:flex-row flex items-center ml-auto' id='header-nav'>
                        {nav_items.map((el)=>(
                            <li key={el.id} >
                            <Link to={`${el.title}`} activeClass={'text-gold'}spy={true} smooth={true} offset={0} duration={1000} className={`text-base font-bold ${el.id == 0 ? 'text-gold' : 'text-white'} py-8 px-4 hover:text-gold cursor-pointer`} >{el.title}</Link>
                        </li>
                        ))}
                    </ul>
                    <a href="#" className='hidden lg:inline-block bg-gold leading-[46px]  rounded-sm font-semibold px-8 border-2 border-transparent ml-4 ps-8 pe-8 transition-all duration-300 ease-in hover:border-gold hover:bg-transparent hover:text-gold'>Download Cv</a>
                </div>
            </nav>
       </div>
    </div>
  )
}

export default Navigation