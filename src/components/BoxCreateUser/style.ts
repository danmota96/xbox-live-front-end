import styled, { css } from "styled-components";

export const BoxCreateUser = styled.section`
  ${({ theme }) => css``}
`;

export const BoxCreateUserText = styled.span`
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

export const BoxCreateForm = styled.form`
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

export const BoxCreateError = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.secondaryColor};
    text-align: center;
    display: inline-block;
    margin-top: 25px;
  `}
`;