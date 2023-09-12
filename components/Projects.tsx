import React from 'react'
import Image from 'next/image'
import { AiOutlineYoutube } from 'react-icons/ai'
import { TbBrandGithub } from 'react-icons/tb'

import SectionTitle from './SectionTitle'
import { cshell_img, evmap_img, squatty_gif } from '@/public/assets'


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
                className="w-full h-full object-contain rounded-lg h-full object-cover border: 3px"
                src={squatty_gif}
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
              to track squats and record your squat count.  A punishment mode can 
              be activated, "encouraging" you to complete squats at specified 
              intervals. Keep squatting, or you&apos;ll feel the consequences!{"  "}
              <span className='text-xs text-textGreen'>  
                ** the water gun is triggered automatically
              </span>
            </p>
            <ul className='text-xs md:text-sm font-titleFont tracking-wide flex 
              gap-2 md:gap-5 justify-between text-textDark'>
                <li>Tensorflow Keras</li>
                <li>Mediapipe</li>
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
            href='https://github.com/alex-lin64/Efficient-Vision-Model-Analysis-Pipeline' 
            target='_blank'
          >
            <div>
              <Image 
                className="w-full h-full object-contain rounded-lg h-full object-cover border: 3px"
                src={evmap_img}
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
              <h3 className='text-2xl font-bold'>Efficient Vision Model Analysis Pipeline</h3>
            </div>
            <p className='bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md'>
              The pipeline aims to coalesce the difficulty of analyzing different 
              off-the-shelf models with a
              <span className='text-textGreen'> single framework </span> to quickly 
              switch models and datasets in order to get to the important task: 
              gathering data. This project was completed under the guidance of 
              Boston Fusion Corp and aids in their completion of their proposal funded 
              by{" "}
              <a href='https://www.darpa.mil/program/environment-driven-conceptual-learning' target='_blank'>
                <span className='text-textGreen inline-flex relative cursor-pointer 
                  h-7 overflow-x-hidden group'
                > 
                  DARPA&apos;s BAA Ecole.
                  <span className='absolute w-full h-[1px] bg-textGreen left-0 bottom-1 
                    -translate-x-[110%] group-hover:translate-x-0 transition-transform 
                    duration-500'/>
                </span>
              </a>
            </p>
            <ul className='text-xs md:text-sm font-titleFont tracking-wide flex 
              gap-2 md:gap-5 justify-between text-textDark'>
                <li>YOLOv7</li>
                <li>Pytorch</li>
                <li>FiftyOne</li>
                <li>CVAT</li>
                <li>NVidia Triton</li>
            </ul>
            <div className='text-2xl flex gap-4'>
              <a 
                className='hover:text-textGreen duration-300'
                href='https://github.com/alex-lin64/Efficient-Vision-Model-Analysis-Pipeline'
                target='_blank'
              >
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </div>
        {/* project 3 */}
        <div className='flex flex-col xl:flex-row gap-6'>
          <a 
            className='w-full xl:w-1/2 h-auto relative group' 
            href='https://github.com/alex-lin64/C-Shell' 
            target='_blank'
          >
            <div>
              <Image 
                className="w-full h-full object-contain rounded-lg h-full object-cover border: 3px"
                src={cshell_img}
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
              <h3 className='text-2xl font-bold'>C Shell</h3>
            </div>
            <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
              C Shell implements the most common shell features from the seemless 
              handling of signals, spawning new processes, to input/output redirection 
              and more!  Some of the commands implemented are ln, rm, cd, fg, bg, etc.
            </p>
            <ul className='text-xs md:text-sm font-titleFont tracking-wide flex 
              gap-2 md:gap-5 justify-between text-textDark'>
                <li>C</li>
                <li>GDB</li>
                <li>Shell</li>
                <li>Python</li>
            </ul>
            <div className='text-2xl flex gap-4'>
              <a 
                className='hover:text-textGreen duration-300'
                href='https://github.com/alex-lin64/C-Shell'
                target='_blank'
              >
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects