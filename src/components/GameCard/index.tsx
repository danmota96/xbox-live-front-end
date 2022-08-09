import React from "react";
import { useNavigate } from "react-router-dom";
import { Game } from "types";
import * as S from "./style";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  let Navigate = useNavigate();
  function goToGameDetails() {
    Navigate("/game-details");
  }
  return (
    <S.GameBox>
      <img src={game.image} alt={game.title} onClick={goToGameDetails} />
      <h1>{game.title}</h1>
    </S.GameBox>
  );
};

export default GameCard;
