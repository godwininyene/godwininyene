/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor : {
        primary: '#1F2235',
        'primary-light':'#24263B',
      },
      colors:{
        gold:"#FFB400",
      },
      animation:{
        fadeUp:'fadeUp 1s linear',
        fadeInLeft:'fadeInLeft 1s linear',
        fadeInRight:'fadeUp 1s linear',
        shakeX:'shakeX 10s linear infinite',
        shakeY:'shakeY 10s linear infinite',
        swing:'swing 10s linear infinite',
        scrollTop:'scrollTop 5s linear infinite',
        fadeInDown:'fadeInDown 1s',
      },
      keyframes:{
        fadeUp:{
          '0%':{opacity:0,transform:'translate3d(0,100%,0)'},
          '100%':{opacity:1,transform:'translate3d(0,0,0)'}
        },
        fadeInDown:{
          '0%':{opacity:0, transform:'translate3d(0, -100%, 0)'},
          '100%':{opacity:1, transform:'translate3d(0 , 0, 0)'}
        },
        fadeInLeft:{
          '0%':{opacity:0,transform:'translate3d(-100%, 0, 0)'},
          '100%':{opacity:1,transform:'translate3d(0,0,0)'}
        },
        fadeInRight:{
          '0%':{opacity:0,transform:'translate3d(100%, 0, 0)'},
          '100%':{opacity:1,transform:'translate3d(0,0,0)'}
        },
        shakeX:{
          '0%, 100%':{transform: 'translate3d(0, 0, 0)'},
          '10%, 30%, 50%, 70%, 90%':{transform: 'translate3d(-10px, 0, 0)'},
          '20%, 40%, 60%, 80%':{transform: 'translate3d(10px, 0, 0)'}
        },
        shakeY:{
          '0%, 100%':{transform: 'translate3d(0, 0, 0)'},
          '10%, 30%, 50%, 70%, 90%':{transform: 'translate3d(0,-10px, 0)'},
          '20%, 40%, 60%, 80%':{transform: 'translate3d(0,10px, 0)'}
        },
        swing:{
          '20%':{transform: 'rotate3d(0,0, 1, 15deg)'},
          '40%':{transform: 'rotate3d(0,0, 1, -10deg)'},
          '60%':{transform: 'rotate3d(0,0, 1, 5deg)'},
          '80%':{transform: 'rotate3d(0,0, 1, -5deg)'},
          '100%':{transform: 'rotate3d(0,0, 1, 0deg)'}
        },
        scrollTop:{
          '0%':{transform: 'translateY(-15px)'},
          '50%':{transform: 'translateY(0px)'},
          '100%':{transform: 'translateY(-15px)'}
        }
      }
    },
  },
  plugins: [],
}

