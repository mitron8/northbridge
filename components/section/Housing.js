"use client"
import React from "react"
import { motion } from "framer-motion"

const Housing = () => {

  const data = [
    {
      type: "Studio",
      rating: 4.8,
      title: "Sunny Studio near TU Berlin",
      location: "Berlin, Germany",
      price: "€685/mo",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    },
    {
      type: "2-Bedroom",
      rating: 4.9,
      title: "Modern 2-Bed in Kreuzberg",
      location: "Berlin, Germany",
      price: "€950/mo",
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
    },
    {
      type: "Shared Room",
      rating: 4.7,
      title: "Co-Living Room, Prenzlauer Berg",
      location: "Berlin, Germany",
      price: "€520/mo",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb"
    }
  ]

  return (
    <section className="px-6 py-20 bg-gray-50">

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
        <div>
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            Student Rentals
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-2 leading-tight">
            Premium student housing,
            <br /> ready before you land.
          </h2>

          <p className="text-gray-600 mt-3">
            Hand-verified stays in Berlin, Dublin, London & more.
          </p>
        </div>

        <button className="px-6 py-3 border rounded-xl hover:bg-black hover:text-white transition">
          Browse all rentals →
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >

            <div className="relative">

              <img
                src={item.image}
                className="h-52 w-full object-cover"
              />

              <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-md px-3 py-1 rounded-lg text-sm font-medium">
                {item.type}
              </div>

              <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-medium">
                ⭐ {item.rating}
              </div>

            </div>

            <div className="p-5">

              <p className="text-sm text-gray-500">
                {item.location}
              </p>

              <h3 className="mt-2 font-semibold text-lg">
                {item.title}
              </h3>

              <div className="flex items-center justify-between mt-4">

                <div>
                  <p className="text-xs text-gray-400">from</p>
                  <p className="text-xl font-bold">
                    {item.price}
                  </p>
                </div>

                <button className="text-blue-600 font-medium hover:underline">
                  View →
                </button>

              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  )
}

export default Housing