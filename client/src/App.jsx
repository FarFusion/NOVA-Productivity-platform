import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import TrustedBy from './components/TrustedBy/TrustedBy'
import Features from './components/Features/Features'
import Product from './components/Product/Product'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Stats from './components/Statistics/Stats'
import Solutions from './components/Solutions/Solutions'
import Testimonials from './components/Testimonials/Testimonials'
import Pricing from './components/Pricing/Pricing'
import FAQ from './components/FAQ/FAQ'
import CTA from './components/FinalCTA/CTA'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <main>
        <Hero/>
        <TrustedBy/>
        <Features/>
        <Product/>
        <HowItWorks/>
        <Stats/>
        <Solutions/>
        <Testimonials/>
        <Pricing/>
        <FAQ/>
        <CTA/>
      </main>
      <Footer/>
    </>
  )
}

export default App
