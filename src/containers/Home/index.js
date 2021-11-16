import React from 'react';
import {
  Container,
  Main,
  ContainerPrincipal,
  ContainerNews,
  ContainerUniform,
  H3,
  ImageTeam,
  ImageUniform,
} from './styles';

import Headers from '../../components/Header';
import Footers from '../../components/Footer';

import PhotoTeam from '../../assets/foto_time.jpg';
import PhotoUniform from '../../assets/uniforme_time.jpg';
import PhotoTrophy from '../../assets/foto_trofeu.jpg'

function Home() {
  return (
    <Container>
      <Headers/>
      <Main>
        <ContainerPrincipal>
          <H3>Prazer, somos o Mosqueteiros Futsal Mauá!</H3>
          <ImageTeam src={PhotoTeam} alt="foto-time" />
          <p>O Mosqueteiros Futsal foi fundado em 23 de Janeiro de 2020 na cidade de Mauá por amigos que jogam bola desde a juventude.
            Nossa primeira partida oficial ocorreu em 01 de Março de 2020, porém devido a pandemia o time parou suas atividades nesse mesmo ano.
            De volta as quadras em 2021, o Mosqueteiros Futsal disputa amistosos e torneios regionais.
          </p>
        </ContainerPrincipal>
        <ContainerNews>
          <img  alt ="foto-campeao" src={PhotoTrophy}/>
          <H3>É CAMPEÃO!!!</H3>
          <p>O Mosqueteiros Futsal conquista seu primeiro título da história.
            No Festival Amigos disputado na Arena Zairão o time bateu o Embaçados F.C. por 6x3.
            Destaque para nosso jogador César que ganhou o prêmio de destaque da partida.
            Parabéns a todos que honraram o manto e que venha muito mais!
          </p>
        </ContainerNews>
        <ContainerUniform>
          <ImageUniform src={PhotoUniform} alt="foto-uniforme" />
          <H3>Uniforme do Time</H3>
        </ContainerUniform>
      </Main>
      <Footers/>
    </Container>
  );
}

export default Home;