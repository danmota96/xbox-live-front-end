import styled, { css } from "styled-components";
import background from "assets/imgs/background.png"

export const HomePage = styled.section`
	${({ theme }) => css`
		background-image: url(${background}); 
		min-width: 100vw;
		min-height: 100vh;
		color: ${theme.colors.textColor};
		font-family: 'Roboto';
		
	`}
`;


export const BoxItems = styled.section`
	${({ theme }) => css`
		margin: 2rem 0 0 5rem;
		width: 90%;
	`}
`;



export const BackButton = styled.div`
	${() => css`
		cursor:pointer;
		padding: 1rem;
		img {
		width:2rem;
		}
	`}
`;