"use client"
import React, { useState } from "react"

const FAQ = () => {

  const [open, setOpen] = useState(null)

  const data = [
    {
      q: "How do I apply?",
      a: "You can start by booking a consultation."
    },
    {
      q: "Do you provide visa support?",
      a: "Yes, we assist in the entire visa process."
    },
    {
      q: "What are the fees?",
      a: "Fees depend on services you choose."
    }
  ]

  return (
    <section className="px-6 py-16 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto">
        {data.map((item, i) => (
          <div key={i} className="border-b py-4">
            <button
              className="w-full text-left font-semibold"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {item.q}
            </button>

            {open === i && (
              <p className="mt-2 text-gray-600">{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ