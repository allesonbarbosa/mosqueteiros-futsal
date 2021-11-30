import React from 'react';

import { Container, 
    CardPlayer, 
    ContainerPlayers,
    CardPlayerContainer,
    CardPlayerFront,
    CardPlayerBack} from './styles'
import Headers from '../../components/Header';
import Footers from '../../components/Footer';

import Alleson from '../../assets/alleson_barbosa.jpg';
import Igor from '../../assets/igor_rodrigues.jpg';
import RafaelSantos from '../../assets/rafael_santos.jpg';
import Rai from '../../assets/rai_ferrari.jpg';
import Guilherme from '../../assets/guilherme_delgado.png';
import Matheus from '../../assets/matheus_augusto.jpg';
import Douglas from '../../assets/douglas_lima.jpg';
import Victor from '../../assets/victor_bueno.jpg';
import DefaultAvatar from '../../assets/default_avatar.png';

function TeamCast() {

    const players = [
        { imagem: <img src={Alleson} alt="foto-alle" />, name: "Alle", number: 94, position: "Goleiro", games: 8, goals: 0, assists: 0 },
        { imagem: <img src={Igor} alt="foto-Igor" />, name: "Igor", number: 90, position: "Goleiro", games: 8, goals: 0, assists: 0 },
        { imagem: <img src={RafaelSantos} alt="foto-rafael-santos" />, name: "Rafael Ie", number: 1, position: "Goleiro", games: 4, goals: 0, assists: 0 },
        { imagem: <img src={DefaultAvatar} alt="default-avatar" />, name: "César", number: 6, position: "Fixo", games: 7, goals: 5, assists: 9 },
        { imagem: <img src={DefaultAvatar} alt="default-avatar" />, name: "Queiroz", number: 8, position: "Fixo", games: 11, goals: 1, assists: 4 },
        { imagem: <img src={Rai} alt="foto-rai" />, name: "Rai", number: 12, position: "Fixo", games: 4, goals: 0, assists: 1 },
        { imagem: <img src={DefaultAvatar} alt="defaul-avatar" />, name: "Dennys", number: "", position: "Ala", games: 5, goals: 9, assists: 12 },
        { imagem: <img src={Guilherme} alt="foto-gui" />, name: "Gui", number: 10, position: "Ala", games: 12, goals: 17, assists: 5 },
        { imagem: <img src={Matheus} alt="foto-matheus" />, name: "Matheus", number: 11, position: "Ala", games: 11, goals: 16, assists: 8 },
        { imagem: <img src={DefaultAvatar} alt="defaul-avatar" />, name: "Rafa", number: 7, position: "Ala", games: 5, goals: 9, assists: 1 },
        { imagem: <img src={Douglas} alt="foto-doug" />, name: "Doug", number: 13, position: "Pivô", games: 8, goals: 1, assists: 5 },
        { imagem: <img src={DefaultAvatar} alt="default-avatar" />, name: "Guedes", number: 5, position: "Pivô", games: 9, goals: 2, assists: 5 },
        { imagem: <img src={DefaultAvatar} alt="dafault-avatar" />, name: "Lucas", number: "", position: "Pivô", games: 4, goals: 4, assists: 1 },
        { imagem: <img src={Victor} alt="foto-victor" />, name: "Victor", number: 9, position: "Pivô", games: 13, goals: 4, assists: 5 },
    ];

    return (
        <Container>
            <Headers/>
            <ContainerPlayers>
            <ul>
                {players.map(player =>(
                     <CardPlayer>
                         <CardPlayerContainer>
                             <CardPlayerFront>
                                {player.imagem}
                                    <div>
                                        <b>{player.number}</b>
                                        <p>{player.name}</p>
                                        <b> | </b>
                                        <b>{player.position}</b>
                                    </div>         
                             </CardPlayerFront>
                             <CardPlayerBack>
                                <p>Jogos: {player.games}</p>
                                <p>Gols: {player.goals}</p>
                                <p>Assistências: {player.assists}</p>
                             </CardPlayerBack>
                        </CardPlayerContainer>
                    </CardPlayer>
                ))}
            </ul>
            </ContainerPlayers>
            <Footers/>
        </Container>
    );
};

export default TeamCast;