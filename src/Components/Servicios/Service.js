import React from 'react'
import img2 from '../../img/img14.jpg'
import img3 from '../../img/img12.jpg'
import img4 from '../../img/img13.jpg';
import './Service.css';
import { BiBriefcase } from "react-icons/bi";
import { AiOutlineDollar, AiFillBank } from 'react-icons/ai';
import { LlamaBoton } from './ServiceStyles.js'

function Service() {
  return (
    <>
     <div class="container-fluid py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                <h6 class="text-warning">Nuestros Servicios</h6>
                <h1 class="SubTextoTitulo mb-4">Así te ayudamos a potenciar tu negocio</h1>
            </div>
            <div class="row g-4">
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item rounded overflow-hidden">
                        <img class="img-fluid" src={img4} alt="" />
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon bg-warning">
                                <AiFillBank className='Banco' />
                            </div>
                            <h4 class="Feattittle mb-3">Registro e Incorporacion de negocios</h4>
                            <p>nos ocupamos de la inscripción de negocios y realizamos los trámite con nosotros y nuestra amplia trayectoria, como carta de presentación que demuestra la efectividad de nuestros servicios profesionales.</p>
                            <LlamaBoton href='tel:+1(813)278-6391' >LLama ahora <i class="bi bi-telephone-forward ms-2"></i></LlamaBoton>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item rounded overflow-hidden">
                        <img class="img-fluid" src={img2} alt="" />
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon bg-warning">
                                <BiBriefcase className='Trabajo' />
                            </div>
                            <h4 class="Feattittle mb-3">Servicios Contables</h4>
                            <p>somos profesionales con amplia experiencia, en los campos de la contabilidad y la declaración de impuestos. Contamos con el Número de Identificación del Preparador Tributario (PTIN), renovado y actualizado conforme lo manda la ley.</p>
                            <LlamaBoton href='tel:+1(813)278-6391'>LLama ahora <i class="bi bi-telephone-forward ms-2"></i></LlamaBoton>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item rounded overflow-hidden">
                        <img class="img-fluid" src={img3} alt="" />
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon bg-warning">
                                 <AiOutlineDollar className='LogoDinero' />
                            </div>
                            <h4 class="Feattittle mb-3">Contabilidad para personas físicas</h4>
                            <p className='TextoLargo'>Si usted necesita realizar un trabajo de contabilidad para personas físicas, le tenemos la solución. Contamos con la autorización PTIN al día, somos profesionales como preparadores de impuestos y nos mantenemos en un constante proceso de actualización en los campos de la contabilidad y las leyes tributarias.  Trabajamos sobre la base de archivos y recibos. Los mas confiables en el rubro.</p>
                            <LlamaBoton href='tel:+1(813)278-6391'>LLama ahora <i class="bi bi-telephone-forward ms-2"></i></LlamaBoton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Service