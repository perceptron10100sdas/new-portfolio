"use client"
import "./project.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import { SiReact,SiNextdotjs,SiTailwindcss,SiNodedotjs,SiExpress, SiMongodb, SiFirebase, SiFramer } from "react-icons/si";





function useParallax(value, distance) {
  // Clamp the value between 0 and 1 (assuming a value between 0 and 1 represents scroll progress)
  const clampedValue = Math.min(Math.max(value, 0), 1);


  const parallaxValue = -distance * (clampedValue - 0.5);

  return parallaxValue;
}


function Image({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="flex flex-col justify-center items-center  relative h-screen">
      <div className="sm:flex space-x-2 ">
      <div ref={ref} className="relative h-[160px]  w-[320px]  sm:h-[400px]  sm:w-[800px] flex">
        <img src={`/${id}.jpg`}   alt="A London skyscraper" className="rounded-2xl  " />
      
      </div><div className="mx-1 space-y-2 mt-3 flex sm:flex-col justify-center space-x-1">
        
          <SiTailwindcss className='text-sky-600 text-4xl'/>
          {id!=5 && <SiNextdotjs className='text-black text-4xl'/> }{id==2 && <SiMongodb className='text-green-500 text-4xl'/> }
          {id==2 && <SiExpress className='text-black text-4xl'/> }
          
          <SiReact className='text-sky-500 text-4xl'/>
         
          <SiNodedotjs className='text-green-400 text-4xl'/>  {id==2  && <SiFirebase className='text-amber-600 text-4xl'/> }
          {id==3  && <SiFirebase className='text-amber-600 text-4xl'/> }
          {id==3  && <SiFramer className='text-white text-4xl'/> }</div>
        
          </div>
      
      {id==1 && <a href="https://imdb-perceptron10100.vercel.app/" ><motion.h2 style={{ y }} className="text-8xl mb-24 text-white bg-amber-500 p-2 rounded-2xl">IMDb</motion.h2></a> }
      {id==2 && <a href="https://blushhavenhomes.onrender.com/" ><motion.h2 style={{ y }} className="text-8xl mb-24" >ParkSide </motion.h2></a> }
      {id==2 && <motion.p style={{ y }} className="mt-4">Real estate based platform  </motion.p> }
      {id==3 && <a href="https://blip-perceptron10100.vercel.app/" ><motion.h2 style={{ y }} className=" font-extralight text-8xl mb-24 text-red-400">Blip </motion.h2></a> }
      {id==3 && <motion.p style={{ y }} className=" font-extralight text-sm   mt-4">Real Time Social Media platform   </motion.p> }
      {id==4 && <a href="https://google-clone-lyart-gamma.vercel.app/" ><motion.div style={{ y }} className="text-8xl mb-24 flex"><h2 className="text-blue-500">G</h2><h2 className="text-red-500">o</h2><h2 className="text-yellow-500">o</h2><h2 className="text-blue-500">g</h2><h2 className="text-green-500">l</h2><h2 className="text-red-500">e</h2></motion.div></a> }
      {id==4 && <motion.p style={{ y }} className="mt-4">Clone powered by Google search API </motion.p> }
      {id==5 && <a href="https://astounding-kringle-914635.netlify.app/" ><motion.h2 style={{ y }} className="text-6xl sm:text-8xl  mb-24 font-bold ">Starbucks</motion.h2></a> }
      {id==5 && <motion.p style={{ y }} className="mt-4">From where it all began  </motion.p> }
      {id==1 && <motion.p style={{ y }} className="mt-4">Powered by Tmdb API </motion.p> }
    </section>
  );
}

export default function Projects() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {[2, 3, 4, 1, 5].map((image) => (
        <Image id={image} />
      ))}
      

      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}
