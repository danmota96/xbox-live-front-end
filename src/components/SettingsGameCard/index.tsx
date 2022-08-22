import { Game } from "types";
import * as S from "./style";


interface SettingsGameCardProps { 
    game: Game;
}

const SettingsGameCard = ({game}: SettingsGameCardProps ) => {
  return (
    <S.SettingsGameCardContainer>
        <img src={game.image} alt={game.title}/>
        <h3>{game.title}</h3>
        <S.SettingsGameCardButton>Edit Game</S.SettingsGameCardButton>
    </S.SettingsGameCardContainer>
  )
}

export default SettingsGameCard;