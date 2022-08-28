import { useNavigate } from "react-router-dom";
import { Game } from "types";
import * as S from "./style";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  let Navigate = useNavigate();
  function goToGameDetails() {
    Navigate("/game-details/");
  }
  return (
    <S.GameBox  onClick={goToGameDetails}> 
      <img src={game.image} alt={game.title} />
      <h4>{game.title}</h4>
    </S.GameBox>
  );
};

export default GameCard;
