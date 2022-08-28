import styled, { css } from "styled-components";


export const GamesSection = styled.section`
	${({ theme }) => css`
	font-size: 3rem;
	`}
`;

export const GameList = styled.section`
	${({ theme }) => css`
    display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 1rem;
	margin-top: 1rem;
	font-size: 1rem;
	`}
`;


