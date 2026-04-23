"use client"
import React from "react"
import { motion } from "framer-motion"

const CTA = () => {
  return (
    <section className="relative px-6 py-28 overflow-hidden bg-black text-white">

      
      <div className="absolute inset-0">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-600 opacity-30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-purple-600 opacity-30 blur-3xl rounded-full"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >

        
        <h2 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
          Take the first step toward the life you’ve imagined 
          <br />
          Starts Here
        </h2>

        
        <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          your story is just getting started<br/>
          Get expert guidance, personalized support, and step-by-step help to secure admission in top global universities.
        </p>

        
        <div className="mt-10">
          <button className="
            px-8 py-4 
            bg-white text-black 
            rounded-full 
            text-lg font-semibold
            hover:scale-105 hover:bg-gray-200
            transition-all duration-300
            shadow-lg
          ">
            Book Free Consultation →
          </button>
        </div>

      </motion.div>

    </section>
  )
}

export default CTA