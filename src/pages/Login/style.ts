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


export const BoxLogin = styled.section`
  ${({ theme }) => css``}
`;

export const BoxLoginText = styled.span`
  ${({ theme }) => css`
    width: 442px;
    height: 38px;
    left: 514px;
    top: 354px;
    color: ${theme.colors.textBoxColor};
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    margin-bottom: 15px;
    padding: 10px;
  `}
`;

export const BoxLoginForm = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
   
    input {
      ${theme.mixins.input()};
      color: ${theme.colors.textColorInput};
    }
    a {
      text-decoration:none;
      margin-top:2px;
      font-family: "Roboto";
    }
  `}
`;

export const BoxLoginError = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.secondaryColor};
    text-align: center;
    display: inline-block;
    margin-top: 25px;
  `}
`;