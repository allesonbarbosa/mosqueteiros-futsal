import styled from 'styled-components';

export const Header = styled.header `
    background-color: #323673;
    height: 330px;
    display: flex;
    flex-direction: column;
    @media(max-width: 1000px){
        height: 200px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    margin-bottom: ${({isOpen}) => (isOpen ? "250px" : "0")};
`;
export const ContainerHeaderInstagram = styled.div `
    height: 20px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: flex-end;
    margin-top: 15px;
    margin-right: 15px;
    @media(max-width: 1000px){
        display: none;
    }
`
export const H2 = styled.h2 `
    color: white;
    font-size: 25px;
    padding-top: 5px;
`;
export const ContainerTitle = styled.div `
    display: flex;
    flex-direction: row;
    gap: 150px;
    align-items: center;
    @media(max-width: 1000px){
        justify-content: center;
    }
`;
export const Image = styled.img `
    width: 200px;
    @media(max-width: 1000px){
        width: 140px;
    }
`;
export const H1 = styled.h1 `
    color: white;
    font-size: 60px;
    text-align: center;
    @media(max-width: 1000px){
        display: none;
    }
`;
export const Nav = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
`;
export const Hamburguer = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    margin-right: 50px;
    span{
        height: 3.5px;
        width: 35px;
        background: white;
        margin-bottom: 4.5px;
        transition: all ease 0.8s;
    }
    @media(max-width: 1000px){
        display: flex;
    }
    .first-hamburguer{
        transform: ${({isOpen}) => (isOpen ? "rotate(45deg) translateX(3px)" : "1")};
        margin-bottom: ${({isOpen}) => (isOpen && "0")};
    }
    .second-hamburguer{
        display: ${({isOpen}) => (isOpen ? "none" : "flex")};
    }
    .third-hamburguer{
        transform: ${({isOpen}) => (isOpen ? "rotate(-45deg) translateX(2px)" : "1")};
        margin-bottom: ${({isOpen}) => (isOpen && "0")};
    }
`
export const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 35px;
    a{
        color: white;
        margin: 10px 10px;
        font-size: 30px;
        text-decoration: none;
        text-transform: uppercase;
        &:hover{
            color: #FFA500;
        }
    }
    @media(max-width: 1000px){
        position: absolute;
        top: 200px;
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        max-height: ${({isOpen}) => (isOpen ? "300px" : "0")};
        background-color: ${({isOpen}) => (isOpen ? "#323673" : "0")};
    }
    .logo-instagram{
        display: ${({isOpen}) => (isOpen ? "flex" : "none")};
    }
`