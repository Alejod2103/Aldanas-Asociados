import React from 'react'
import './Navbar.css'
import { IconBtn, NavObj, QuoteText } from './NavbarStyles';
import "../../css/GlobalStyles.css";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiAlignMiddle } from 'react-icons/bi';
import logo from '../../img/AldanaLogoNoBg.png'


function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-warning sticky-top p-0">

        <LogoAldana src={logo} alt="none" />

    <a href="/" class="navbar-brand d-flex align-items-center border-end px-2 px-lg-3">
        <TextLogoNav class="tituloNav m-0">Aldana & asociados</TextLogoNav>
    </a>
    <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"><BiAlignMiddle /></span>
        
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto p-2 p-lg-0">
            <Link to={'/'} class="navObj nav-item nav-link active">Home</Link>
            <Link to={"/about"} class="navObj nav-item nav-link">Sobre Nosotros</Link>
            <Link to={"/service" } class="navObj nav-item nav-link">Servicios</Link>
            <Link to={"/asistencia"} class="nav-item nav-link">Contacto</Link>
        </div>
        <a href='tel:+1(813)278-6391' >
        <NavObj class="btn m-50 b rounded-2 p-2 py-4 px-lg-3 d-none mt-10 d-lg-block" ><QuoteText>+1(813)278-6391<IconBtn class="fa fa-arrow-right ms-3"></IconBtn></QuoteText></NavObj>
        </a>
    </div>
    <script src="../main.js"></script>
</nav>
  )
}

export default Navbar

const LogoAldana = styled.img`
    position: relative;
    margin: 15px;
    height: 75px;
    width: 180px;

    @media (min-width: 700px) and (max-width: 900px) {
        margin: 6.5px;
        height: 60px;
        width: 120px;
    }

    @media (min-width: 400px) and (max-width: 700px) {
        margin: 8px;
        height: 35px;
        width: 80px;
    }

    @media (min-width: 300px) and (max-width: 400px) {
        margin: 6px;
        height: 25px;
        width: 50px;
    }
`;

const TextLogoNav = styled.h2`
    color: #000;
    margin: 20px;
    text-shadow: 2px 2px 2px #fff;
    letter-spacing: 3.5px;
    font-size: 25px;
    font-family: 'Roboto Mono', monospace;
    font-weight: 600;
    text-transform: uppercase;

    @media (min-width: 400px) and (max-width: 600px) {
        font-size: 14px;
        margin: 0px;
    }

    @media (min-width: 300px) and (max-width: 400px) {
        font-size: 11px;
        margin: 0;
    }
`;