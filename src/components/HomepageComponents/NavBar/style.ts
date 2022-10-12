import styled, { css } from "styled-components";

export const NavBarIcons = styled.section`
	${({ }) => css`
	display:flex;
	flex-direction: row; 
	gap: 1rem;
	margin-left: 5rem;
	padding: .3rem;
	h1 { 
		margin-top: 1rem;
		margin-right: 2rem;
	}
	`}
`;

export const UserIcon = styled.img`
  ${({ }) => css``}
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 50%;
`;


export const  settingsSVG= styled.img`
	${({ }) => css`
	width: 3rem;
	transition: all .3s ease-in-out;
	cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
	`}
`;
