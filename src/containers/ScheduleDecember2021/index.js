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
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'

function ScheduleNovember2021() {

    const history = useHistory();

    function goBackPage(){
        history.push('/agenda-jogos/novembro/2021');
    }
    const games = [
        { championship: "Amistoso", date: "05/12/2021", local: "Arena Dunga", TeamHome: "Mosqueteiros Futsal", TeamAway: "Tornado FC", GoalsHome: "", GoalsAway: "" },
        { championship: "1º Festival Mosqueteiros", date: "12/12/2021", local: "Arena Dunga", TeamHome: "Mosqueteiros Futsal", TeamAway: "Brothers FC", GoalsHome: "", GoalsAway: "" },
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
                        <p>Dezembro 2021</p>
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