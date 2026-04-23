"use client"
import React from 'react'
import { motion } from "framer-motion"
import CountUp from "react-countup"
import ThankyouBtn from '../microComp/ThankyouBtn'

const Hero = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between px-6 py-16 gap-10">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 blur-3xl"></div>

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl pt-16 relative z-10"
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-800 to-indigo-800 text-transparent bg-clip-text">
          Study abroad with clarity,{" "}
          <span className="bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            confidence
          </span>
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Get the right guidance for your future and achieve your dream university.
        </p>

        <div className='flex gap-6 items-center flex-wrap'>
          <button className="
            shadow-sm shadow-blue-700
            mt-6 hidden md:block
            px-5 py-2
            bg-blue-800 text-white
            rounded-lg
            hover:bg-black hover:scale-[110%]
            transition-all duration-300
          ">
            Book free Consultation
          </button>

          <ThankyouBtn />
        </div>
      </motion.div>

      {/* RIGHT IMAGE + CARDS */}
      <div className="relative w-full pt-16 lg:w-[550px] flex flex-col">

        {/* IMAGE */}
        <motion.img
          src="https://img.freepik.com/premium-photo/student-woman-airport-is-waiting-plane-travel-ticket-documents-immigration_1164591-10223.jpg"
          alt="hero"
          className="w-full rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />

        {/* 📱 MOBILE CARDS */}
        <div className="mt-6 grid grid-cols-2 gap-4 lg:hidden">

          <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow">
            <p className="text-xs text-gray-600">Students Placed</p>
            <h3 className="text-lg font-bold text-gray-900">
              <CountUp end={6500} duration={2} />+
            </h3>
          </div>

          <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow">
            <p className="text-xs text-gray-600">Success Rate</p>
            <h3 className="text-lg font-bold text-gray-900">
              <CountUp end={99} duration={2} />%
            </h3>
          </div>

          <div className="col-span-2 bg-black/70 text-white p-4 rounded-xl shadow relative">
            <span className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full"></span>

            <p className="text-xs text-gray-400">Scholarship Won</p>
            <h3 className="text-lg font-semibold">
              €<CountUp end={44} duration={2} />+M
            </h3>
          </div>

        </div>

        {/* 💻 DESKTOP FLOATING CARDS */}

        <motion.div
          className="hidden lg:block absolute bottom-6 right-4 bg-white/30 backdrop-blur-xl px-5 py-3 rounded-xl shadow-lg border border-white/20"
        >
          <p className="text-xs text-gray-600">Students Placed</p>
          <h3 className="text-lg font-bold text-gray-900">
            <CountUp end={6500} duration={2} />+
          </h3>
        </motion.div>

        <motion.div
          className="hidden lg:block absolute top-20 right-4 bg-white/30 backdrop-blur-xl px-5 py-3 rounded-xl shadow-lg border border-white/20"
        >
          <p className="text-xs text-gray-600">Success Rate</p>
          <h3 className="text-lg font-bold text-gray-900">
            <CountUp end={99} duration={2} />%
          </h3>
        </motion.div>

        <motion.div
          className="hidden lg:block absolute bottom-8 left-4 px-5 py-3 rounded-xl shadow-2xl border border-white/10 bg-black/60 backdrop-blur-lg text-white"
        >
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-green-400 rounded-full animate-ping"></span>
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-green-400 rounded-full"></span>

          <p className="text-xs text-gray-400">
            Scholarship Won
          </p>

          <h3 className="text-xl font-semibold mt-1">
            €<CountUp end={44} duration={2} />+M
          </h3>
        </motion.div>

      </div>

    </section>
  )
}

export default Hero