import React from 'react'
import About from '../Components/About/About.js'
import Counter from '../Components/Counter/Counter.js'
import Features from '../Components/Features/Features.js'
import Home from '../Components/Home/Home.js'
import Cotmovil from '../Components/MobileCot/Cotmovil.js'
import Service from '../Components/Servicios/Service.js'

function BannerHomePage() {
  return (
    <>
        <Home />
        <Counter />
        <Cotmovil />
        <About />
        <Service />
        <Features />
    </>
  )
}

export default BannerHomePage