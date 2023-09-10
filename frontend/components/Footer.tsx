import React from 'react'
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si"


const Footer = () => {
  return (
    <div className='hidden mdl:inline-flex xl:hidden items-center justify-center 
      w-full py-6 gap-4'>
      <div className='flex flex-row gap-4'>
        <a href='https://github.com/alex-lin64' target='_blank'>
          <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
            items-center justify-center hover:text-textGreen cursor-pointer 
            hover:-translate-y-2 transition-all duration-300'>
            <FaGithub />
          </span>
        </a>
        <a href='https://www.linkedin.com/in/alexlin64/' target='_blank'>
          <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
            items-center justify-center hover:text-textGreen cursor-pointer 
            hover:-translate-y-2 transition-all duration-300'>
            <SiLinkedin />
          </span>
        </a>
      </div>
    </div>
  )
}

export default Footer