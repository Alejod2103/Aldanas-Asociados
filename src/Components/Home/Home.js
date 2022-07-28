import React from 'react'
import "../../css/GlobalStyles.css"
import './HomeStyles.css'
import img1 from '../../img/img11.jpg'
import Cotizacion from '../Cotizacion/Cotizacion'

function Home() {
  return (
    <>
     <div class="container-fluid bg- p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="owl-carousel header-carousel position-relative">
            <div class="owl-carousel-item position-relative" data-dot="<img src='img/carousel-1.jpg'>">
                <img class="img-fluid" src={img1} alt="" />
                <div class="owl-carousel-inner">
                    <div class="container">
                        <div class="row justify-content-start">
                            <div class="col-10 col-lg-8">
                               <h1 className='telefono'>+1(813)278-6391</h1>
                                <h1 class="Titulo display-2 text-white animated slideInDown">Grandes ideas para pequeños negocios.</h1>
                                <p class="Subtitulo fs-5 fw-medium text-white mb-4 pb-3">Estrategias para lograr el éxito empresarial.</p>
                                <a href='tel:+1(813)278-6391' class="botonleer btn rounded-pill py-3 px-5 animated slideInLeft">Contactenos</a>
                            </div>
                            <Cotizacion />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <script src="../src/lib/owlcarousel/owl.carousel.min.js"></script>


    </>
  )
}

export default Home
