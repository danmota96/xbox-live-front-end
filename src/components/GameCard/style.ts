import styled, { css } from "styled-components";

export const GameBox = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    
    transition: box-shadow 0.3s;
    background: gray;
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
