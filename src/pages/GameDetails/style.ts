import styled, { css } from "styled-components";
import background from "assets/imgs/background.png"

export const GameDetails = styled.section`
	${({ theme }) => css`
		background-image: url(${background}); 
		min-width: 100vw;
		min-height: 100vh;
		color: ${theme.colors.textColor};
		font-family: 'Roboto';
		h1 {  
		text-align: center;
		font-size: 1.7rem;
		}
	`}
`;

export const GameDetailsBox1 = styled.div`
	${({ theme }) => css`
	margin-top: 2rem;
	display: flex;
	flex-direction: row;
	gap: 2rem;
	justify-content: center;
	align-items: center;
	img { 
		width: 15rem;
		height: 15rem;
	}
	iframe { 
		width: 30rem;
		height: 25rem;
	}
	`}
`;

export const GameDetailsBox2= styled.div`
	${({ theme }) => css`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	justify-content: flex-end;
	padding: 2rem;
	width: 70%;
	margin-left: 6rem;
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