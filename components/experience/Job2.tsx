import React from 'react'
import { motion } from "framer-motion"
import { FiChevronsRight } from 'react-icons/fi'

const Job2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ delay: 0.1}}
      className='w-full'
    >
      <h3 className='flex gap-2 font-small text-xl font-titleFont'>
        Data Analyst <span className='text-textGreen tracking-wide'>@ Boston Medical Data Science</span>
      </h3>
      <p className='text-sm mt-1 font-medium text-textDark'>
        Jun. 2022 - Aug. 2022
      </p>
      <ul className='mt-6 flex flex-col gap-3'>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <FiChevronsRight />
          </span>
          Utilized C#, Linq, and AgilityPack to scrape websites, generating a 
          dataset for medical product development
        </li>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <FiChevronsRight />
          </span>
          Managed and automated MongoDB database maintenance, ensuring the timely 
          update of outdated information.
        </li>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <FiChevronsRight />
          </span>
          Employed geocoding techniques for semantic matching with street addresses, 
          improving data accuracy.
        </li>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <FiChevronsRight />
          </span>
          Conducted statistical and probability-related research on Conditional 
          Random Fields and Word2Vec to enhance semantic matching in phrases. 
        </li>
      </ul>
      
    </motion.div>
  )
}

export default Job2