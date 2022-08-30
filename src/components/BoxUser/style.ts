import styled, { css } from "styled-components";

export const BoxUser = styled.section`
  ${() => css``}
 div {
  display:flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
 }
  
`;



export const UserIcon = styled.img`
  ${({ theme }) => css``}
  cursor: pointer;
  width: 13rem;
  height: 13rem;
  background-color: gray;
  border-radius: 50%;
  transition: all .3s ease-in-out;
  border-radius: 8px;
  object-fit: cover;
  :hover {
    transform: scale(1.1);
  }
  
`;

