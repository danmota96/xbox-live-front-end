import GameList from 'components/GameList';
import GenreList from 'components/GenreList';
import NavBar from 'components/NavBar';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { findAllGames } from 'services/gameService';
import * as S from "./style";
import swall from 'sweetalert';

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