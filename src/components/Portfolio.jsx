import React from 'react';

import daylad_1 from './../assets/daylad_1.png'
import daylad_2 from './../assets/daylad_2.png'
import trust_1 from './../assets/trust_1.png'
import trust_2 from './../assets/trust_2.png'
import wave_1 from './../assets/wave_1.png'
import wave_2 from './../assets/wave_2.png'
import hezmart_1 from './../assets/hezmart_1.png'
import hezmart_2 from './../assets/hezmart_2.png'
import realword_1 from './../assets/real-world-1.png'
import realword_2 from './../assets/real-world-2.png'
import winsubz_1 from './../assets/winsubz_1.png'
import winsubz_2 from './../assets/winsubz_2.png'
import baller_2 from './../assets/baller-2.png'
import ee_1 from './../assets/ee_1.png'
import ee_2 from './../assets/ee_2.png'

import shopgo_1 from './../assets/shopgo-1.png'
import shopgo_2 from './../assets/shopgo-2.png'


const projects = [
  {
    name: "YourShopGo – Grocery Shopping Platform",
    purpose: "A subscription-powered grocery concierge platform that simplifies grocery shopping by allowing customers to submit shopping requests, receive quotations, approve orders, make payments, and track deliveries.",
    role: "Architected and developed the complete platform, including subscription management, quotation workflows, Stripe payment processing, webhook-driven billing, order lifecycle management, in-app/email notifications, analytics dashboards, and administrative tools for managing users, orders, subscriptions, quotations, and refunds.",
    stack: "React.js, Node.js, Express.js, MySQL, Sequelize, Stripe, Tailwind CSS, Nodemailer",
    images: [shopgo_1, shopgo_2],
    link: "https://www.yourshopgo.co.uk/"
  },
  {
    name: "Hezmart – E-Commerce Platform",
    purpose: "A full-featured e-commerce platform built to support both web and mobile shopping experiences.",
    role: "Developed the entire system end-to-end, including multi-role management (admin, vendors, customers), secure authentication, vendor dashboards, admin analytics tools, and full payment integration.",
    stack: "React.js, Node.js, Express.js, MySQL, Sequelize, Tailwind CSS, Paystack, Crypto Payments",
    images: [hezmart_1, hezmart_2],
    link: "https://hezmart.com"
  },
   {
    name: "Winsubz – VTU & Data Vending Platform",
    purpose: "A modern VTU platform built for affordable data subscriptions, airtime recharge, cable TV payments, electricity bill payments, and reseller services.",
    role: "Designed and developed the full platform from scratch including user dashboards, wallet funding systems, automated VTU processing, admin analytics, transaction management, push notifications, referral systems, and responsive UI/UX.",
    stack: "React.js, Node.js, Express.js, MySQL, Sequelize, Tailwind CSS, Moniepoint, OneSignal",
    images: [winsubz_1, winsubz_2],
    link: "https://winsubz.com"
  },
  {
    name: "Daylad Expo – Booth Booking Platform",
    purpose: "A responsive expo booth booking system for managing event reservations and exhibitors.",
    role: "Designed and built the complete booking platform with authentication, booking management, and automated email notifications.",
    stack: "Laravel, React.js, MySQL",
    images: [daylad_1, daylad_2],
    link: "https://dayladexpo.com.ng/"
  },

 
  {
    name: "The Real World – Cryptocurrency Investment Platform",
    purpose: "A crypto investment system supporting deposits, withdrawals, and automated profit tracking.",
    role: "Built the full investment platform, including admin dashboards, transaction management systems, and security layers to protect financial operations.",
    stack: "React.js, Node.js, Express.js, MySQL, Sequelize",
    images: [realword_1, realword_2],
    link: "https://jointherealworldd2.com/"
  },
  {
    name: "Trust Platform Finance – Crypto Investment Platform",
    purpose: "A cryptocurrency investment platform designed for user fund management and growth tracking.",
    role: "Developed both frontend and backend, implementing wallet systems, admin controls, transaction monitoring, and encrypted data handling.",
    stack: "React.js, Node.js, Express.js, MySQL, Sequelize",
    images: [trust_1, trust_2],
    link: "https://trust-platform-massive-finance.vercel.app/"
  },
  {
    name: "Wavehub – Blogging & Content Platform",
    purpose: "A full blogging and content management system with moderation features.",
    role: "Built a complete CMS with role-based access (admin/author), post moderation, category management, and comment approval workflows.",
    stack: "React.js, Node.js, MySQL, Sequelize, Tailwind CSS",
    images: [wave_1, wave_2],
    link: "https://wavehub.com.ng/"
  },
  {
    name: "All Bright Technology – Corporate Website",
    purpose: "A modern corporate website built to establish a professional online presence.",
    role: "Designed and developed the full website, delivering responsive layouts, backend setup, and production deployment.",
    stack: "React.js, Node.js, Express.js, Tailwind CSS",
    images: [ee_1, ee_2],
    link: "https://allbrighttechd.onrender.com/"
  }
];


const Portfolio = () => {
  return (
    <section className='bg-primary py-20 lg:py-28 overflow-hidden' id='Portfolio'>
      <div className='max-w-[540px] lg:max-w-[1140px] mx-auto'>

        {/* ===== Section Header ===== */}
        <div className='text-center text-white'>
          <span className='relative mb-4 inline-block font-bold px-8 text-black bg-gold leading-9 after:content after:block after:absolute after:top-full after:left-3 after:border-t-[10px] after:border-t-gold after:border-r-[10px] after:border-r-transparent after:h-0 after:w-0'>
            Portfolio
          </span>

          <h2 className='mb-4 text-2xl lg:text-4xl font-semibold'>
            Some Of My Creative Work
          </h2>

          <p className='max-w-3xl mx-auto mb-12 text-gray-200'>
            I designed and developed all the projects below from start to finish — handling everything from frontend interfaces
            to backend systems, APIs, databases, payments, and deployment.
          </p>
        </div>


        {/* ===== Projects ===== */}
        <div className='relative flex flex-col lg:flex-row flex-wrap justify-center gap-5'>
          {projects.map((project, index) => (
            <div key={index} className='w-full lg:w-[32%] text-center flex-shrink-0 mb-10'>

              <div className="bg-gradient-to-br from-green-400 via-teal-500 to-blue-600 p-2 overflow-hidden relative rounded-lg h-full">

                <img
                  src={project.images[0]}
                  alt={project.name}
                  className='max-w-full h-auto inline rounded-lg'
                />

                <img
                  src={project.images[1]}
                  alt={project.name}
                  className='max-w-full h-auto inline-block mb-1 -mt-12 rounded-lg'
                />

                <div className="bg-primary/95 text-white p-4 rounded-lg mt-3 text-left">
                  <h3 className="font-bold text-lg mb-1 text-gold">{project.name}</h3>
                  <p className="text-sm mb-2">{project.purpose}</p>

                  <p className="text-xs mb-2">
                    <span className="text-gold font-semibold">Role:</span> {project.role}
                  </p>

                  <p className="text-xs">
                    <span className="text-gold font-semibold">Stack:</span> {project.stack}
                  </p>
                </div>

                <a
                  href={project.link}
                  target='_blank'
                  rel="noreferrer"
                  className='w-full inline-block mt-3 text-center font-semibold border bg-transparent border-gold text-gold rounded-lg py-4 px-8 transition-all duration-300 hover:bg-gold hover:text-white'
                >
                  Visit Site
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Portfolio;
