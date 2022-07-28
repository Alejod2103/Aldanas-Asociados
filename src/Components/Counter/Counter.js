import React from 'react'
import './Counter.css'

function Counter() {
  return (
    <>
    <div class="container-fluid py-5">
        <div class="containerFeature">
            <div class="row g-5">
                <div class="featurecont  col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                    <div class="d-flex align-items-center mb-4">
                        <div class="btn-lg-square bg-warning rounded-circle me-3">
                            <i class="fa fa-users text-white"></i>
                        </div>
                        <h1 class="numeroCont mb-0" data-toggle="counter-up">+2,500</h1>
                    </div>
                    <h5 class="TituloFeat mb-3">Clientes Satisfechos</h5>
                    <span class="subtitle" >Mas de mil personas ya cuentan con la mejor asesoría financiera personal y empresarial para ayudar a cumplir sus sueños.</span>
                </div>
                <div class="featurecont col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                    <div class="d-flex align-items-center mb-4">
                        <div class="btn-lg-square bg-warning rounded-circle me-3">
                            <i class="fa fa-check text-white"></i>
                        </div>
                        <h1 class="numeroCont mb-0" data-toggle="counter-up">Millones</h1>
                    </div>
                    <h5 class="TituloFeat mb-3">De dolares Ahorrados</h5>
                    <span class="subtitle">Hemos generado un ahorro, inversion y mejor uso de alrededor de 900,672$ en el periodo de 2020-2022 periodo post pandemia. </span>
                </div>
                <div class="featurecont col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                    <div class="d-flex align-items-center mb-4">
                        <div class="btn-lg-square bg-warning rounded-circle me-3">
                            <i class="fa fa-users-cog text-white"></i>
                        </div>
                        <h1 class="numeroCont mb-0" data-toggle="counter-up">+500</h1>
                    </div>
                    <h5 class="TituloFeat mb-3">Agentes especializados</h5>
                    <span class="subtitle">Contamos mas de 500 agentes profesionales para asesorarte con la mejor atencion.</span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Counter;