import styled, { css } from "styled-components";


export const Login = styled.section`
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
	width: 500px;
	height: 350px;
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
		margin-bottom: 25px;
		img {
			height: 180px;
		}
	`}
`;


