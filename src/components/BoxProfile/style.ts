import styled, { css } from "styled-components";

export const BoxProfile = styled.section`
  ${({ theme }) => css``}
  display: flex;
  flex-direction: row;
  gap: 2rem;
  div {
  display:flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
 }
`;


export const ProfileIcon = styled.img`
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



