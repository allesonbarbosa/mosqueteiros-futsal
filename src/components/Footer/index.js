import React from 'react';
import { Link } from 'react-router-dom';
import {
  Footer,
  ContainerFooter,
  H4,
  FooterInstagram,
  FooterMenu,
  Localization,
  ContainerCopyright
} from './styles';


import Logo from '../../assets/logo.png';
import { FaInstagramSquare } from 'react-icons/fa';

function Footers() {
  return (
    <Footer>
      <ContainerFooter>
        <FooterInstagram>
          <H4>Redes Sociais</H4>
          <a href="https://www.instagram.com/mosqueteirosfutsal/">
            <FaInstagramSquare color="white" size="40px" />
          </a>
        </FooterInstagram>
        <FooterMenu>
          <H4>Menu</H4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/elenco">Elenco</Link>
            </li>
            <li>
              <Link to="/agenda-jogos/novembro/2021">Agenda</Link>
            </li>
          </ul>
        </FooterMenu>
        <Localization>
          <H4>Localização</H4>
          <p>Mauá - SP</p>
          <img src={Logo} alt="logo-time" />
        </Localization>
      </ContainerFooter>
      <ContainerCopyright>
        <p>© 2021 Mosqueteiros Futsal Mauá. Todos os direitos reservados.</p>
      </ContainerCopyright>
    </Footer>
  );
};

export default Footers;