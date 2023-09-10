import { placeholder } from '@/public/assets'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { animate } from 'framer-motion/dom'
import { useRef, useState } from 'react'


const Navbar = () => {

  const ref = useRef<string | any>("")

  const [showMenu, setshowMenu] = useState(false)

  const handleScroll = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth"
    });
    // update class name of clicked link
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  }

  return (
    <div className='w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor 
    px-4'>
      <div className='max-w-container h-full mx-auto py-1 font-titleFont flex items-center 
      justify-between'>
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5}}
        >
          <Image className="w-14" src={placeholder} alt="logo" />
        </motion.div>
        <div className='hidden mdl:inline-flex items-center gap-7'>
          <ul className='flex text-[13px] gap-7'>
            <Link 
              href='#home'
              className='flex items-center gap-1 font-medium text-textDark 
                hover:text-textGreen cursor-pointer duration-300 nav-link'
                onClick={handleScroll}  
            >
              <motion.li
                initial={{ y: -30, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.2 }}
              >
                Home
              </motion.li>
            </Link>
            <Link
              href='#about'
              className='flex items-center gap-1 font-medium text-textDark 
                hover:text-textGreen cursor-pointer duration-300 nav-link'
                onClick={handleScroll} 
            >
              <motion.li
                initial={{ y: -30, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <span className='text-textGreen'>0.1 </span> About
              </motion.li>  
            </Link>
            <Link
              href='#experience'
              className='flex items-center gap-1 font-medium text-textDark 
                hover:text-textGreen cursor-pointer duration-300 nav-link'
                onClick={handleScroll} 
            >
              <motion.li
                initial={{ y: -30, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.2, delay: 0.2 }}
              >
                <span className='text-textGreen'>0.2 </span> Experience
              </motion.li>  
            </Link>
            <Link
              href='#project'
              className='flex items-center gap-1 font-medium text-textDark 
                hover:text-textGreen cursor-pointer duration-300 nav-link'
                onClick={handleScroll} 
            >
              <motion.li
                initial={{ y: -30, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.2, delay: 0.3 }}
              >
                <span className='text-textGreen'>0.3 </span> Project
              </motion.li>  
            </Link>
            <Link
              href='#contact'
              className='flex items-center gap-1 font-medium text-textDark 
                hover:text-textGreen cursor-pointer duration-300 nav-link'
                onClick={handleScroll} 
            >
              <motion.li
                initial={{ y: -30, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.2, delay: 0.4 }}
              >
                <span className='text-textGreen'>0.4 </span> Contact
              </motion.li>  
            </Link>
          </ul>

          <a href='/assets/resume.pdf' target='_blank'>
            <motion.button
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.5 }}
              className='px-4 py-2 rounded-md text-textGreen text-[13px] border 
                border-textGreen hover:bg-hoverColor duration-300'
            >
              Resume
            </motion.button>
          </a>
        </div>
        <div onClick={() => setshowMenu(true)} className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden 
            text-4xl text-textGreen cursor-pointer overflow-hidden group'>
          <span className='w-full h-[2px] bg-textGreen inline-flex transform 
            group-hover:translate-x-2 transition-all ease-in-out duration-300' />
          <span className='w-full h-[2px] bg-textGreen inline-flex transform 
          translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300' />
          <span className='w-full h-[2px] bg-textGreen inline-flex transform 
          translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300' />
        </div>
        {showMenu && (
          <div 
            ref={(node) => (ref.current = node)}
            className='absolute mdl:hidden top-0 right-0 w-full h-screen 
              bg-black bg-opacity-50 flex flex-col items-end'
          >
            <motion.div
              initial={{ x:20, opacity: 0 }} 
              animate={{ x:0, opacity: 1 }} 
              transition={{ delay: 0.1 }}
              className='w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240]
                flex flex-col items-center px-4 py-10 relative'
            >

            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar