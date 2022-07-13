import styled, { css } from "styled-components";

export const ButtonLarge = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.textButtonColor};
    border: none;
    color: ${theme.colors.textColor};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 150px;
    font-weight: 400;
    font-size: 20px;
    line-height: 35px;
  `}
`;
