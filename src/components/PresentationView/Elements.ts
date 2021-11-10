import styled from 'styled-components';

export const PresentationWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 5;
    background-color: white;
`

export const PresentationNavbar = styled.div`
    position: sticky;
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
`

export const NavbarContainer = styled.div`
    width: 80%;
    position: sticky;
    display: flex;
    justify-content: space-evenly;
`

export const NavTitle = styled.div`
    flex: 3;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 2em;
`

export const NavButton = styled.div`
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PresentationContent = styled.div`
    padding: 5%;
    overflow: auto;
    height: 96vh;
    font-size: 16px;
`