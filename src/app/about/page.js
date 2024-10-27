"use client"
import React from 'react'
import Header from '../Components/header'
import { motion } from 'framer-motion'
export default function page() {
  return (
    <div className='flex  flex-col justify-evenly space-y-12   sm:p-16 mx-4 sm:mx-14 '>
        <Header/>
     <div className=' bg-neutral-200 sm:p-12 p-4 mt-4 sm:flex  justify-between rounded-xl '>
        <div>
        <motion.h1 initial={{ y:200,opacity:0}} animate={{ y: 0,opacity:1}}
  transition={{duration:1.5, ease:"anticipate" }} className=' font-bold text-3xl sm:text-5xl  mt-5'>About me</motion.h1>
        <motion.p initial={{ y:200,opacity:0}} animate={{ y: 0,opacity:1}}
  transition={{duration:5, ease:"anticipate" }} className=' text-sm sm:text-lg font-semibold text-gray-700  mt-12 '>Greetings! I'm Sambhav, a versatile professional <br/> with a diverse skill set. <br/>As the Manager of Business Operations at Newrup<br/> Tech Solutions, Bhubaneswar, I oversee and optimize<br/> various business processes. Beyond my managerial role,<br/> I am proficient full-stack web developer and blockchain developer,<br/> specializing in the Internet Computer Protocol (ICP) chain. My<br/> expertise in carbon credits further allows me to help<br/> organizations capitalize on their carbon offset initiatives.</motion.p>
</div><motion.img initial={{ y:200,opacity:0}} animate={{ y: 0,opacity:1}}
  transition={{duration:3, ease:"anticipate" }} src='WhatsApp Image 2024-10-19 at 1.50.41 PM.jpeg' width="400px" className=' rounded-lg mt-6 sm:mt-0'/>
     </div>
     <h1 className='text-black text-center text-4xl font-semibold mb-3'>Brands I have worked with.</h1>
<motion.div initial={{ y:200,opacity:0}} whileInView={{ y: 0,opacity:1}}
  transition={{duration:0.7, ease:"anticipate" }} className=' bg-black rounded-xl grid p-7 justify-center'><img src="/logo-BNoRCuZj.svg" width="200" className=" brightness-90 grayscale backdrop-brightness-105 "/></motion.div>
    </div>
  )
}
