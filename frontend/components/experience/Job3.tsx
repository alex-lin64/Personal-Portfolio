import React from 'react'
import { motion } from "framer-motion"
import { TiArrowForward } from 'react-icons/ti'

const Job3 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ delay: 0.1}}
      className='w-full'
    >
      <h3 className='flex gap-2 font-small text-xl font-titleFont'>
        Position 3 <span className='text-textGreen tracking-wide'>@Job 3</span>
      </h3>
      <p className='text-sm mt-1 font-medium text-textDark'>
        Start - End
      </p>
      <ul className='mt-6 flex flex-col gap-3'>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum 
          dolor sit amet consectetur adipisicing elit. 
        </li>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum 
          dolor sit amet consectetur adipisicing elit. 
        </li>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum 
          dolor sit amet consectetur adipisicing elit. 
        </li>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum 
          dolor sit amet consectetur adipisicing elit. 
        </li>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum 
          dolor sit amet consectetur adipisicing elit. 
        </li>
      </ul>
      
    </motion.div>
  )
}

export default Job3