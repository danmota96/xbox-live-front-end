import styled, { css } from "styled-components";



export const Profiles = styled.section`
	${({ theme }) => css`
        background-color: ${theme.colors.baseBg1};
		min-width: 100vw;
		min-height: 100vh;
		color: ${theme.colors.textColor};
		font-family: 'Roboto';
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

export const BackButton = styled.div`
	${() => css`
		cursor:pointer;
		padding: 1rem;
		img {
		width:2rem;
		}
	`}
`;

export const ProfilesList = styled.section`
	${({ theme }) => css`
	display:flex;
	flex-direction: row;
	gap: 2rem;
	justify-content: center;
	
	`}
`;
