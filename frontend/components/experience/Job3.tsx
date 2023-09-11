import React from 'react'
import { motion } from "framer-motion"
import { FiChevronsRight } from 'react-icons/fi'

const Job3 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ delay: 0.1}}
      className='w-full'
    >
      <h3 className='flex gap-2 font-small text-xl font-titleFont'>
        Avionics Lead <span className='text-textGreen tracking-wide'>@ Brown Space Engineering</span>
      </h3>
      <p className='text-sm mt-1 font-medium text-textDark'>
        Sep. 2022 - Present
      </p>
      <ul className='mt-6 flex flex-col gap-3'>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <FiChevronsRight />
          </span>
          Developed training materials and successfully trained team members in 
          circuit design and electronics.
        </li>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <FiChevronsRight />
          </span>
          Designed circuitry for battery management, IO board, and driver board 
          using Eagle CAD software.
        </li>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <FiChevronsRight />
          </span>
          Programmed power management chip IC in C. 
        </li>
      </ul>
      
    </motion.div>
  )
}

export default Job3