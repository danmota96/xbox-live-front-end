import styled, { css } from "styled-components";
import background from "assets/imgs/background2.png"

interface ActiveButtonProps {
	active?: boolean;
}
export const Settings = styled.div`
	${({ theme }) => css`
		background-image: url(${background}); 
		image
		min-width: 100vw;
		min-height: 100vh;
		color: ${theme.colors.textColor};
		display:flex;
		font-family: "Roboto";
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

export const SettingsNavigationContainer = styled.div`
	${() => css`
		min-width: 19.188rem;
		margin-top: 3rem;
		height: 90vh;
		padding: 1.5rem;
		background-color: #262626; 
		box-sizing: border-box;
		border-radius: 8px;
	`}
`;

export const SettingsNavigationButtonsList = styled.div`
	${() => css`
		width: 100%;
		height: 45.188rem;
		background-color: #0D0D0D; 
		box-sizing: border-box;
		margin: 1.5rem 0;
		border-radius: 8px;
		overflow: hidden;
	`}
`;

export const SettingsNavigationButtonsContainer = styled.div<ActiveButtonProps>`
	${({theme, active}) => css`
		height: 5.5rem;
		width: 100%;
		padding: 1.5rem 0;
		padding-left: 3rem;
		box-sizing: border-box;
		h2 { 
			font-size: 20px;
			
		}
		img { 
			width: 30px;
		}
		${active &&
    css`
      background-color: ${theme.colors.primaryColorOpacity};
    `}
	`}
`;

export const SettingsNavigationButtonSelected = styled.div<ActiveButtonProps>`
	${({theme, active}) => css`
		width: 100%;
		height: 100%;

		${active && css`
			border-right: 3px solid ${theme.colors.primaryColor};
			
		`}
	`}
`;

export const EditEntitiesContainer = styled.div`
	${({ theme }) => css`
		width: 100%;
		height: 90vh;
		padding: 1rem;
		margin-top: 3rem;
		margin-bottom: 1.5rem;
		border-radius: 8px;
		background-color: #262626; 
		margin-left: 2rem;
		margin-right: 2rem;
		box-sizing: border-box;
	`}
`;

/* export const EditEntitiesSelector = styled.div`
	${({ theme }) => css`
	width: 100%;
    height: 2.5rem;
    border-bottom: 1px solid ${theme.colors.baseLine};
    padding: 0 1.5rem;
    box-sizing: border-box;
    `}
`; */

export const EditEntitiesButton = styled.button<ActiveButtonProps>`
	${({ theme, active }) => css`
	height: 100%;
    padding: 0 0.2rem;
    box-sizing: border-box;
    background-color: ${theme.colors.baseBg2};
    margin-right: 1.5rem;
    cursor: pointer;
    :hover {
      color: ${theme.colors.textColor};
    }
    ${active &&
    css`
      color: ${theme.colors.primaryColor};
      border-bottom: 1px solid ${theme.colors.primaryColor};
    `}
  `}
`;

export const EntitiesEditList = styled.div`
	${({ theme }) => css`
	width: 95%;
    height: 85%;
    display: flex;
    flex-wrap: wrap;
    padding: 1.5rem;
    box-sizing: border-box;
    gap: 3rem;
    overflow-y: scroll;
	`}
`;

export const AddEntitieCard = styled.div`
	${({ theme }) => css`
	width: 13.75rem;
    height: 18.75rem;
    border-radius: 8px;
    border: 1px dashed ${theme.colors.primaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.primaryColor};
    cursor: pointer;
	`}
`;

export const EntityCard = styled.div`
	${({ theme }) => css`
	width: 13.75rem;
    height: 18.75rem;
    border-radius: 8px;
    border: 1px solid ${theme.colors.primaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.primaryColor};
    cursor: pointer;
	`}
`;

/* export const ConfirmationContainer = styled.div`
	${({ theme }) => css`
	width: 100%;
    height: 7.5rem;
    padding-left: 1.5rem;
    padding-top: 3.125rem;
    box-sizing: border-box;
    display: flex;
    gap: 1rem;
	`}
`; */
