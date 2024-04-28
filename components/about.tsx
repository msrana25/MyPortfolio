'use client'

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section ref={ref} className='mb-28 max-w-[45rem] text-center leading-8 sm:-scroll-mb-40 scroll-mt-28'
     initial={{ opacity: 0, y: 100 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ delay: 0.175 }}
     id='about'
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Hey there again, I&apos;m your go-to guy for all things software. With a Master&apos;s in{" "}
        <span className="font-medium">Applied Computer Science</span>, I&apos;m armed with the perfect blend of knowledge and passion to rock the tech world. 
        From revolutionizing restaurant operations with an Energy Management System to blazing trails at Infosys with cutting-edge solutions, I&apos;ve flexed my coding muscles across the stack{" "}
        <span className="font-medium">JavaScript, TypeScript, Java, Python, you name it, I&apos;ve conquered it.</span>{" "}
      </p>

      <p className='mb-3'>
        <span className="italic">Whether I&apos;m crafting sleek interfaces with React or architecting robust back-end systems with Spring Boot,  </span>
        I&apos;m <span className="underline">always on the hunt for the next big challenge.</span>{" "}
        I am always looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      
      <p>
        <span className="italic">But life isn&apos;t just about lines of code!</span>, When I&apos;m not in front of a screen, 
        you&apos;ll find me reading, exploring the city where I&apos;m in, or simply chilling with my furry companion.
        I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">human psychology</span>. I&apos;m also
        learning how to play the piano.
      </p>
    </motion.section>
  )
}
