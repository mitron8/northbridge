"use client"
import React, { useState } from "react"

const SplitPane = () => {
  const [active, setActive] = useState(null)

  const toggle = (side) => {
    setActive(prev => (prev === side ? null : side))
  }

  const data = [
    {
      id: "left",
      title: "Top Universities",
      description:
        "Get access to globally ranked universities with strong academics, modern campuses, and international exposure. Choose the right course, the right country, and build a career that stands out worldwide.",
      points: [
        "Top 1% global universities",
        "Career-focused programs",
        "Global exposure and networking"
      ],
      image:
        "https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?q=80&w=1170&auto=format&fit=crop",
      button: "Scholarships",
      position: "right",
      btnStyle: "bg-white/80 text-black hover:bg-white"
    },
    {
      id: "right",
      title: "Scholarships",
      description:
        "Reduce your financial burden with scholarships, grants, and funding options. We help you find and apply for opportunities that make studying abroad affordable.",
      points: [
        "Merit-based scholarships",
        "Up to 100% funding options",
        "Guidance for applications"
      ],
      image:
        "https://plus.unsplash.com/premium_photo-1664372145541-4556b409492e?q=80&w=1169&auto=format&fit=crop",
      button: "Top Universities",
      position: "left",
      btnStyle: "bg-blue-800/80 text-white hover:bg-black"
    }
  ]

  return (
    <div className="hidden md:flex h-screen overflow-hidden font-sans">
      {data.map((item) => {
        const isActive = active === item.id
        const isOtherActive = active && active !== item.id

        return (
          <div
            key={item.id}
            className={`
              relative flex items-center justify-center text-white
              transition-all duration-700 ease-in-out
              bg-cover bg-center overflow-hidden
              ${isOtherActive ? "w-0 opacity-0" : isActive ? "w-full" : "w-1/2"}
            `}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-lg px-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                {item.title}
              </h2>

              <p className="mt-4 text-base md:text-lg opacity-90 leading-relaxed">
                {item.description}
              </p>

              {/* Points */}
              <div className="mt-4 space-y-2 text-sm md:text-base opacity-90">
                {item.points.map((p, i) => (
                  <p key={i}>• {p}</p>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="mt-6 flex gap-4 justify-center flex-wrap">
                <button className="px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition">
                  Explore
                </button>

                <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
                  Book Consultation
                </button>
              </div>
            </div>

            {/* Switch Button */}
            <button
              onClick={() =>
                toggle(item.id === "left" ? "right" : "left")
              }
              className={`
    absolute ${item.position}-4 top-1/2 -translate-y-1/2
    h-10 w-10 rounded-full
    ${item.btnStyle}
    shadow-md hover:scale-110 transition flex items-center justify-center z-10
  `}
            >
              {item.id === "left" ? "→" : "←"}
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default SplitPane