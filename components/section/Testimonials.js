"use client"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

const Testimonials = () => {

  const data = [
    {
      image:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
      name: "Rahul Sharma",
      role: "Student - UK",
      review: "This platform helped me get into my dream university. The process was smooth and stress-free.",
      rating: 5
    },
    {
      image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Ananya Gupta",
      role: "Student - Canada",
      review: "Amazing guidance and support throughout my journey. Highly recommended!",
      rating: 5
    },
    {
      image:"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
      name: "Amit Verma",
      role: "Student - Germany",
      review: "Very professional team. They made everything simple and easy to understand.",
      rating: 4
    }
  ]

  return (
    <section className="relative px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 blur-3xl"></div>

      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What our students say
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="p-6 rounded-2xl backdrop-blur-xl bg-white/30 border border-white/20 shadow-lg hover:scale-105 transition duration-300">
                <div className="w-12 h-12 rounded-full flex items-center justify-center  mb-4 ">
                 <img className="rounded-full w-16 h-10 bg-center bg-no-repeat  bg-auto" src={item.image}/>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  "{item.review}"
                </p>

                <div className="mt-3 text-yellow-400 text-lg">
                  {"★".repeat(item.rating)}
                  {"☆".repeat(5 - item.rating)}
                </div>

                <h4 className="mt-4 font-semibold text-lg text-gray-900">
                  {item.name}
                </h4>

                <p className="text-sm text-gray-600">
                  {item.role}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials