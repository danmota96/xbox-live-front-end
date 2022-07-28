import * as S from "./style";
import React, { useEffect, useState } from 'react'
import edit from "assets/icons/edit.svg"
import { useNavigate } from "react-router-dom";
import { findUserByIdService } from "services/userService";

  interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    cpf: string;
    image: string;
}

const BoxUser = () => {
  let Navigate = useNavigate();
  function goToAdminHome() {
  Navigate("/home");
}

  return (
    <S.BoxUser>
        <S.UserIcon src='http://placeimg.com/640/480/tech' alt='user avatar' onClick={goToAdminHome}>
        </S.UserIcon>
        <h1>Daniel</h1>
        <S.EditButton>
        <img src={edit} alt="back" />
        </S.EditButton>
    </S.BoxUser>
  )
}

export default BoxUser;