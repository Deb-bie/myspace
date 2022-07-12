import styled from 'styled-components'

export const MainNavbar = styled.div`
    height: 70px;
    /* height: ${(h) => h.height}; */
    background-color: #4B0082;
    /* color: #4B0082; */
    // background-color: #37015e
    color: #fff;
    display: flex;
    justify-content: center;
`;

export const NavContainer = styled.div`
    width: 100%;
    max-width: 1024px;
    color: #fff;
    color: #4B0082;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;


export const Logo = styled.div`
    display: flex;
    font-weight: 500;
    font-size: 40px;
    align-items: baseline;
    color: white;
`;

export const LogoSpan = styled.span`
    font-size: 20px;
`;

export const NavItems = styled.div`
    display: flex;
`;

export const NavButton = styled.button`

    margin-left: 20px;
    border: none;
    padding: 10px 10px;
    cursor: pointer;
    color: #4B0082;
    background-color: #fff;
    font-size: 16px;
    border-radius: 20px;
    width: 100px;
    display: ${(hide) => hide.hides};

    &:hover{
        background-color: #4B0082;
        color: #fff;
        transition: 0.5s ease-in-out;
    }
`;


