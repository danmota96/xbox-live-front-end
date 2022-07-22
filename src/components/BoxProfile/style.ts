import styled, { css } from "styled-components";

export const BoxProfile = styled.section`
  ${({ theme }) => css``}
  display:flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;


export const ProfileIcon = styled.section`
  ${({ theme }) => css``}
  width: 210px;
height: 210px;
left: 80px;
top: 351px;
background-color:gray;
border-radius: 50%;
`;

export const EditButton = styled.section`
  ${({ theme }) => css``}
  img { 
  width:3rem;
  }
`;