import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {
  Header,
  ContainerHeaderInstagram,
  H2,
  ContainerTitle,
  Image,
  H1,
  Nav,
  Hamburguer,
  Menu  
} from './styles';

import Logo from '../../assets/logo.png';
import { FaInstagramSquare } from 'react-icons/fa';

function Headers() {
    const[isOpen, setIsOpen] = useState(false);
    return (
        <Header isOpen={isOpen}>
            <ContainerHeaderInstagram>
            <H2>Acompanhe o time:</H2>
                <a href="https://www.instagram.com/mosqueteirosfutsal/">
                    <FaInstagramSquare 
                    color="white" 
                    size="40px"
                    />
                </a>
            </ContainerHeaderInstagram>
            <ContainerTitle>
                <Image src={Logo} alt="logo-mosqueteiros-futsal" />
                <H1>Mosqueteiros Futsal Mauá</H1>
            </ContainerTitle>
            <Nav>
            <Hamburguer isOpen={isOpen} onClick={()=> setIsOpen(!isOpen)}>
                <span className="first-hamburguer"/>
                <span className="second-hamburguer"/>
                <span className="third-hamburguer"/>
            </Hamburguer>
            <Menu isOpen={isOpen}>
                <Link to="/">Home</Link>
                <Link to="/elenco">Elenco</Link>
                <Link to="/agenda-jogos/novembro/2021">Agenda</Link>
                <a className="logo-instagram" href="https://www.instagram.com/mosqueteirosfutsal/">
                    <FaInstagramSquare color="white" size="40px"/>
                </a>
            </Menu>
        </Nav>
        </Header>
    );
};

export default Headers;