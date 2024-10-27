import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import Staggered from "./Flyout"
export default function Header() {
  return (
    <div className=' flex justify-between '>
        <div className=' flex space-x-2'>
      <Link href="/" className='font-bold text-xl uppercase'>Sambhav Das</Link>
      <h3 className='font-light mt-[2px] hidden sm:block'> Perceptron 10100.</h3></div>
  <Staggered/>
      <motion.div initial={{ x:100,opacity:0}} animate={{ x: 0,opacity:1}}
  transition={{duration:2, ease:"anticipate" }} className='  space-x-8 hidden sm:flex'>

      <Link href="/about" className=' font-semibold text-sm '>About</Link>
      <Link href="/skills" className=' font-semibold text-sm'>Skills</Link>
      <h1 className=' font-semibold text-sm '>Project</h1>
      <h1 className=' font-semibold text-sm  '>Connect</h1>
      </motion.div>
    </div>
  )
}
