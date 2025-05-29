import React from 'react';
import { motion } from "motion/react"
import team1 from '../../assets/team/team1.jpg'
import team2 from '../../assets/team/team2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 p-5 my-10">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    {/* <motion.img 
    initial ={{ opacity : 0 , scale : 0.70}}  transition={{ type: "keyframes"  , duration : 1}} animate={{ scale: 1 , opacity : 1}}
    //  whileHover={{ scale: 1.2 }}
     whileTap={{ scale: 0.9 }}
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl"
    /> */}
   <div className="flex-1">
     <motion.img 
     transition={ { duration : 6 , repeat : Infinity }}
     animate = {{
      y :[0, 60 , 0] 
     }}
     src={team1} 
    className="max-w-sm rounded-t-[50px] rounded-br-[50px] shadow-2xl border-s-8 border-b-8 border-sky-300 "
    alt="" />

    <motion.img
    transition={ { duration : 10 , repeat : Infinity }}
     animate = {{
      x :[100, 150 , 100] }}
     src={team2} 
    className="max-w-72 rounded-t-[50px] rounded-br-[50px] shadow-2xl border-s-8 border-b-8 border-sky-300 "
    alt="" />

   </div>

    <motion.div 
        initial = {{
            y : 80,
            opacity : 0,
              // boxShadow: "0px 0px #000" 
        }}
         animate = {{
       transition : { duration : 0.6},
        y : 0,
        opacity : 1,
        // boxShadow: "10px 10px #000",
    }}
    
    viewport={{once : true}}
    //  exit={{ y: -10, opacity: 0 }}
    // style={{
    // }}
    className='flex-1'
    >
      <h1 className="text-5xl font-bold">Box Office <motion.span 
        animate = {{color : ['#ca079e' , '#d40d34' , '#2c8add' , '#FFC300'] , transition : {duration : 5 ,repeat : Infinity }}} >
        News!</motion.span></h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <motion.button 
     whileTap={{ scale: 0.95 }} className='border p-2 bg-blue-600  rounded-lg cursor-pointer'>Get Started</motion.button>
    </motion.div>
  </div>
</div>
    );
};

export default Banner;