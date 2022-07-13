import styled, { css } from "styled-components";

export const HomePage = styled.section`
	${({ theme }) => css`
		background-color: ${theme.colors.baseBg1};
		min-width: 100vw;
		min-height: 100vh;
		color: ${theme.colors.textColor};
	`}
`;

export const NavBar = styled.nav`
	${({ theme }) => css`
		/* INSERIR ICONES  */
	`}
`;

export const GameList = styled.section`
	${({ theme }) => css`
		/* LISTA DE JOGOS EM BOX */
	`}
`;

export const GenreList = styled.section`
	${({ theme }) => css`
		/* LISTA DE GÊNEROS EM BOX */
	`}
`;
