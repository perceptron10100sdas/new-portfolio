"use client"
import React from 'react'
import Header from '../Components/header'
import { motion } from 'framer-motion'
import Link from 'next/link'
export default function website() {
  return (
    <div className=' flex  flex-col justify-evenly   sm:p-16 mx-14 '>
    <Header/>
   <h1 className='text-center font-semibold text-4xl mt-20'> My Websites </h1>
   <motion.p initial={{ y:200,opacity:0,scale:0}} animate={{ y: 0,opacity:1,scale:1}}
transition={{duration:2, ease:"anticipate" }}p className='text-center  sm:text-lg p-7 text-neutral-700' >Experience innovation through my diverse portfolio! From coffee platforms to real estate solutions, explore websites that showcase user-centric design and seamless functionality.</motion.p>

<div className='  sm:flex justify-between'>
      <motion.div initial={{ y:200,opacity:0,scale:0
      }} whileInView={{ y: 0,opacity:1,scale:1}}
  transition={{duration:2, ease:"anticipate" }} className=' mt-7 h-[505px]  sm:h-[490px] w-[290px] sm:w-[340px] ring-1 items-center flex flex-col    hover:shadow-2xl shadow-xl  ring-gray-100 rounded-lg p-7 hover:-translate-y-2  transition-shadow '>
  <img src="Social_media-transformed.png" width="210"/>
  <h2 className=' text-center text-xl font-semibold mt-3  '>BLIP </h2> 
  <motion.p initial={{ y:100,opacity:0,scale:0}} whileInView={{ y: 0,opacity:1,scale:1}}
  transition={{duration:4, ease:"anticipate" }} className=' text-center mt-2  text-sm text-neutral-700 '>Connect, share, and engage with friends through a seamless platform that brings social networking to life</motion.p>
  <motion.p initial={{ y:-100,scale:0}} whileInView={{ y: 0,scale:1}}  transition={{duration:3, ease:"anticipate" }}
  className='text-start mt-2 text-sm  font-bold'>Check out the Websites!</motion.p>
<div className='mt-4 p-2 justify-between space-x-3'><Link href="https://github.com/perceptron10100sdas/BLIP" className=' p-3  text-sm  bg-white text-black font-semibold w-28 text-center  ring-1 ring-black   rounded-lg'>Source code</Link><Link href="https://blip-perceptron10100.vercel.app/" className=' p-3  text-sm  bg-black text-white font-semibold w-28 text-center   rounded-lg'>Live at.</Link></div></motion.div>
<motion.div initial={{ y:200,opacity:0,scale:0
      }} whileInView={{ y: 0,opacity:1,scale:1}}
  transition={{duration:2, ease:"anticipate" }} className=' mt-7  h-[505px]  sm:h-[490px] w-[290px] sm:w-[340px] ring-1 items-center flex flex-col    hover:shadow-2xl shadow-xl  ring-gray-100 rounded-lg p-7 hover:-translate-y-2  transition-shadow '>
  <img src="Searching_Real_Estate-transformed.png"  width="450" className=' mt-20'/>
  <h2 className=' text-center text-xl font-semibold mt-3  '>ParkSide </h2> 
  <motion.p initial={{ y:100,opacity:0,scale:0}} whileInView={{ y: 0,opacity:1,scale:1}}
  transition={{duration:4, ease:"anticipate" }} className=' text-center mt-2  text-sm text-neutral-700 '>Discover your dream home with an intuitive platform that simplifies property search and real estate decisions</motion.p>
  <motion.p initial={{ y:-100,scale:0}} whileInView={{ y: 0,scale:1}}
  transition={{duration:3, ease:"anticipate" }} className=' text-start mt-2 text-sm  font-bold'>Find your perfect place!</motion.p>
<div className='mt-4 p-2 justify-between space-x-3'><Link href="https://github.com/perceptron10100sdas/Mern-real-estate-project" className=' p-3  text-sm  bg-white text-black font-semibold w-28 text-center  ring-1 ring-black   rounded-lg'>Source code</Link><Link href="https://blushhavenhomes.onrender.com/" className=' p-3  text-sm  bg-black text-white font-semibold w-28 text-center   rounded-lg'>Live at.</Link></div></motion.div> 
       
  <motion.div initial={{ y:100,opacity:0,scale:0}} whileInView={{ y: 0,opacity:1,scale:1}}
  transition={{duration:1, ease:"anticipate" }} className=' mt-7  h-[505px]  sm:h-[490px] w-[290px] sm:w-[340px] ring-1 flex flex-col items-center     ring-gray-100 rounded-lg  p-8  hover:shadow-2xl shadow-xl hover:-translate-y-2   transition-shadow '>
  <img src="5720761.jpg" width="220" />
  <h2 className=' text-center text-xl font-semibold mt-8 '>Imdb </h2> 
  <motion.p initial={{ y:100,opacity:0,scale:0}} whileInView={{ y: 0,opacity:1,scale:1}}
  transition={{duration:3, ease:"anticipate" }} className=' text-center mt-2  text-sm text-neutral-700 '>Explore thousands of movies, ratings, and reviews in a comprehensive platform for cinema enthusiasts</motion.p>
  <motion.p initial={{ y:-100,scale:0}} whileInView={{ y: 0,scale:1}}  transition={{duration:2, ease:"anticipate" }} className=' text-start mt-2 text-sm  font-bold'>Grab some popcorns!</motion.p>
  <div className='mt-4 p-2 justify-between space-x-3'><Link href="https://github.com/perceptron10100sdas/imdb" className=' p-3  text-sm  bg-white text-black font-semibold w-28 text-center  ring-1 ring-black   rounded-lg'>Source code</Link><Link href="https://imdb-perceptron10100.vercel.app/" className=' p-3  text-sm  bg-black text-white font-semibold w-28 text-center   rounded-lg'>Live at.</Link></div></motion.div>
      </div>
      <div className=' sm:flex justify-around sm:mt-4'>
      <motion.div initial={{ y:100,opacity:0,scale:0}} whileInView={{ y: 0,opacity:1,scale:1}}
  transition={{duration:1, ease:"anticipate" }} className=' mt-7 h-[505px]  sm:h-[490px] w-[290px] sm:w-[340px] ring-1 flex flex-col items-center     ring-gray-100 rounded-lg  p-8  hover:shadow-2xl shadow-xl hover:-translate-y-2   transition-shadow '>
  <img src="3944966.jpg" width="220" />
  <h2 className=' text-center text-xl font-semibold mt-8 '>Google</h2> 
  <motion.p initial={{ y:100,opacity:0,scale:0}} whileInView={{ y: 0,opacity:1,scale:1}}
  transition={{duration:3, ease:"anticipate" }} className=' text-center mt-2  text-sm text-neutral-700 '>Search and discover the web effortlessly with a powerful platform that delivers instant, relevant results</motion.p>
  <motion.p initial={{ y:-100,scale:0}} whileInView={{ y: 0,scale:1}}  transition={{duration:2, ease:"anticipate" }} className=' text-start mt-2 text-sm  font-bold'>Do the right thing!</motion.p>
  <div className='mt-4 p-2 justify-between space-x-3'><Link href="https://github.com/perceptron10100sdas/google-clone" className=' p-3  text-sm  bg-white text-black font-semibold w-28 text-center  ring-1 ring-black   rounded-lg'>Source code</Link><Link href="https://google-clone-lyart-gamma.vercel.app/" className=' p-3  text-sm  bg-black text-white font-semibold w-28 text-center   rounded-lg'>Live at.</Link></div></motion.div>
<motion.div initial={{ y:100,opacity:0,scale:0}} whileInView={{ y: 0,opacity:1,scale:1}}
  transition={{duration:1, ease:"anticipate" }} className=' mt-7 h-[505px]  sm:h-[490px] w-[290px] sm:w-[340px] ring-1 flex flex-col items-center     ring-gray-100 rounded-lg  p-8  hover:shadow-2xl shadow-xl hover:-translate-y-2   transition-shadow '>
  <img src="7495699.jpg" width="220" />
  <h2 className=' text-center text-xl font-semibold mt-8 '>Starbucks</h2> 
  <motion.p initial={{ y:100,opacity:0,scale:0}} whileInView={{ y: 0,opacity:1,scale:1}}
  transition={{duration:3, ease:"anticipate" }} className=' text-center mt-2  text-sm text-neutral-700 '>Where my journey began: Crafted a premium coffee platform that reimagines the Starbucks digital experience</motion.p>
  <motion.p initial={{ y:-100,scale:0}} whileInView={{ y: 0,scale:1}}  transition={{duration:2, ease:"anticipate" }} className=' text-start mt-2 text-sm  font-bold'>Grab your Gold Sip!</motion.p>
<div className='mt-4 p-2 justify-between space-x-3'><Link href="https://github.com/perceptron10100sdas/starbucks" className=' p-3  text-sm  bg-white text-black font-semibold w-28 text-center  ring-1 ring-black   rounded-lg'>Source code</Link><Link href="https://astounding-kringle-914635.netlify.app/" className=' p-3  text-sm  bg-black text-white font-semibold w-28 text-center   rounded-lg'>Live at.</Link></div></motion.div>
</div>
 </div>
  )
}
