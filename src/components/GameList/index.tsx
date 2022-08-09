import GameCard from 'components/GameCard';
import { Game } from 'types';
import * as S from "./style";

 interface GameListProps  {
  list: Game[];
} 

 const GameList = ({list}: GameListProps) => {

  return (
  <S.GamesSection>
    <h1>All Games</h1>
    <S.GameList>
      {list.map((element, index)=>(
      <GameCard game={element} key={index} />
      ))}
    </S.GameList>
  </S.GamesSection>
  )
}

export default GameList;