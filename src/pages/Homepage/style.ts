import styled, { css } from "styled-components";

export const HomePage = styled.section`
	${({ theme }) => css`
		background-color: ${theme.colors.baseBg1};
		min-width: 100vw;
		min-height: 100vh;
		color: ${theme.colors.textColor};
		font-family: 'Roboto';
		/* background-image: url('./assets/imgs/background.png');
		background-repeat: no-repeat;
  		background-size: cover;
  		background-position: center; */
	`}
`;

