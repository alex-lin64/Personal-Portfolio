import React from 'react'
import Image from 'next/image'
import { 
  SiMongodb, 
  SiExpress, 
  SiPytorch, 
  SiWireshark, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiTypescript, 
  SiCplusplus 
} from 'react-icons/si'
import { TbBrandGolang } from 'react-icons/tb'

import {AiFillThunderbolt} from 'react-icons/ai'

import SectionTitle from './SectionTitle'
import { profile_img } from '@/public/assets'
import { FaNodeJs, FaPython } from 'react-icons/fa'


const About = () => {
  return (
    <section
      id="about"
      className='max-w-containerSmall mx-auto py-10 lgl:py32 flex flex-col gap-8'
    >
      <SectionTitle title="About Me" titleNo="01"/>
      <div className='flex flex-col lgl:flex-row gap-16'>
        <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex 
          flex-col gap-4'
        >
          <p>
            Welcome to my portfolio! {" "}
            
            <span className='text-xs'>
              {"**"}based off and inspired by {" "} 
              
              <a href='https://v4.brittanychiang.com/' target='_blank'>
                <span className='text-textGreen inline-flex relative cursor-pointer 
                  h-7 overflow-x-hidden group'
                > 
                  Brittany Chiang
                  <span className='absolute w-full h-[1px] bg-textGreen left-0 bottom-1 
                    -translate-x-[110%] group-hover:translate-x-0 transition-transform 
                    duration-500'/>
                </span>
              </a>
            </span>
          </p>
          <p>
            I am a junior as 
            <span className='text-textGreen'> Brown University </span>majoring in
            computer science and applied mathematics. Beyond the classroom, my 
            interests encompasses engineering and entrepreneurship, 
            and I thrive on projects that blend hardware and software.
          </p>
          <p>
            In my free time, you'll catch me on the tennis courts, exploring the 
            globe, and hunting down hidden gem restaurants wherever I go. I also
            dabble in real estate as licensed 
            <span className='text-textGreen'> real estate agent</span>. Stay 
            tuned for updates on my latest projects - this page is always evolving!
          </p>
          <p className='text-textGreen'>Here are the technologies I have been working with: </p>
          <ul className='make-w-[450px] text-med font-titleFont grid grid-cols-3 grap-2 mt-6'>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'><SiMongodb /></span>
              MongoDB
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'><SiExpress /></span>
              Express.js
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'><SiReact /></span>
              React.js
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'><FaNodeJs /></span>
              Node.js
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'><SiNextdotjs /></span>
              Next.js
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'><SiTailwindcss /></span>
              Tailwindcss
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'><SiTypescript /></span>
              Typescript
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'><SiPytorch /></span>
              Pytorch
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'><SiCplusplus /></span>
              C/C++
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'><FaPython /></span>
              Python
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'><TbBrandGolang /></span>
              Go
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'><SiWireshark /></span>
              Wireshark
            </li>
          </ul>
        </div>
        <div className='w-full lgl:w-1/3 h-80 relative group'>
          <div className='absolute w-full h-80 -left-6 -top-6 rounded-lg'>
            <div className='w-full h-full relative z-20 flex pl-6 lgl:pl-0'>
              <Image 
                className='rounded-lg h-full object-cover'
                src={profile_img}  
                alt='profileImg'
              />
              <div className='hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20
                rounded-md top-0 left-0 group-hover:bg-transparent duration-300'></div>
            </div>
          </div>
          <div className='hidden lgl:inline-flex w-full h-80 border-2 
            border-textGreen rounded-md group-hover:-translate-x-2 
            group-hover:-translate-y-2 transition-transform duration-300'></div>
        </div>
      </div>
    </section>
  )
}

export default About