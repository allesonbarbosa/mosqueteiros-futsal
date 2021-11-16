import styled from 'styled-components';

export const Container = styled.div `
`
export const ContainerSchedule = styled.div `
    width: 90vw;
    margin: 50px auto;
`
export const ScheduleMenu = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 40px;
    margin-bottom: 80px;
    p{
        font-size: 30px;
        background: rgba(255, 255, 255, 0.05);
        box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.75);
        border-radius: 14px;
        padding: 15px;
    }
`
export const ContainerGameCard = styled.div `
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    @media(max-width: 800px){
        display: flex;
        flex-direction: column;
    }
`
export const GameInfo = styled.div `
    background-color: #656BBF;
    width: 30%;
    border-top-left-radius: 14px;
    border-bottom-left-radius: 14px;
    padding: 10px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    font-size: 25px;
    p{
        text-align: center;
        color: white;
    }
    b{
        color: #FFA500;
        font-weight: 500;
        text-align: center;
    }
    @media(max-width: 800px){
        width: 100%;
        border-top-left-radius: 14px;
        border-top-right-radius: 14px;
        border-bottom-left-radius: 0px;
        margin-right: 0px;
        padding: 0px;
    }
`
export const Scoreboard = styled.div `
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 70%;
    justify-content: center;
    font-size: 25px;
    @media(max-width: 800px){
        width: 100%;
        margin: 20px 0;

    }
`