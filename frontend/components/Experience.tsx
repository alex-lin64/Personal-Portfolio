import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import Job1 from './experience/Job1'
import Job2 from './experience/Job2'
import Job3 from './experience/Job3'


const Experience = () => {
  const [BostonFusion, setBostonFusion] = useState(true)
  const [BMDS, setBMDS] = useState(false)
  const [BSE, setBSE] = useState(false)

  const handleBostonFusion = () => {
    setBostonFusion(true);
    setBMDS(false);
    setBSE(false);
  }

  const handleBMDS = () => {
    setBostonFusion(false);
    setBMDS(true);
    setBSE(false);
  }

  const handleBSE = () => {
    setBostonFusion(false);
    setBMDS(false);
    setBSE(true);
  }


  return (
    <section
      id='experience'
      className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4'
    >
      <SectionTitle title="Here Are My Experiences" titleNo="02"/>
      <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
        <ul className='md:w-32 flex flex-col'>
          <li
            onClick={handleBostonFusion} 
            className={`${
              BostonFusion 
                ? "border-l-textGreen text-textGreen" 
                : "text-textDark border-l-hoverColor"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer 
            duration-300 px-8 font-medium`}
          >
            Job 1
          </li>
          <li
            onClick={handleBMDS} 
            className={`${
              BMDS 
                ? "border-l-textGreen text-textGreen" 
                : "text-textDark border-l-hoverColor"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer 
            duration-300 px-8 font-medium`}
          >
            Job 2
          </li>
          <li
            onClick={handleBSE} 
            className={`${
              BSE 
                ? "border-l-textGreen text-textGreen" 
                : "text-textDark border-l-hoverColor"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer 
            duration-300 px-8 font-medium`}
          >
            Job 3
          </li>
        </ul>
        {BostonFusion && <Job1 />}
        {BMDS && <Job2 />}
        {BSE && <Job3 />}
      </div>
    </section>
  )
}

export default Experience