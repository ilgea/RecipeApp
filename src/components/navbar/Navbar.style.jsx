import { Link } from "react-router-dom";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

export const NavStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.navbarBgColor};
  align-items: center;
  flex-wrap: wrap;
`;

export const NavLeftTitle = styled.div`
  font-size: 1.2rem;
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    /* font-size: 1.1rem; */
  }
`;

export const LinkDiv = styled.div`
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    transition: max-height 0.4s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "400px" : "0")};
    overflow: hidden;
  }
`;

export const LinkStyled = styled(Link)`
  font-size: 1rem;
  text-align: center;
  text-decoration: none;
  padding: 10px 10px;
  transition: opacity 0.3s ease-in-out, background-color 0.3s ease-in-out,
    color 0.3s ease-in-out;
  &&:hover {
    text-decoration: underline 1px;
    background-color: cornflowerblue;
    color: white;
    border-radius: 5px;
    text-underline-offset: 3px;
  }
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    width: 100%;
    border-bottom: 1px solid cornflowerblue;
    font-size: 0.9rem;
    &&:hover {
      text-decoration: none;
    }
  }
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    display: block;
  }
`;

export const DeneBurger = styled(GiHamburgerMenu)`
  transform: ${({ isOpen }) => (isOpen ? "rotate(90deg)" : "rotate(0)")};
  transition: transform 0.4s ease-in-out;
`;
