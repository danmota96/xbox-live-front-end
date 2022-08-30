import ButtonLarge from "components/ButtonLarge";
import { useNavigate } from "react-router-dom";
import api from "services/api";
import { Game } from "types";
import * as S from "./style";

interface GameCardProps {
  game: Game;
  setGame: React.Dispatch<React.SetStateAction<Game | undefined>>;
}

interface GameData {
  title?: string;
  description?: string;
  genreName?: string;
  price?: number;
  year?: number;
  image?: string;
  TrailerYouTubeUrl?: string;
  GameplayYouTubeUrl?: string;
  ImdbScore?: number;
}


const GameCard = ({ game, setGame }: GameCardProps) => {
  let Navigate = useNavigate();

  return (
    <S.GameBox onClick={()=> {
      Navigate(`/game-details/${game.id}`);
    }}> 
      <img src={game.image} alt={game.title} />
    </S.GameBox>
  );
};

export default GameCard;
