import styled, { css } from "styled-components";


export const GameSettings = styled.section`
	${({ theme }) => css`
		background-color: ${theme.colors.baseBg1};
		min-width: 100vw;
		min-height: 100vh;
		color: ${theme.colors.textColor};
	`}
`;

/* WHITE BOX */
export const BoxContent = styled.main`
	${() => css`
	display:flex;
	justify-content: center;
	align-items: center;
	width: 65rem;
	height: 50rem;
	background: #FFFFFF;
	`}
`;

export const WhiteBox = styled.main`
	${() => css`
		display:flex;
		justify-content: center;	
	`}
`;

export const MenuLogo = styled.main`
	${() => css`
		display:flex;
		justify-content: center;
		margin-bottom: 1rem;
		img {
			height: 180px;
		}
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