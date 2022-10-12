import styled, { css } from "styled-components";


export const GenresSection = styled.section`
	${({ theme }) => css`
	margin-top: 7rem;
	h1 {
		font-size: 3rem;
	}
	`}
`;

export const GenreList = styled.section`
	${({ theme }) => css`
    display: flex;
	flex-direction: row;
	`}
`;
