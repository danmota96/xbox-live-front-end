import * as S from "./style";
import React from 'react'
import edit from "assets/icons/edit.svg"

const BoxUser = () => {
  return (
    <S.BoxUser>
        <S.UserIcon>
        </S.UserIcon>
        <h1>DANIEL</h1>
        <S.EditButton>
        <img src={edit} alt="back" />
        </S.EditButton>
    </S.BoxUser>
    
   
  )
}

export default BoxUser;