"use client"
import React from 'react'
import Header from '../Components/header'
import { motion } from 'framer-motion'
import Link from 'next/link'
export default function website() {
  return (
    <div className=' flex  flex-col justify-evenly   sm:p-16 mx-14 '>
    <Header/>
   <h1 className='text-center font-semibold text-4xl mt-20'> My Smart Contracts</h1>
   <motion.p initial={{ y:200,opacity:0,scale:0}} animate={{ y: 0,opacity:1,scale:1}}
transition={{duration:2, ease:"anticipate" }}p className='text-center  sm:text-lg p-7 text-neutral-700' >Witness blockchain innovation in action! Explore secure and efficient smart contracts, from decentralized voting systems to automated business solutions, built for real-world impact.</motion.p>

<div className='  flex justify-center'>
      <motion.div initial={{ y:200,opacity:0,scale:0
      }} animate={{ y: 0,opacity:1,scale:1}}
  transition={{duration:2, ease:"anticipate" }} className=' mt-7 h-[510px]  w-full sm:w-[340px] ring-1 items-center flex flex-col    hover:shadow-2xl shadow-xl  ring-gray-100 rounded-lg p-7 hover:-translate-y-2  transition-shadow '>
  <img src="9436275.jpg" width="210"/>
  <h2 className=' text-center text-xl font-semibold mt-4  '>Voting Proposal</h2> 
  <motion.p initial={{ y:100,opacity:0,scale:0}} whileInView={{ y: 0,opacity:1,scale:1}}
  transition={{duration:3, ease:"anticipate" }} className=' text-center mt-2  text-sm text-neutral-700 '>Engineered a secure decentralized voting system powered by Rust and Internet Computer, revolutionizing digital democracy</motion.p>
  <motion.p initial={{ y:-100,scale:0}} whileInView={{ y: 0,scale:1}}  transition={{duration:2, ease:"anticipate" }}
  className='text-start mt-2 text-sm  font-bold'>Check out the Websites!</motion.p>
<div className='mt-5 p-2 justify-between space-x-3'><Link href="https://g7nzx-oiaaa-aaaaj-aztiq-cai.icp0.io/" className=' p-3  text-sm  bg-white text-black font-semibold w-28 text-center  ring-1 ring-black   rounded-lg'>Frontend.</Link><Link href="https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=gym7d-dqaaa-aaaaj-aztia-cai" className=' p-3  text-sm  bg-black text-white font-semibold w-28 text-center   rounded-lg'>Backend.</Link></div></motion.div></div></div>
  )}