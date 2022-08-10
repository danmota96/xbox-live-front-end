import styled, { css } from "styled-components";

export const GameBox = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    justify-content: center;
    flex-direction: column;
    transition: box-shadow 0.3s;
    :hover {
      box-shadow: 0px 0px 9px 4px #a6dfff;
    }
    img {
      object-fit: cover;
      width: 10rem;
      height: 12rem;
    }
  `}
`;
