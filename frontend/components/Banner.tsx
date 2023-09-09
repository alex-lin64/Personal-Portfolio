import React from 'react'
import { motion } from 'framer-motion'

const Banner = () => {
  return (
    <section 
      id='home' 
      className='max-w-contentContainer mx-auto py-10 mdl:py24 flex flex-col 
        gap-4 lgl:gap8 mdl:px-10 xl:px4'>
        <motion.h3 
          initial={{ y:10, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5, delay: 1 }}
          className='text-lg font-titleFont tracking-wide text-textGreen'
        >
          Hi, my name is
        </motion.h3>
        <motion.h1
          initial={{ y:10, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5, delay: 1.1 }}
          className='text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col'
        >
          Alex Lin.{" "} 
          <span className='text-textDark mt-2 lgl:mt-4'>
            Software Engineer, ML/AI Practitioner, Real Estate Entrepreneur
          </span>
        </motion.h1>
        <motion.p 
          initial={{ y:10, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5, delay: 1.1 }}
          className='text-base md:max-w-[650px] text-textDark font-medium'
        >
          I am a junior at Brown University studying Computer Science and 
          Applied Mathematics. I specialize in systems engineering, the MERN stack,
          and various deep learning.  

          In my spare time you can find me on the tennis courts, traveling around 
          the world, or finding the next "hidden gem" restaurant wherever I am.

          I am always open to collaborate with companies, researchers, or peers 
          who share my drive for innovation.{" "}
          
          <a href='' target='_blank'>
            <span className='text-textGreen inline-flex relative cursor-pointer 
              h-7 overflow-x-hidden group'
            > 
              Let's create something amazing together.
              <span className='absolute w-full h-[1px] bg-textGreen left-0 bottom-1 
                -translate-x-[110%] group-hover:translate-x-0 transition-transform 
                duration-500'/>
            </span>
          </a>
        </motion.p>
        <motion.button 
          initial={{ y:10, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5, delay: 1.1 }}
          className='w-52 h-14 text-sm font-titleFont border border-textGreen 
            rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300'
        >
          Peep My Projects
        </motion.button>
      </section>
  )
}

export default Banner