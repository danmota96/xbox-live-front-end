import styled, { css } from "styled-components";

interface NavigationGenresButtonProps {
  active?: boolean;
}

export const GenreNav = styled.div`
  ${({ theme }) => css`
  width: 15%;
  height: 3vh;
  border-bottom: 1px solid #393c49;
  display:flex;
  align-items: center;
  justify-content: center;
  `}
`;
export const NavigationGenresButton = styled.button<NavigationGenresButtonProps>`
  color: #ffffff;
  border: 0;
  cursor: pointer;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  margin-right: 0.4rem;
  background-color: #252836;
  transition: all .3s ease-in-out;
  :hover {
    color: #ffffff;
    transform: scale(1.1);
  }
 
  ${({ active }) =>
    active &&
    css`
      color: #red;
      border-bottom: 2px solid #6cea69;
    `}
`;
