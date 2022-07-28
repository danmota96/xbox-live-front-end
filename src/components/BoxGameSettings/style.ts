import styled, { css } from "styled-components";


export const BoxGameSettings = styled.section`
  ${({ theme }) => css``}
  display: flex;
  flex-direction: row;
  gap: 4rem;
  margin-top: 2rem;
`;

export const BoxGameSettingsText = styled.span`
  ${({ theme }) => css`
    width: 27.625rem;
    height: 2.375rem;
    left: 32.125rem;
    top: 22.2rem;
    color: ${theme.colors.textBoxColor};
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 2.5rem;
    margin-bottom: 1rem;
    padding: .3rem;
  `}
`;

export const BoxGameSettingsForm = styled.form`
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

export const BoxGenreSettingsForm = styled.form`
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


