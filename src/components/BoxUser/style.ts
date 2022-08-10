import styled, { css } from "styled-components";

export const BoxUser = styled.section`
  ${({ theme }) => css``}
  display:flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  
`;

export const UserIcon = styled.img`
  ${({ theme }) => css``}
  cursor: pointer;
  width: 13rem;
  height: 13rem;
  background-color: gray;
  border-radius: 50%;
  transition: all .3s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
  
`;

export const EditButton = styled.section`
  ${({ theme }) => css``}
  cursor: pointer;
  transition: all .3s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
  img {
    width: 3rem;
  }
`;
