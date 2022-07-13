import ButtonLarge from 'components/ButtonLarge';
import React from 'react'
import * as S from "./style";

const BoxLogin = () => {
  return (
    <S.BoxLogin>
      <S.BoxLoginText>
        <span>Sign in</span>
      </S.BoxLoginText>
    <S.BoxLoginForm>
      <input type="text" placeholder="E-mail" />
      <input type="password" placeholder="Password" />
      <a href="DIRECIONAR PARA CREATE USER">No account? Create one!</a>
      <ButtonLarge value="Sign in" type="button" />
    </S.BoxLoginForm>
  </S.BoxLogin>
  )
}

export default BoxLogin;