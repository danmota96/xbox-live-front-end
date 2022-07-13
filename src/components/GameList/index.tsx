import React from 'react'
import * as S from "./style";

const GameList = () => {
  return (
  <S.GamesSection>
    <h1>Favorite Games</h1>
    <S.GameList>
      <S.GameBox />
      <S.GameBox />
      <S.GameBox />
      <S.GameBox />
    </S.GameList>
  </S.GamesSection>
  )
}

export default GameList;