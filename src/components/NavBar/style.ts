import styled, { css } from "styled-components";

export const NavBarIcons = styled.section`
	${({ theme }) => css`
	display:flex;
	flex-direction: row; 
	gap: 1rem;
	margin-left: 3rem;
	padding: 2rem;
	`}
`;

export const UserIcon = styled.img`
  ${({ theme }) => css``}
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  background-color: gray;
  border-radius: 50%;

`;


export const  GameManagementSVG= styled.img`
	${({ theme }) => css`
	width: 3rem;
	transition: all .3s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
	`}
`;

export const UserManagementSVG = styled.img`
	${({ theme }) => css`
	width: 3rem;
	transition: all .3s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
	`}
`;
