import styled from 'styled-components';

export const Footer = styled.footer `
    background-color: #323673;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const ContainerFooter = styled.div `
    width: 80vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media(max-width: 785px){
        display: flex;
        flex-direction: column;
    } 
`;
export const FooterInstagram = styled.div `
    width: 100%;
    @media(max-width: 785px){
        display: flex;
        flex-direction: column;
        align-items: center;
    } 
`;
export const H4 = styled.h4 `
    color: white;
    font-size: 24px;
    font-weight: 400;
    margin: 20px 0px;
`;
export const FooterMenu = styled.div `
    width: 100%;
    ul{
        list-style: none;
        font-size: 22px;
        color: #CCCCCC;
    }
    li{
        margin: 10px 0;
    }
    a{
        color: inherit;
    }
    a:hover{
        color:#FFA500;
    } 
    @media(max-width: 785px){
        display: flex;
        flex-direction: column;
        align-items: center;
        ul{
            text-align: center;
        }
    } 
`;
export const Localization = styled.div `
    width: 100%;
    p{
        font-size: 22px;
        color: #CCCCCC;
        margin-bottom: 10px;
    }
    img{
        width: 90px;
    }
    @media(max-width: 785px){
        display: flex;
        flex-direction: column;
        align-items: center;
    } 
`;
export const ContainerCopyright = styled.div `
    margin-top: 50px;
    margin-bottom: 20px;
    p{
        color: white;
        font-size: 24px;
        text-align: center ;
    }
    
`;