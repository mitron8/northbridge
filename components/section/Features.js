"use client"
import React from 'react'
import { motion } from "framer-motion"

const Features = () => {

    const data = [
        {
            image: "shield.png",
            title: "Expert Guidance",
            desc: "Get personalized advice from experienced counselors."
        },
        {
            image: "person.png",
            title: "Top Universities",
            desc: "Apply to the best universities across the world."
        },
        {
            image: "rocket.png",
            title: "Visa Support",
            desc: "Smooth and hassle-free visa process."
        }
        ,
        {
            image: "https://cdn-icons-png.freepik.com/512/14084/14084327.png",
            title: "University Selection",
            desc: "Choose the best universities based on your profile and goals."
        },
        {
            image: "https://cdn-icons-png.freepik.com/512/14084/14084071.png",
            title: "Career Counseling",
            desc: "Get expert guidance to plan your study abroad journey."
        }
    ]

    return (
        <section className="px-6 py-16">

            
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Everything you need to study abroad
            </h2>

            
            <div className="grid gap-6 md:grid-cols-3">

                {data.map((item, i) => (
                    <motion.div
                        key={i}
                        className="p-6 rounded-2xl shadow-md bg-white cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.2 }}
                    >
                        <h3 className="text-xl font-semibold mb-3">
                            <img className='h-10 mb-4' src={item.image} />
                            {item.title}
                        </h3>

                        <p className="text-gray-600">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}

            </div>

        </section>
    )
}

export default Features