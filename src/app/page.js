"use client"
import Image from 'next/image'
import Header from './Components/header'
import Link from 'next/link'
import { motion } from 'framer-motion'
export default function Home() {

  return (
    <main className="flex  flex-col justify-evenly  space-y-20 p-1 sm:p-10 mx-14">
      <Header/>
      <div className='grid sm:flex  justify-between  items-center '><div className=' grid space-y-5'>
        <motion.h1 initial={{ y:200,opacity:0}} whileInView={{ y: 0,opacity:1}}
  transition={{duration:1.5, ease:"anticipate" }} className=' font-bold text-4xl sm:text-5xl'>Blockchain,<br/>Full Stack Developer <br/> and Business Analyst.</motion.h1>
        <motion.p initial={{ opacity:0}} whileInView={{ opacity:1}}
  transition={{duration:2, ease:"anticipate" }} className=' font-sans  sm:text-lg text-neutral-500 '>Hey, I'm Sambhav Das—an adept Developer and Manager. With<br/> over years of honing skills in web design, development,<br/> and amplifying brand presence, I excel where creativity<br/> converges with business acumen.</motion.p>
        </div>
<motion.img initial={{ y:200,scale:0}} animate={{ y:0,scale:1}}
  transition={{duration:3, ease:"anticipate" }} src="/7uCnshj6jYorV2kgAL1uVJJHu5M.avif" width="600" className=" mt-7 sm:mt-0"/></div>
<div>
<h1 className='text-black text-center text-4xl font-semibold mb-3'>Brands I have worked with.</h1>
<motion.div initial={{ y:200,opacity:0}} whileInView={{ y: 0,opacity:1}}
  transition={{duration:2, ease:"anticipate" }} className=' bg-black rounded-xl grid p-7 justify-center'><img src="/logo-BNoRCuZj.svg" width="200" className=" brightness-90 grayscale backdrop-brightness-105 "/></motion.div></div>
<div className=' grid space-y-9 sm:space-y-0 sm:flex justify-evenly'><motion.div initial={{ y:200,opacity:0,scale:0}} whileInView={{ y: 0,opacity:1,scale:1}}
  transition={{duration:1, ease:"anticipate" }} className=' flex flex-col items-center space-y-3 ring-1 ring-gray-400 rounded-lg p-4 shadow-md hover:-translate-y-2 hover:shadow-lg'>
  <img src="kR7YZ0tfAThPw4l0YAkja7zjw.avif" width="250" className=''/>
  <h2 className=' text-center text-xl font-semibold'>Skills</h2>
  <p className=' text-center '>Refine your Business Models <br/> and generate revenue using Carbon credits <br/>or Bring your Business online</p>
  <Link href="/skills" className=' p-3 text-sm bg-black text-white font-semibold w-28 text-center shadow-black mt-5 rounded-lg'>More info</Link></motion.div>
  <motion.div initial={{ y:200,opacity:0,scale:0}} whileInView={{ y: 0,opacity:1,scale:1}}
  transition={{duration:1, ease:"anticipate" }} className=' ring-1 flex flex-col space-y-3 items-center ring-gray-400 rounded-lg p-4 shadow-md hover:-translate-y-2 hover:shadow-lg'>
  <img src="X0VqvgGMcMEj9CoZKYM1RNw16Jw.avif" width="250"/>
  <h2 className=' text-center text-xl font-semibold'>Projects</h2> <p className=' text-center'>Refine your Business Models <br/>and generate revenue using Carbon credits<br/> or Bring your Business online</p><Link href="/" className=' p-3 text-sm bg-black text-white font-semibold w-28 text-center shadow-md shadow-black mt-5 rounded-lg'>More info</Link></motion.div>
  <motion.div initial={{ y:200,opacity:0,scale:0}} whileInView={{ y: 0,opacity:1,scale:1}}
  transition={{duration:1, ease:"anticipate" }} className=' ring-1 flex flex-col items-center space-y-3  hover:shadow-2xl shadow-xl  ring-gray-400 rounded-lg p-4  hover:-translate-y-2  '>
  <img src="CeqXQeUUWP97YS2AtwfPpjl4Q.avif" width="250"/>
  <h2 className=' text-center text-xl font-semibold '>Connect</h2> <p className=' text-center'>Refine your Business Models <br/>and generate revenue using<br/> Carbon credits or Bring your  Business online</p><Link href="/" className=' p-3 text-sm bg-black text-white font-semibold w-28 text-center shadow-md shadow-black mt-5 rounded-lg'>More info</Link></motion.div></div>
    </main>
  )
}
