import GameCard from 'components/HomepageComponents/GameCard';
import { useGames } from 'contexts/games';
import { mockedGames } from 'mocks/games';
import { useState } from 'react';
import { Game } from 'types';
import GameDetailsModal from '../GameDetailsModal';
import * as S from "./style";

/* gameid - card vai receber o gameid */
 
 const GameList = () => {
  const { games } = useGames();
  const [game, setGame] = useState<Game | undefined>(undefined);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

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