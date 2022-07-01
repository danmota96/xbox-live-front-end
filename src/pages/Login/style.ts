import styled, { css } from "styled-components";

export const Login = styled.section`
	${({ theme }) => css`
		background-color: ${theme.colors.baseBg1};
		min-width: 100vw;
		min-height: 100vh;
		color: ${theme.colors.textColor};
		display: flex;
		justify-content: space-between;
	`}
`;

export const LoginContent = styled.main`
	${() => css`
		width: calc(100% - 450px);
		padding: 20px;
		overflow: auto;
		height: 100vh;
		box-sizing: border-box;
	`}
`;

export const BoxContent = styled.main`
	${() => css`
		
position: absolute;
width: 658px;
height: 416px;
left: 420px;
top: 273px;

background: #FFFFFF;
	`}
`;

export const MenuLogo = styled.div`
	${() => css`
		display: flex;
		justify-content: center;
		padding: 0 0 20px 0;
		img {
			height: 80px;
		}
	`}
`;
