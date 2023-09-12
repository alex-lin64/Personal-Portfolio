import React from 'react'
import Image from 'next/image'
import { AiOutlineYoutube } from 'react-icons/ai'
import { TbBrandGithub } from 'react-icons/tb'
import { RxOpenInNewWindow } from 'react-icons/rx'

import SectionTitle from './SectionTitle'
import { project_placeholder } from '@/public/assets'


const Projects = () => {
  return (
    <section
      id='project'
      className='max-w-container mx-auto lgl:px-20 py-24'
    >
      <SectionTitle title="Latest Projects" titleNo="03"/>
      <div className='w-full flex flex-col items-center justify-between gap-28 mt-10'>
        {/* project 1 */}
        <div className='flex flex-col xl:flex-row gap-6'>
          <a 
            className='w-full xl:w-1/2 h-auto relative group' 
            href='https://github.com/alex-lin64/Squatty' 
            target='_blank'
          >
            <div>
              <Image 
                className="w-full h-full object-contain"
                src={project_placeholder}
                alt="SquattyImg"
              />
            </div>
          </a>
          <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between 
            items-end text-right xl:-ml-16 z-10'>
            <div>
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                Featured Project
              </p>
              <h3 className='text-2xl font-bold'>Squatty</h3>
            </div>
            <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
              Squatty implements <span className='text-textGreen'>pose detection </span> 
              to track squats and record your squat count A punishment mode can 
              be activated, "encouraging" you to complete squats at specified 
              intervals. Keep squatting, or you'll feel the consequences!
            </p>
            <ul className='text-xs md:text-sm font-titleFont tracking-wide flex 
              gap-2 md:gap-5 justify-between text-textDark'>
                <li>Tensorflow Keras</li>
                <li>Mediapipe Pose Detection</li>
                <li>Multithreading</li>
                <li>Arduino</li>
                <li>Python</li>
            </ul>
            <div className='text-2xl flex gap-4'>
              <a 
                className='hover:text-textGreen duration-300'
                href='https://github.com/alex-lin64/Squatty'
                target='_blank'
              >
                <TbBrandGithub />
              </a>
              <a 
                className='hover:text-textGreen duration-300'
                href=''
                target='_blank'
              >
                <AiOutlineYoutube />
              </a>
            </div>
          </div>
        </div>
        {/* project 2 */}
        <div className='flex flex-col xl:flex-row-reverse gap-6'>
          <a 
            className='w-full xl:w-1/2 h-auto relative group' 
            href='https://github.com/alex-lin64/Squatty' 
            target='_blank'
          >
            <div>
              <Image 
                className="w-full h-full object-contain"
                src={project_placeholder}
                alt="Object Detection Pipeline"
              />
            </div>
          </a>
          <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between 
            items-end text-right z-10'>
            <div>
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                Featured Project
              </p>
              <h3 className='text-2xl font-bold'>Squatty</h3>
            </div>
            <p className='bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md'>
              Squatty implements <span className='text-textGreen'>pose detection </span> 
              to track squats and record your squat count A punishment mode can 
              be activated, "encouraging" you to complete squats at specified 
              intervals. Keep squatting, or you'll feel the consequences!
            </p>
            <ul className='text-xs md:text-sm font-titleFont tracking-wide flex 
              gap-2 md:gap-5 justify-between text-textDark'>
                <li>Tensorflow Keras</li>
                <li>Mediapipe Pose Detection</li>
                <li>Multithreading</li>
                <li>Arduino</li>
                <li>Python</li>
            </ul>
            <div className='text-2xl flex gap-4'>
              <a 
                className='hover:text-textGreen duration-300'
                href='https://github.com/alex-lin64/Squatty'
                target='_blank'
              >
                <TbBrandGithub />
              </a>
              <a 
                className='hover:text-textGreen duration-300'
                href=''
                target='_blank'
              >
                <AiOutlineYoutube />
              </a>
            </div>
          </div>
        </div>
        {/* project 3 */}
        <div className='flex flex-col xl:flex-row gap-6'>
          <a 
            className='w-full xl:w-1/2 h-auto relative group' 
            href='https://github.com/alex-lin64/object_detection_pipeline' 
            target='_blank'
          >
            <div>
              <Image 
                className="w-full h-full object-contain"
                src={project_placeholder}
                alt="objectDetectionPipeline"
              />
            </div>
          </a>
          <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between 
              items-end text-right xl:-ml-16 z-10'>
            <div>
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                Featured Project
              </p>
              <h3 className='text-2xl font-bold'>Squatty</h3>
            </div>
            <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
              Squatty implements <span className='text-textGreen'>pose detection </span> 
              to track squats and record your squat count A punishment mode can 
              be activated, "encouraging" you to complete squats at specified 
              intervals. Keep squatting, or you'll feel the consequences!
            </p>
            <ul className='text-xs md:text-sm font-titleFont tracking-wide flex 
              gap-2 md:gap-5 justify-between text-textDark'>
                <li>Tensorflow Keras</li>
                <li>Mediapipe Pose Detection</li>
                <li>Multithreading</li>
                <li>Arduino</li>
                <li>Python</li>
            </ul>
            <div className='text-2xl flex gap-4'>
              <a 
                className='hover:text-textGreen duration-300'
                href='https://github.com/alex-lin64/Squatty'
                target='_blank'
              >
                <TbBrandGithub />
              </a>
              <a 
                className='hover:text-textGreen duration-300'
                href=''
                target='_blank'
              >
                <AiOutlineYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects