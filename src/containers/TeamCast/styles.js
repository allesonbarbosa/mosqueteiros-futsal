import styled from 'styled-components';

export const Container = styled.div`
`
export const ContainerPlayers = styled.div`
        width: 90vw;
        margin: 40px auto;
        padding: 30px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        ul{
            max-width: 1240px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
        }
`
export const CardPlayer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0px;
    width: 400px;
    height: 400px;
    perspective: 1000px;
    @media(max-width: 920px){
        width: 80vw;   
        height: 75vw;
    }

`
export const CardPlayerContainer = styled.div `
    position: relative;
    height: 100%;
    transition: transform .8s;
    transform-style: preserve-3d;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.75);
    border-radius: 14px;
    :hover{
        transform: rotateY(180deg);
    }
`
export const CardPlayerFront = styled.div `
            position: absolute;
            width: 100%;
            backface-visibility: hidden;
            z-index: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
    
    div{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 5px;
            width: 100%;
            height: 100%;
            margin-top: 20px;
        }
    img{
        border-top-left-radius: 14px;
        border-top-right-radius: 14px;
        width: 100%;
        height: 100%;
    }
    p{
        color: #323673;
        text-transform: uppercase;
        font-size: 23px;
        text-align: center;
    }
    b{
        color: #FFA500;
        text-transform: uppercase;
        font-size: 23px;
        text-align: center;
    }
`
export const CardPlayerBack = styled.div`
    transform: rotateY(180deg);
    width: 100%;
    height: 100%;
    border-radius: 14px;
    background-color: #656BBF;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    p{
        font-size: 25px;
        color: white;
    }
`