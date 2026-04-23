"use client"
import React from "react"
import { motion } from "framer-motion"

const data = [
    {
        flag:"/flags/german.png",
        name: "Germany",
        desc: "Low-cost, world-class public universities",
        image: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f"
    },
    {   flag:"/flags/uk.png",
        name: "United Kingdom",
        desc: "1-year master’s & global recognition",
        image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad"
    },
    {   flag:"/flags/usa.png",
        name: "USA",
        desc: "Flexible education & global exposure",
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29"
    }
]

const Destinations = () => {
    return (
        <section className="px-6 md:px-16 py-20 bg-gray-100">

            <div className="flex justify-between items-center mb-10">
                <div>
                    <p className="text-sm tracking-widest text-gray-500">
                        STUDY DESTINATIONS
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-blue-900 max-w-xl">
                        Explore top destinations for international students.
                    </h2>
                </div>

                <button className="hidden md:block text-blue-800 font-medium hover:underline">
                    View all →
                </button>
            </div>

            <div
                className="relative"
                style={{ height: `${data.length * 100}vh` }}
            >

                {data.map((item, i) => (
                    <div
                        key={i}
                        className="sticky top-24 h-[80vh] flex items-center justify-center"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0.7 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="w-[80%] h-[80vh] rounded-3xl overflow-hidden relative"
                            style={{
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                            <div className="inline-flex items-center px-4 py-1.5 mt-4 mx-2 bg-white/80 backdrop-blur-md text-blue-900 rounded-full shadow-sm">
                                <p className="text-sm font-semibold tracking-wide flex gap-2">
                                  <img className="h-4 " src={item.flag}/>  {item.name}
                                </p>
                            </div>

                            <div className="absolute bottom-6 left-6 text-white max-w-md">
                                <h3 className="text-3xl font-semibold">{item.name}</h3>
                                <p className="text-sm opacity-80 mt-2">{item.desc}</p>
                            </div>
                        </motion.div>
                    </div>
                ))}

                <div className="h-[100vh]" />

            </div>

        </section>
    )
}

export default Destinations
