"use client"
import React, { useState } from 'react'

const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <nav className="bg-white/40 backdrop-blur-xl w-full px-6 py-4 fixed z-50 flex items-center justify-between">


            <img className='h-15 px-4' src='logoNB.png'></img>

           
            <ul className="hidden md:flex gap-8 text-gray-700">
                <li className="cursor-pointer hover:text-blue-600">Home<select></select></li>
                <li className="cursor-pointer hover:text-blue-600">Services<select></select></li>
                <li className="cursor-pointer hover:text-blue-600">Exams<select></select></li>
                <li className="cursor-pointer hover:text-blue-600">Rentals</li>
                <li className="cursor-pointer hover:text-blue-600">About</li>
                <li className="cursor-pointer hover:text-blue-600">Blog</li>
                <li className="cursor-pointer hover:text-blue-600">Contact</li>

            </ul>
            <div className='flex   justify-center items-center gap-8 '>
                <div className=' flex gap-2 text-center justify-center'>
                    <img className='hidden md:block h-5' src='ph.png' />
                    <p className=' hidden md:block text-sm text-blue-800'>+91 8837234221</p>
                </div>

                <button className="shadow-sm shadow-blue-700 hidden md:block px-5 py-2 bg-blue-800 text-white rounded-lg hover:bg-black hover:scale-[110%] transition">
                    Book free Consultation
                </button>
            </div>

            
            <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
                ☰
            </div>

            
            {open && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden">
                    <p>Home</p>


                    <p>About</p>
                    <p>Services</p>
                    <p>Contact</p>
                    <button className="px-5 py-2 bg-blue-600 text-white rounded-lg">
                        Get Started
                    </button>
                </div>
            )}

        </nav>
    )
}

export default Navbar