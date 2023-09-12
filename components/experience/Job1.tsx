import React from 'react'
import { motion } from "framer-motion"
import { FiChevronsRight } from 'react-icons/fi'

const Job1 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ delay: 0.1}}
      className='w-full'
    >
      <h3 className='flex gap-2 font-small text-xl font-titleFont'>
        Research Programmer <span className='text-textGreen tracking-wide'>@ Boston Fusion Corp</span>
      </h3>
      <p className='text-sm mt-1 font-medium text-textDark'>
        Jun. 2023 - Aug. 2023
      </p>
      <ul className='mt-6 flex flex-col gap-3'>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <FiChevronsRight />
          </span>
          Implemented a state-of-the-art object detection pipeline.
        </li>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <FiChevronsRight />
          </span>
          Enhanced and implemented machine learning models, complete with a 
          tailored API for conducting remote server inferences.
        </li>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <FiChevronsRight />
          </span>
          Investigated the application of transformers and masking techniques for 
          novel object detection in images through extensive literature review 
          and experimentation. 
        </li>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <FiChevronsRight />
          </span>
          Designed the baseline system for Boston Fusion&apos;s research proposal to 
          DARPA&apos;s broad agency announcement ECOLE.
        </li>
      </ul>
    </motion.div>
  )
}

export default Job1