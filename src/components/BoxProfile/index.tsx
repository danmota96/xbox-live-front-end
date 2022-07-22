import * as S from "./style";
import React from 'react'
import edit from "assets/icons/edit.svg"

const BoxProfile = () => {
  return (
    <S.BoxProfile>
        <S.ProfileIcon>
        </S.ProfileIcon>
        <h1>Jão</h1>
        <S.EditButton>
        <img src={edit} alt="back" />
        </S.EditButton>
    </S.BoxProfile>
    
  )
}

export default BoxProfile;