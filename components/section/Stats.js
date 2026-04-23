"use client"
import React from "react"
import { motion } from "framer-motion"

const Stats = () => {

  const data = [
    {value: "5+", label: "Years Experience" },
    {value: "6500+", label: "Students" },
    {value: "9", label: "Countries" },
    {value: "99%", label: "Success Rate" }
  ]

  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
               
              {item.value}
            </h2>
            <p className="mt-2 text-gray-600">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Stats