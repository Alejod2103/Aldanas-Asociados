import React, { useState, useEffect } from 'react'
import ahorro from '../../img/img2.jpg'
import emailjs from '@emailjs/browser';
import '../Cotizacion/Cotizacion.css'
import { ButtonStyled, StyledDiv, StyledImage, TextButton } from '../Cotizacion/CotizacionStyles.js'
import InputField from '../Cotizacion/components/InputField.js';
import Inputselector from '../Cotizacion/components/Selectorinput';

function Cotmovil() {

    const [values, setValues] = useState({
        fullName: '',
        email: '',
        telf: '',
        message: '',
        hora: '',
        servicio: ''
      });

    const [status, setStatus] = useState('');

    
    const handleChange = (e) => {
      setValues(values => ({
        ...values,
        [e.target.name]: e.target.value
      }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_xd9mtfr', 'template_vg0nbg7', values, 'nPCuWIe53tZRvDWo5')
          .then(response => {
            console.log('SUCCESS!', response);
            setValues({
              fullName: '',
              email: '',
              telf: '',
              message: '',
              hora: '',
              servicio: ''
            });
            setStatus('SUCCESS');
          }, error => {
            console.log('FAILED...', error);
          });
      };

      useEffect(() => {
        if(status === 'SUCCESS') {
          setTimeout(() => {
            setStatus('');
          }, 3000);
        }
    }, [status]);



    

  return (
    <>
     <div class="container-fluid-cot overflow-hidden px-lg-0">
        <div class="container quote px-lg-0">
            <div class="row g-0 mx-lg-0">
                <div class="col-lg-6 ps-lg-0 wow fadeIn" data-wow-delay="0.1s" style={{minHeight: "400px"}}>
                <StyledDiv class="position-relative h-100" >
                        <StyledImage class="position-absolute img-fluid w-100 h-100" src={ahorro} style={{objectFit: "contain", borderRadius: "25px"}} alt="none" />
                </StyledDiv>
                </div>
                <div class="col-lg-6 quote-text py-5 wow fadeIn" data-wow-delay="0.5s">
                    <div class="p-lg-5 pe-lg-0">
                        <h6 class="text-warning">Ofrecemos: </h6>
                        <h1 class="TituloSuperior mb-4"> Asistencia personalizada </h1>
                        <p class="mb-4 pb-2">Contamos con una amplia trayectoria en el mundo contable, lo que nos permite brindarle un servicio oportuno y de excelencia para su completa satisfacción. Contactanos Hoy!</p>
                        <form onSubmit={handleSubmit} style={{marginTop: '45px'}}>
                        <div class="row g-3">
                            <InputField class="form-control border-0" value={values.fullName} handleChange={handleChange} label="Nombre" name="fullName" type="text" placeholder="John Doe" />
                            <InputField value={values.email} handleChange={handleChange} label="E-Mail" name="email" type="email" placeholder="jphn@example.com" />
                            <InputField value={values.telf} handleChange={handleChange} label="Telefono" name="telf" type="text" placeholder="jphn@example.com" />
                            <InputField value={values.hora} handleChange={handleChange} label="Mejor hora para llamar" name="hora" type="time" required />
                            <Inputselector value={values.servicio} label='Servicio deseado' handleChange={handleChange} />
                        </div>
                    <ButtonStyled onclick={handleSubmit}><TextButton >Enviar</TextButton></ButtonStyled>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}


export default Cotmovil