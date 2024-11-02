"use client"
import React from 'react'
import Header from '../Components/header'
import { motion } from 'framer-motion'
import Link from 'next/link'
export default function page() {
  return (
    <div className=' flex  flex-col justify-evenly space-y-7   sm:p-16 mx-14 '>
       <Header/>
      <h1 className='text-center font-semibold text-4xl mt-20'> My Skills </h1>
      <motion.p initial={{ y:200,opacity:0,scale:0}} animate={{ y: 0,opacity:1,scale:1}}
  transition={{duration:2, ease:"anticipate" }}p className='text-center  sm:text-lg  text-neutral-700' >Discover everything I excel at in one place! Explore comprehensive skills covering Web development, blockchain, business analysis, carbon credits and more, tailored for your success.</motion.p>

      <div className='  sm:flex justify-between'>
      <motion.div initial={{ y:200,opacity:0,scale:0
      }} whileInView={{ y: 0,opacity:1,scale:1}}
  transition={{duration:1, ease:"anticipate" }} className=' mt-7 h-full  sm:h-[490px]  w-full sm:w-[340px] ring-1 items-center flex flex-col    hover:shadow-2xl shadow-xl  ring-gray-100 rounded-lg p-7 hover:-translate-y-2  transition-shadow '>
  <img src="Website_Layers_(1)-transformed.png" width="250"/>
  <h2 className=' text-center text-xl font-semibold mt-3  '>Websites </h2> 
  <motion.p initial={{ y:100,opacity:0,scale:0}} whileInView={{ y: 0,opacity:1,scale:1}}
  transition={{duration:4, ease:"anticipate" }} className=' text-center mt-2  text-sm text-neutral-700 '>Create Websites which are responsive,premium  and Bring your Business online</motion.p>
  <motion.p initial={{ y:-100,scale:0}} whileInView={{ y: 0,scale:1}}  transition={{duration:4, ease:"anticipate" }}
  className='text-start mt-2 text-sm  font-bold'>Check out the Websites!</motion.p>
<Link href="/websites" className=' p-3 text-sm  bg-black text-white font-semibold w-28 text-center  mt-4 rounded-lg'>More info</Link></motion.div>
<motion.div initial={{ y:200,opacity:0,scale:0
      }} whileInView={{ y: 0,opacity:1,scale:1}}
  transition={{duration:1, ease:"anticipate" }} className=' mt-7 h-full  sm:h-[490px] w-full sm:w-[340px] ring-1 items-center flex flex-col    hover:shadow-2xl shadow-xl  ring-gray-100 rounded-lg p-7 hover:-translate-y-2  transition-shadow '>
  <img src="DeWatermark.ai_1729657241933.png"  width="250"/>
  <h2 className=' text-center text-xl font-semibold mt-3  '>Smart Contracts </h2> 
  <motion.p initial={{ y:100,opacity:0,scale:0}} whileInView={{ y: 0,opacity:1,scale:1}}
  transition={{duration:4, ease:"anticipate" }} className=' text-center mt-2  text-sm text-neutral-700 '>Build trustless,efficient Smart Contracts that automate and revolutionize your business </motion.p>
  <motion.p initial={{ y:-100,scale:0}} whileInView={{ y: 0,scale:1}}
  transition={{duration:4, ease:"anticipate" }} className=' text-start mt-2 text-sm  font-bold'>Check out the smart contracts!</motion.p>
<Link href="/blockchain" className=' p-3 text-sm  bg-black text-white font-semibold w-28 text-center shadow-md shadow-black mt-4 rounded-lg'>More info</Link></motion.div> 
       
  <motion.div initial={{ y:100,opacity:0,scale:0}} whileInView={{ y: 0,opacity:1,scale:1}}
  transition={{duration:4, ease:"anticipate" }} className=' mt-7 h-full  sm:h-[490px] w-full sm:w-[340px] ring-1 flex flex-col items-center     ring-gray-100 rounded-lg  p-8  hover:shadow-2xl shadow-xl hover:-translate-y-2   transition-shadow '>
  <img src="tinywow_remove_watermark_photo_67548827.png" width="300" />
  <h2 className=' text-center text-xl font-semibold mt-8 '>Business Analysis </h2> 
  <motion.p initial={{ y:100,opacity:0,scale:0}} whileInView={{ y: 0,opacity:1,scale:1}}
  transition={{duration:4, ease:"anticipate" }} className=' text-center mt-2  text-sm text-neutral-700 '>Convert complex business challenges into clear solutions that maximize your company's potential</motion.p>
  <motion.p initial={{ y:-100,scale:0}} whileInView={{ y: 0,scale:1}}  transition={{duration:4, ease:"anticipate" }} className=' text-start mt-2 text-sm  font-bold'>Check out the scopes!</motion.p>
<Link href="/business" className=' p-3 text-sm  bg-black text-white font-semibold w-28 text-center  mt-4 rounded-lg'>More info</Link></motion.div>
      </div>
    </div>
  )
}
