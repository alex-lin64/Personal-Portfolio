import React from 'react'


const Contact = () => {
  return (
    <section
      id='contact'
      className='max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4
        items-center justify-center'>
      <p className='font-titleFont text-lg text-textGreen font-semibold flex 
        items-center tracking-wide'>
        0.4 What&apos;s Next?
      </p>
      <h2 className='font-titleFont text-5xl font-semibold'>Get in Touch</h2>
      <span className='text-[#778DA9] text-lg sm:text-xl leading-[1]'>
        Seeking Internships for Summer 2024
      </span>
      <p className='max-w-[600px] text-center text-textDark'>
        I am currently looking for roles in software engineering, systems engineering,
        and ML/AI.  Always feel free to reach out, I&apos;d love to chat!
      </p>
      <a href='mailto:alex_lin@brown.edu'>
        <button className='w-40 h-14 border border-textGreen mt-6 font-titleFont 
          text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor 
          duration-300'
        >
          Say Hello
        </button>
      </a>
    </section>
  )
}

export default Contact