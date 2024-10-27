"use client"
import React from 'react'
import Header from '../Components/header'
import Link from 'next/link'
import { motion } from 'framer-motion';
export default function page() {
  return (
    <div className=' flex  flex-col justify-evenly   sm:p-16 mx-14 '>
       <Header/>
      <h1 className='text-center font-semibold text-4xl mt-20'> My Skills </h1>
      <motion.p initial={{ y:200,opacity:0,scale:0}} animate={{ y: 0,opacity:1,scale:1}}
  transition={{duration:2, ease:"anticipate" }}p className='text-center  sm:text-lg p-7 text-neutral-700' >Discover everything I excel at in one place! Explore comprehensive skills covering Web development, blockchain, business analysis, carbon credits and more, tailored for your success.</motion.p>

      <div className='  sm:flex justify-between'>
      <motion.div initial={{ y:200,opacity:0,scale:0
      }} whileInView={{ y: 0,opacity:1,scale:1}}
  transition={{duration:2, ease:"anticipate" }} className=' mt-7 h-[650] w-[350] ring-1 flex flex-col items-center space-y-3  hover:shadow-2xl shadow-xl  ring-gray-100 rounded-lg p-5  hover:-translate-y-2  transition-shadow '>
  <img src="Website_Layers_(1)-transformed.png" width="250"/>
  <h2 className=' text-center text-xl font-semibold  '>Websites </h2> <p className=' text-center'>Refine your Business Models <br/>and generate revenue using<br/> Carbon credits or Bring your  Business online</p><Link href="/" className=' p-3 text-sm bg-black text-white font-semibold w-28 text-center shadow-md shadow-black mt-5 rounded-lg'>More info</Link></motion.div>
       
        <motion.div initial={{ y:200,opacity:0,scale:0}} whileInView={{ y: 0,opacity:1,scale:1}}
  transition={{duration:3, ease:"anticipate" }} className=' mt-7 h-[650] w-[350] ring-1 flex flex-col items-center space-y-3  hover:shadow-2xl shadow-xl  ring-gray-100 rounded-lg p-5  hover:-translate-y-2  transition-shadow '>
  <img src="DeWatermark.ai_1729657241933.png" width="250"/>
  <h2 className=' text-center text-xl font-semibold '>Smart Contracts</h2> <p className=' text-center'>Refine your Business Models <br/>and generate revenue using<br/> Carbon credits or Bring your  Business online</p><Link href="/" className=' p-3 text-sm bg-black text-white font-semibold w-28 text-center shadow-md shadow-black mt-5 rounded-lg'>More info</Link></motion.div>
  <motion.div initial={{ y:100,opacity:0,scale:0}} whileInView={{ y: 0,opacity:1,scale:1}}
  transition={{duration:4, ease:"anticipate" }} className=' mt-7 h-[650] w-[350] ring-1 flex flex-col items-center space-y-3    ring-gray-100 rounded-lg p-5  hover:shadow-2xl shadow-xl hover:-translate-y-2   transition-shadow '>
  <img src="tinywow_remove_watermark_photo_67548827.png" width="300" />
  <h2 className=' text-center text-xl font-semibold '>Business Analysis</h2> <p className=' text-center'>Refine your Business Models <br/>and generate revenue using<br/> Carbon credits or Bring your  Business online</p><Link href="/" className=' p-3 text-sm bg-black text-white font-semibold w-28 text-center shadow-md shadow-black mt-5 rounded-lg'>More info</Link></motion.div>
      </div>
    </div>
  )
}
