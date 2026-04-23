import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import CTA from '@/components/section/CTA'
import Destinations from '@/components/section/Destinations'
import FAQ from '@/components/section/FAQ'
import Features from '@/components/section/Features'
import Hero from '@/components/section/Hero'
import Housing from '@/components/section/Housing'
import Services from '@/components/section/Services'
import SplitPane from '@/components/section/Splitpane'
import Stats from '@/components/section/Stats'
import Steps from '@/components/section/Steps'
import Testimonials from '@/components/section/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Services />
      <Destinations />
      <Housing/>
      <Steps />
      <Testimonials />
      <FAQ />
      <SplitPane/>
      <CTA />
      
      <Footer />



    </div>
  )
}

export default page
