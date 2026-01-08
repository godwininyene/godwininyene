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
    <section className='bg-primary-light py-20 lg:py-28 overflow-hidden' id='Resume'>
      <div className='max-w-[540px] lg:max-w-[1140px] mx-auto'> 
        <div className='text-white'>

          {/* ===== Header ===== */}
          <div className='text-center mb-12'>
            <span className='relative mb-4 inline-block font-bold px-8 text-black bg-gold leading-9 after:content after:block after:absolute after:top-full after:left-3 after:border-t-[10px] after:border-t-gold after:border-r-[10px] after:border-r-transparent after:h-0 after:w-0'>
              Resume
            </span>
            <h2 className='mb-4 text-2xl lg:text-4xl font-semibold'>
              My Professional Skills & Experience
            </h2>
            <p className='font-light max-w-full px-4 lg:px-0 lg:max-w-[80%] mx-auto text-center'>
              My true strength lies in programming languages and frameworks defined in the Core section below,
              but I also work comfortably with the technologies listed in the secondary section.
            </p>
          </div>


          <div className='flex justify-center items-start flex-wrap flex-col lg:flex-row -mx-3'>

            {/* ===== Skills Section ===== */}
            <div className='w-full lg:w-[50%] flex-shrink-0 px-[22px] -order-1 mt-6'>
              <div data-aos="fade-right" data-aos-duration="300" data-aos-offset="100">
                
                <h2 className='text-2xl text-[rgb(209,213,219)] relative inline-block mb-4'>CORE</h2>

                <ul className='flex flex-wrap mb-5'>
                  {[ 
                    {name:'HTML', img:html}, {name:'CSS', img:css}, {name:'JavaScript', img:js},
                    {name:'Tailwind', img:tailwind}, {name:'React', img:react}, {name:'Node.js', img:node},
                    {name:'MongoDB', img:mongodb}, {name:'GitHub', img:github}
                  ].map((skill, i) => (
                    <li key={i} className='bg-white shadow-md w-[100px] p-2 m-2'>
                      <h5 className='text-gold text-center text-xl font-semibold'>{skill.name}</h5>
                      <div className='mb-2'>
                        <img src={skill.img} alt={skill.name} className='max-w-full h-auto inline'/>
                      </div>
                    </li>
                  ))}
                </ul>

                <h2 className='text-2xl text-[rgb(209,213,219)] relative inline-block mb-4'>OTHERS</h2>
                <ul className='flex flex-wrap'>
                  {[php, laravel, mysql].map((img, i) => (
                    <li key={i} className='bg-white shadow-md w-[100px] p-2 m-2'>
                      <div className='mb-2'>
                        <img src={img} alt="" className='max-w-full h-auto inline'/>
                      </div>
                    </li>
                  ))}
                </ul>

              </div>
            </div>


            {/* ===== Experience Timeline ===== */}
            <div className='w-full lg:w-[50%] flex-shrink-0 px-3 mt-6'>
              <div className='pl-12 ml-0 lg:ml-8' data-aos="fade-left" data-aos-duration="300" data-aos-offset="100">
                <ul>

                  <li className='mb-5 relative text-left before:content before:h-4 before:w-4 before:rounded-full before:bg-gold before:absolute before:top-1 before:-left-9 after:content after:absolute after:bg-gold after:top-8 after:-left-8 after:w-[3px] after:h-[80%]'>
                    <p>2022</p>
                    <h5 className='text-gold text-xl'>Frontend Developer @Thrinkle Lab Limited</h5>
                    <p className='font-light border-b border-b-gold'>
                      Designed and developed responsive user interfaces that enhanced user engagement by 30%.
                    </p>
                    <p className='font-light'>
                      Optimized website performance, reducing load times by 40% through efficient coding practices.
                    </p>
                  </li>

                  <li className='mb-5 relative text-left before:content before:h-4 before:w-4 before:rounded-full before:bg-gold before:absolute before:top-1 before:-left-9 after:content after:absolute after:bg-gold after:top-8 after:-left-8 after:w-[3px] after:h-[80%]'>
                    <p>2023</p>
                    <h5 className='text-gold text-xl'>Web Developer @Procity</h5>
                    <p className='font-light border-b border-b-gold'>
                      Built scalable web applications with seamless integration of front-end and back-end systems.
                    </p>
                    <p>
                      Streamlined workflows by automating processes, increasing team productivity by 25%.
                    </p>
                  </li>

                  {/* ===== Teaching Experience ===== */}
                  <li className='mb-5 relative text-left before:content before:h-4 before:w-4 before:rounded-full before:bg-gold before:absolute before:top-1 before:-left-9 after:content after:absolute after:bg-gold after:top-8 after:-left-8 after:w-[3px] after:h-[80%]'>
                    <p>2023 – Present</p>
                    <h5 className='text-gold text-xl'>Web Development Instructor / Programming Tutor</h5>
                    <p className='font-light border-b border-b-gold'>
                      Trained students in HTML, CSS, JavaScript (ES6+), and React.js using real-world, project-based learning.
                    </p>
                    <p>
                      Designed structured lessons on DOM manipulation, APIs, and frontend workflows while mentoring students to build complete web applications.
                    </p>
                  </li>

                  <li className='mb-5 relative text-left before:content before:h-4 before:w-4 before:rounded-full before:bg-gold before:absolute before:top-1 before:-left-9 after:content after:absolute after:bg-gold after:top-8 after:-left-8 after:w-[3px] after:h-[80%]'>
                    <p>2024</p>
                    <h5 className='text-gold text-xl'>Web Developer @Procity</h5>
                    <p className='font-light border-b border-b-gold'>
                      Delivered a secure, high-performing application used by multiple users daily.
                    </p>
                    <p>
                      Implemented robust security protocols, safeguarding sensitive data and ensuring compliance.
                    </p>
                  </li>

                </ul>
              </div>
            </div>

          </div>


          {/* ===== Mentorship / Training Section ===== */}
          <div className='mt-20 text-center'>
            <h2 className='text-2xl lg:text-3xl font-semibold text-gold mb-4'>
              Mentorship & Training
            </h2>

            <p className='max-w-4xl mx-auto text-gray-300 mb-8'>
              Beyond building software, I actively mentor and train aspiring developers, helping them grow from fundamentals 
              into confident programmers capable of building real-world applications.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left'>

              <div className='bg-primary p-5 rounded-lg shadow'>
                <h4 className='text-gold font-semibold mb-2'>Frontend Foundations</h4>
                <p className='text-sm'>
                  Teaching HTML, CSS, JavaScript (ES6+), responsive design, and clean coding practices.
                </p>
              </div>

              <div className='bg-primary p-5 rounded-lg shadow'>
                <h4 className='text-gold font-semibold mb-2'>Modern JavaScript & React</h4>
                <p className='text-sm'>
                  Guiding students through DOM manipulation, APIs, state management, and React application development.
                </p>
              </div>

              <div className='bg-primary p-5 rounded-lg shadow'>
                <h4 className='text-gold font-semibold mb-2'>Project-Based Mentorship</h4>
                <p className='text-sm'>
                  Mentoring learners to build real projects such as dashboards, websites, and full-stack applications.
                </p>
              </div>

              <div className='bg-primary p-5 rounded-lg shadow'>
                <h4 className='text-gold font-semibold mb-2'>Career & Code Guidance</h4>
                <p className='text-sm'>
                  Supporting students with best practices, debugging skills, Git usage, and software development workflows.
                </p>
              </div>

            </div>
          </div>


        </div>
      </div>
    </section>
  )
}

export default Resume
