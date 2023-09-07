"use client"

import { motion } from "framer-motion"

export default function Home() {
  return (
    <section className='flex flex-col h-screen justify-center'>
      <motion.h1
        className='font-medium text-xl mb-3 md:text-2xl'
        animate={{ x: 0, opacity: 1, transition: { duration: 0.25 } }} initial={{ x: -100, opacity: 0 }}
      >
        Hello World!
      </motion.h1>
      <motion.h2
        className='font-bold text-3xl mb-3 md:text-5xl'
        animate={{ x: 0, opacity: 1, transition: { delay: 0.1, duration: 0.25 } }} initial={{ x: -100, opacity: 0 }}
      >
        Welcome To Our Basecamp
      </motion.h2>
      <motion.h3
        className='font-semibold text-2xl italic md:text-3xl'
        animate={{ x: 0, opacity: 1, transition: { delay: 0.1, duration: 0.5 } }} initial={{ x: -100, opacity: 0 }}
      >
        "semua akan TKI pada waktunya"
      </motion.h3>
    </section>
  )
}
