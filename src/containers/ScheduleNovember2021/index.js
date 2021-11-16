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

function ScheduleNovember2021() {

    const history = useHistory();

    function goBackPage(){
        history.push('/agenda-jogos/outubro/2021');
    }
    function goForwardPage(){
        history.push('/agenda-jogos/dezembro/2021');
    }
    const games = [
        { championship: "Amistoso", date: "07/11/2021", local: "Arena Dunga", TeamHome: "Mosqueteiros Futsal", TeamAway: "Feital FC", GoalsHome: "6", GoalsAway: "9" },
        { championship: "Amistoso", date: "07/11/2021", local: "Arena Dunga", TeamHome: "Mosqueteiros Futsal", TeamAway: "Real Mercenários", GoalsHome: "3", GoalsAway: "6" },
        { championship: "Amistoso", date: "14/11/2021", local: "Arena Dunga", TeamHome: "Mosqueteiros Futsal", TeamAway: "Chapolin's FC", GoalsHome: "24", GoalsAway: "1" },
        { championship: "Amistoso", date: "21/11/2021", local: "Arena Dunga", TeamHome: "Mosqueteiros Futsal", TeamAway: "Raça União FC", GoalsHome: "", GoalsAway: "" },
        { championship: "Amistoso", date: "28/11/2021", local: "Arena Dunga", TeamHome: "Mosqueteiros Futsal", TeamAway: "Sem Compromisso FC", GoalsHome: "", GoalsAway: "" },
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
                        <p>Novembro 2021</p>
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

export default ScheduleNovember2021;