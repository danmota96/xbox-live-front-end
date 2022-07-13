import React from 'react'
import * as S from "./style";
import gameMGM from 'assets/icons/game-add.svg'
import userMGM from 'assets/icons/users.svg'

const NavBar = () => {
  return (
    <S.NavBarIcons>
        
        <S.UserBox>
          <h1>FOTO DO USUÁRIO (GETBYID)</h1>
            <h1>NOME DO USUÁRIO OU PERFIL</h1>
        </S.UserBox>
        <S.NavBarIcons>
        <S.GameManagementSVG src={gameMGM}/>
        <S.UserManagementSVG  src={userMGM}/>
        </S.NavBarIcons>
    </S.NavBarIcons>
  )
}

export default NavBar;