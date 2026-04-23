"use client"
import React, { useState } from "react"

const Footer = () => {
  const [email,setEmail]=useState("")
  const handleSubmit=(e)=>{
    e.preventDefault()
    try{
      console.log(email)

    }
    catch(err){
      console.err(err)

    }
  }
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-indigo-900 text-gray-300 px-6 pt-16 pb-6">

      
      <div className="max-w-7xl mx-auto mb-12 bg-white/5 backdrop-blur-md rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div>
          <p className="text-sm text-blue-300">READY TO START YOUR JOURNEY?</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
            Your dream university is closer than you think.
          </h2>
          <p className="text-sm mt-2 text-gray-400">
            Get expert guidance and achieve your study abroad goals.
          </p>
        </div>

        <div className="flex gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition">
            Book Free Consultation
          </button>
          <button className="border border-white/20 px-6 py-2 rounded-lg hover:bg-white/10 transition">
            Call us
          </button>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10">

        
        <div>
          <img className="bg-white h-16  rounded-2xl" src="logoNB.png"/>
          <p className="mt-3 text-sm">
            Helping students achieve global education with confidence and clarity.
          </p>

          <div className="flex gap-4 mt-4 text-sm">
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Twitter</a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">About</a></li>
            <li><a href="#">How it Works</a></li>
            <li><a href="#">Success Stories</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>University Shortlisting</li>
            <li>Visa Guidance</li>
            <li>Education Loans</li>
            <li>Accommodation</li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-white font-semibold mb-4">Destinations</h3>
          <ul className="space-y-2 text-sm">
            <li>USA</li>
            <li>UK</li>
            <li>Canada</li>
            <li>Australia</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-4">Stay Updated</h3>

          <form onSubmit={handleSubmit} className="space-y-3" >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              required
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              className="w-full bg-white text-blue-900 font-semibold py-2 rounded-lg hover:bg-gray-200 transition"
            >
              Subscribe →
            </button>
          </form>

          <p className="text-xs mt-2 text-gray-400">
            No spam. Only useful updates.
          </p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        
        <p>© 2026 NORTHBRIDGE. All rights reserved.</p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;