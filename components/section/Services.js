"use client"
import React from "react"
import { motion } from "framer-motion"

const Services = () => {

  const data = [
    { title: "Career Counseling", desc: "Personalized career guidance.", icon: "/services/love.png" },
    { title: "University Selection", desc: "Best options for your goals.", icon: "/services/meeting.png" },
    { title: "Application Help", desc: "Complete application support.", icon: "/services/help.png" },
    { title: "Visa Assistance", desc: "Smooth visa process.", icon: "/services/visa.png" }
  ]

  return (
    <section className="relative px-6 py-20 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-bold text-center mb-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="group p-6 rounded-2xl backdrop-blur-xl bg-white/40 border border-white/20 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >

              <div className="h-12 w-12 mb-4 rounded-xl bg-white/60 backdrop-blur flex items-center justify-center">
                <img src={item.icon} alt="" className="h-6 w-6 object-contain" />
              </div>

              <h3 className="font-semibold text-lg">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                {item.desc}
              </p>

              <div className="mt-4 h-[2px] w-0 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></div>

            </motion.div>
          ))}

        </div>
      </div>

    </section>
  )
}

export default Services