import GameCard from 'components/HomepageComponents/GameCard';
import { useGames } from 'contexts/games';
import * as S from "./style";


 const GameList = () => {
  const { games } = useGames();

  return (
  <S.GamesSection>
    <h1>All Games</h1>
    <S.GameList>
      {games.map((element)=>(
      <GameCard 
      game={element} 
      key={element.id}
      />
      ))}
    </S.GameList>
  </S.GamesSection>
  )
}

export default GameList;