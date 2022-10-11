import { useNavigate, useParams } from 'react-router-dom';
import * as S from "./style";
import back from "assets/icons/back.svg";
import { Game } from 'types';
import api from 'services/api';
import { useEffect, useState } from 'react';


const GameDetails = () => {
  const [game, setGame] = useState<Game>({} as Game);
  const { gameId } = useParams();

    let Navigate = useNavigate();
    function goToHome() {
      Navigate("/home");
  } 

const handleGetGameById = () => {
  const token = localStorage.getItem("token");
  
    const headers = { 
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

  api.
  get(`/game/${gameId}`, headers)
  .then((res) => {
    setGame(res.data);
  });
};

useEffect(() => {
  handleGetGameById();
},
[]);

  return (
    <S.GameDetails>
        <S.BackButton >
        <img src={back} onClick={goToHome} />
        </S.BackButton>
        <h1>{game?.title}</h1>
        <S.GameDetailsBox1>
        <img src={game?.image} />
        <iframe src={game.TrailerYouTubeUrl}></iframe>
        <iframe src={game.GameplayYouTubeUrl}></iframe>
        </S.GameDetailsBox1>
       
        <S.GameDetailsBox2>
        <h2>{game.description}</h2>
        <h2>IMDb Score : {game.ImdbScore}</h2>
        <h2>Price: R${game.price}</h2>
        <h2>Release Year: {game.year}</h2>
        
        </S.GameDetailsBox2>
    </S.GameDetails>
  )
}

export default GameDetails;