import GameList from 'components/GameList';
import GenreList from 'components/GenreList';
import NavBar from 'components/NavBar';
import React from 'react'
import * as S from "./style";

const HomePage = () => {
  return (
    <S.HomePage>
      <NavBar />
      <GameList />
      <GenreList />
      
    </S.HomePage>
  )
}

export default HomePage;