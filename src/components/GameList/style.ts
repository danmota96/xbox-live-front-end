import styled, { css } from "styled-components";


export const GamesSection = styled.section`
	${({ theme }) => css`
	`}
`;

export const GameList = styled.section`
	${({ theme }) => css`
    display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 2rem;
	`}
`;


export const GameBox = styled.div`
	${({ theme }) => css`
	width:20.813rem;
height: 18.75rem;
left: 10.625px;
top: 13.375px;
background-color: gray;
	`}
`;