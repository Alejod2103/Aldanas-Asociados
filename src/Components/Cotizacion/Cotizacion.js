import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import './Cotizacion.css'
import { ButtonStyled, TextButton } from './CotizacionStyles'
import InputField from './components/InputField';
import Inputselector from './components/Selectorinput.js'

function Cotizacion() {

    const [values, setValues] = useState({
        fullName: '',
        email: '',
        telf: '',
        message: '',
        hora: '',
        servicio: '',
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
    <Globalcontainer>
      <div className='titlecontainer'>
        <ContactText>Contactenos Ahora!</ContactText>
      </div>

    <form onSubmit={handleSubmit} style={{marginTop: '45px'}}>
      <div class="row g-3">
        <InputField class="form-control border-0" value={values.fullName} handleChange={handleChange} label="Nombre" name="fullName" type="text" placeholder="John Doe" />
        <InputField value={values.email} handleChange={handleChange} label="E-Mail" name="email" type="email" placeholder="jphn@example.com" />
        <InputField value={values.telf} handleChange={handleChange} label="Telefono" name="telf" type="text" placeholder="jphn@example.com" />
        <InputField value={values.hora} handleChange={handleChange} label="Mejor hora para llamar" name="hora" type="time" required />
        <Inputselector value={values.servicio} handleChange={handleChange} label='Servicio deseado' />
      </div>
        <ButtonStyled onclick={handleSubmit}><TextButton >Enviar</TextButton></ButtonStyled>
    </form>
    </Globalcontainer>
    </>
  )
}


export default Cotizacion

const Globalcontainer = styled.div`
  position: sticky;
  background: linear-gradient(90deg, rgba(0,0,0,0.8435749299719888) 0%, rgba(0,0,0,0.8687850140056023) 41%, rgba(0,0,0,0.9500175070028011) 100%);
  text-align: center;
  width: 320px;
  height: 500px;
  border-radius: 25px;

  @media (min-width: 100px) and (max-width: 999px) {
    display: none;
  }
`;

const ContactText = styled.h1`
  font-size: 23px;
  position: relative;
  margin-top: 10px;
  margin-bottom: 20px;
  text-shadow: 1px 1px 1px #000;
  color: #ffc107;
`;
