import React from 'react'
import * as S from "./style";
import gameMGM from 'assets/icons/game-add.svg'
import userMGM from 'assets/icons/user-settings.svg'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  let Navigate = useNavigate();
  function goToGameSettings() {
  Navigate("/game-settings");
}

  return (
    <S.NavBarIcons> 
            <S.UserIcon/>
            <h1>DANIEL</h1>
          <S.GameManagementSVG src={gameMGM} onClick={goToGameSettings} />
        <S.UserManagementSVG  src={userMGM} />
    </S.NavBarIcons>
  )
}

export default NavBar;