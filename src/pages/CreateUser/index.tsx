import React from 'react'
import * as S from "./style";
import logo from "assets/imgs/logo.png";
import back from "assets/icons/back.svg"
import BoxCreateUser from 'components/BoxCreateUser';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  let Navigate = useNavigate();
  function goToStart() {
  Navigate("/");
}

  return (
    <S.CreateUser>
        <S.BackButton >
        <img src={back} onClick={goToStart} alt="back-button"/>
        </S.BackButton>
        <S.MenuLogo>
        <img src={logo} alt="Logo" />
      </S.MenuLogo>
      <S.WhiteBox>
      <S.BoxContent>
          <BoxCreateUser/>
        </S.BoxContent>
      </S.WhiteBox>   
    </S.CreateUser>
  )
}

export default CreateUser;