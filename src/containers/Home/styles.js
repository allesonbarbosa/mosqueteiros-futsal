import styled from 'styled-components';

export const Container = styled.div `
`;
export const Main = styled.main `
    width: 90vw;
    margin: 0 auto;
`;
export const ContainerPrincipal = styled.section `
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.75);
    border-radius: 14px;
    margin: 30px 0;
    p{
        margin: 30px;
        font-size: 20px;
        color: #666666;
        text-align: justify;
    }
`;
export const ContainerNews = styled.section `
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.75);
    border-radius: 14px;
    margin: 30px 0;
    p{
        margin: 30px;
        font-size: 20px;
        color: #666666;
        text-align: justify;  
    }
    img{
        width: 100%;
        border-radius: 14px;
    }
`
export const ContainerUniform = styled.section `
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.75);
    border-radius: 14px;
    margin: 30px 0;
`;
export const H3 = styled.h3 `
    margin: 25px 0px;
    font-size: 40px;
    text-align: center;
`;
export const ImageTeam = styled.img `
    width: 100%;
    border-radius: 14px;
`;
export const ImageUniform = styled.img `
    width: 100%;
    border-radius: 14px;
`;