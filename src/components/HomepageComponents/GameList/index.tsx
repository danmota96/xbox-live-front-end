import GameCard from 'components/HomepageComponents/GameCard';
import { useGames } from 'contexts/games';
import { useState } from 'react';
import { Game } from 'types';
import * as S from "./style";


 const GameList = () => {
  const { games } = useGames();
  const [game, setGame] = useState<Game | undefined>(undefined);

  return (
  <S.GamesSection>
    <h1>All Games</h1>
    <S.GameList>
      {games.map((element)=>(
      <GameCard 
      setGame={setGame}
      game={element} 
      key={element.id}
  
      />
      ))}
    </S.GameList>
  </S.GamesSection>
  )
}

export default GameList;