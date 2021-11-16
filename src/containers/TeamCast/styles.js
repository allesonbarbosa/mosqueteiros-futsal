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
        background: rgba(255, 255, 255, 0.05);
        box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.75);
        border-radius: 14px;
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
    div{
            display: flex;
            flex-direction: row;
            gap: 10px;
            justify-content: center;
            margin-top: 20px;
        }
    img{
        width: 400px;
        @media(max-width: 920px){
            width: 90vw;
            padding: 0 15px;

        }
    }
    p{
        color: #323673;
        text-transform: uppercase;
        font-size: 25px;
        @media(max-width: 920px){
            font-size: 32px;
        }
    }
    b{
        color: #FFA500;
        text-transform: uppercase;
        font-size: 25px;
        @media(max-width: 920px){
            font-size: 32px;
        }
    }
`