"use client"
import React from 'react'
import Header from '../Components/header'
import { motion } from 'framer-motion'
import Link from 'next/link'
export default function website() {
  return (
    <div className=' flex  flex-col justify-evenly   sm:p-16 mx-14 '>
    <Header/>
   <h1 className='text-center font-semibold text-4xl mt-20'> My Business Accumen </h1>
   <motion.p initial={{ y:200,opacity:0,scale:0}} animate={{ y: 0,opacity:1,scale:1}}
transition={{duration:2, ease:"anticipate" }}p className='text-center  sm:text-lg p-7 text-neutral-700' >Experience strategic business excellence in action! From operational optimization to market analysis, discover comprehensive solutions that transform challenges into lasting success.</motion.p>

<div className='  sm:flex justify-between'>
      <motion.div initial={{ y:200,opacity:0,scale:0
      }} animate={{ y: 0,opacity:1,scale:1}}
  transition={{duration:2, ease:"anticipate" }} className=' mt-7 h-[510px]  w-full sm:w-[340px] ring-1 items-center flex flex-col    hover:shadow-2xl shadow-xl  ring-gray-100 rounded-lg p-7 hover:-translate-y-2  transition-shadow '>
  <img src="5244722.jpg" width="210"/>
  <h2 className=' text-center text-xl font-semibold mt-4  '>Carbon Credits</h2> 
  <motion.p initial={{ y:100,opacity:0,scale:0}} whileInView={{ y: 0,opacity:1,scale:1}}
  transition={{duration:3, ease:"anticipate" }} className=' text-center mt-2  text-sm text-neutral-700 '>Transform environmental challenges into profitable opportunities through strategic carbon credit trading<br/> and green initiatives</motion.p>
  <motion.p initial={{ y:-100,scale:0}} whileInView={{ y: 0,scale:1}}  transition={{duration:2, ease:"anticipate" }}
  className='text-start mt-2 text-sm  font-bold'>Carbon Credits what's that!</motion.p>
<div className='mt-5 p-2 justify-between space-x-3'><Link href="https://www.investopedia.com/terms/c/carbon_credit.asp" className=' p-3  text-sm  bg-black text-white font-semibold w-28 text-center     rounded-lg'>More info.</Link></div></motion.div>
<motion.div initial={{ y:200,opacity:0,scale:0
      }} animate={{ y: 0,opacity:1,scale:1}}
  transition={{duration:2, ease:"anticipate" }} className=' mt-7 h-[510px]  w-full sm:w-[340px] ring-1 items-center flex flex-col    hover:shadow-2xl shadow-xl  ring-gray-100 rounded-lg p-7 hover:-translate-y-2  transition-shadow '>
  <img src="hr_1.jpg" width="210"/>
  <h2 className=' text-center text-xl font-semibold mt-4  '>Human Resource</h2> 
  <motion.p initial={{ y:100,opacity:0,scale:0}} whileInView={{ y: 0,opacity:1,scale:1}}
  transition={{duration:3, ease:"anticipate" }} className=' text-center mt-2  text-sm text-neutral-700 '>Streamline workforce management and talent development through data-driven strategies that maximize human capital potential</motion.p>
  <motion.p initial={{ y:-100,scale:0}} whileInView={{ y: 0,scale:1}}  transition={{duration:2, ease:"anticipate" }}
  className='text-start mt-2 text-sm  font-bold'>Manage purpose!</motion.p>
<div className='mt-5 p-2 justify-between space-x-3'><Link href="https://www.techtarget.com/searchhrsoftware/definition/human-resource-management-HRM" className=' p-3  text-sm  bg-black text-white font-semibold w-28 text-center   rounded-lg'>More info.</Link></div></motion.div>
<motion.div initial={{ y:200,opacity:0,scale:0
      }} animate={{ y: 0,opacity:1,scale:1}}
  transition={{duration:2, ease:"anticipate" }} className=' mt-7 h-[510px]  w-full sm:w-[340px] ring-1 items-center flex flex-col    hover:shadow-2xl shadow-xl  ring-gray-100 rounded-lg p-7 hover:-translate-y-2  transition-shadow '>
  <img src="3498796.jpg" width="210"/>
  <h2 className=' text-center text-xl font-semibold mt-4  '>Business Management</h2> 
  <motion.p initial={{ y:100,opacity:0,scale:0}} whileInView={{ y: 0,opacity:1,scale:1}}
  transition={{duration:3, ease:"anticipate" }} className=' text-center mt-2  text-sm text-neutral-700 '>Optimize business operations and strategic planning through innovative solutions that drive sustainable market growth</motion.p>
  <motion.p initial={{ y:-100,scale:0}} whileInView={{ y: 0,scale:1}}  transition={{duration:2, ease:"anticipate" }}
  className='text-start mt-2 text-sm  font-bold'>Create the unicorns,decacorns!</motion.p>
<div className='mt-5 p-2 justify-between space-x-3'><Link href="https://online.uc.edu/blog/what-is-business-management/" className=' p-3  text-sm  bg-black text-white font-semibold w-28 text-center   rounded-lg'>More info.</Link></div></motion.div></div></div>
  )}