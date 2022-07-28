import GameCard from 'components/GameCard';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { findAllGames } from 'services/gameService';
import * as S from "./style";

 interface Game  {
  id: string;
  title: string;
  description: string;
  price: number;
  year: number;
  image: string;
  TrailerYouTubeUrl: string;
  GameplayYouTubeUrl: string;
  genreName: string;
  ImdbScore: number;
} 

 const GameList = () => {

  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => { 
  getAllGames();
  },[]);

  const getAllGames = async () => { 
    const response = await findAllGames.allGames()  ;
    console.log(response);
    setGames(response.data);
  }

  return (
  <S.GamesSection>
    <h1>All Games</h1>
    <S.GameList>
      {games.map((game, index)=>(
      <GameCard game={game} key={index} />
      ))}
    </S.GameList>
  </S.GamesSection>
  )
}

export default GameList;