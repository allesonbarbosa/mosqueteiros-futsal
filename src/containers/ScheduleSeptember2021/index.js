import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    Container,
    ContainerSchedule,
    ScheduleMenu,
    ContainerGameCard,
    GameInfo,
    Scoreboard
} from './styles'
import Headers from '../../components/Header';
import Footers from '../../components/Footer';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'

function ScheduleSeptember2021() {

    const history = useHistory();

    function goBackPage(){
        history.push('/agenda-jogos/março/2020');
    }
    function goForwardPage(){
        history.push('/agenda-jogos/outubro/2021');
    }
    const games = [
        { championship: "Festival Amigos", date: "05/09/2021", local: "Arena Zaírão", TeamHome: "Mosqueteiros Futsal" , TeamAway: "Embaçados FC", GoalsHome: "6", GoalsAway: "3" },
        { championship: "Festival Amigos", date: "19/09/2021", local: "Arena Zaírão", TeamHome: "Mosqueteiros Futsal" , TeamAway: "Sem Compromisso FC", GoalsHome: "1", GoalsAway: "6" },
    ];

    return (
        <Container>
            <Headers/>
            <ContainerSchedule>
                    <ScheduleMenu>
                            <BsFillArrowLeftCircleFill 
                            color="#323673" 
                            size="40px"
                            onClick={goBackPage}
                            cursor="pointer"
                            />
                        <p>Setembro 2021</p>
                            <BsFillArrowRightCircleFill  
                            color="#323673"
                            size="40px"
                            onClick={goForwardPage}
                            cursor="pointer"
                            />
                    </ScheduleMenu>
                    {games.map(game => (
                        <ContainerGameCard>
                            <GameInfo>
                            <b>{game.championship}</b>
                            <p>{game.date}</p>
                            <p>{game.local}</p>
                            </GameInfo>
                            <Scoreboard>
                            <p>{game.TeamHome}</p>
                            <p>{game.GoalsHome}</p>
                            <p>x</p>
                            <p>{game.GoalsAway}</p>
                            <p>{game.TeamAway}</p>
                            </Scoreboard>
                            </ContainerGameCard>
                    ))}
            </ContainerSchedule>
            <Footers/>
        </Container>
    );
};

export default ScheduleSeptember2021;