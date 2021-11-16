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

function ScheduleOctober2021() {

    const history = useHistory();

    function goBackPage(){
        history.push('/agenda-jogos/setembro/2021');
    }
    function goForwardPage(){
        history.push('/agenda-jogos/novembro/2021');
    }
    const games = [
        { championship: "Amistoso", date: "31/10/2021", local: "Arena Dunga", TeamHome: "Mosqueteiros Futsal", TeamAway: "Bomba Patch", GoalsHome: "14", GoalsAway: "6" },
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
                        <p>Outubro 2021</p>
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

export default ScheduleOctober2021;