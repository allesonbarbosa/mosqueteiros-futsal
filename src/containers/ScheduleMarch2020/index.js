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

function ScheduleMarch2020() {

    const history = useHistory();

    function goForwardPage(){
        history.push('/agenda-jogos/setembro/2021');
    }
    const games = [
        { championship: "Blue Star Champions", date: "01/03/2020", local: "Ginásio SESI Zaíra", TeamHome: "Mosqueteiros Futsal", TeamAway: "Chapolin's FC", GoalsHome: "9", GoalsAway: "1" },
        { championship: "Blue Star Champions", date: "08/03/2020", local: "Ginásio SESI Zaíra", TeamHome: "Sacadeira FC" , TeamAway: "Mosqueteiros Futsal", GoalsHome: "6", GoalsAway: "4" },
        { championship: "Blue Star Champions", date: "15/03/2020", local: "Ginásio SESI Zaíra", TeamHome: "Amigos do Jaiminho FC" , TeamAway: "Mosqueteiros Futsal", GoalsHome: "4", GoalsAway: "1" },
    ];

    return (
        <Container>
            <Headers/>
            <ContainerSchedule>
                    <ScheduleMenu>
                        <p>Março 2020</p>
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

export default ScheduleMarch2020;