import * as S from "./style";
import logo from "assets/imgs/logo.png";
import React from 'react'
import BoxUser from "components/BoxUser";
import back from "assets/icons/back.svg"
import { useNavigate } from "react-router-dom";
import BoxProfile from "components/BoxProfile";

const Profiles = () => {

  let Navigate = useNavigate();
  function goToStart() {
  Navigate("/");
  }

  return (
    <S.Profiles>
      <S.BackButton >
        <img src={back} onClick={goToStart} alt="backbutton" />
        </S.BackButton>
        <S.MenuLogo>
        <img src={logo} alt="Logo" />
      </S.MenuLogo>
      <S.ProfilesList>   
      <BoxUser/>
      <BoxProfile/> 
      </S.ProfilesList>
     
    </S.Profiles>
  )
}

export default Profiles;