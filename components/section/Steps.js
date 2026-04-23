"use client"
import React from "react"

const Steps = () => {

  const data = [
    "Book Consultation",
    "Choose University",
    "Apply & Submit",
    "Get Visa & Fly"
  ]

  return (
    <section className="px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        How it works
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {data.map((step, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">
              {i + 1}
            </div>
            <p className="font-medium">{step}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Steps