import ButtonLarge from 'components/ButtonLarge';
import { useNavigate } from 'react-router-dom';
import { createGameService } from 'services/gameService';
import swal from 'sweetalert';
import React, { SyntheticEvent, useState } from 'react';
import * as S from "./style";


interface gameObj {
  title: string;
  description: string;
  genreName: string; 
  price:  number;
  year: number;
  image: string;
  TrailerYouTubeUrl: string;
  GameplayYouTubeUrl: string;
  ImdbScore: number;
}

interface genreObj {
  genre: string;
}

const BoxGameSettings = () => {
  const [values, setGame] = useState({
    title: '',
    description: '',
   genreName: '',
    price: 0,
    year: 0,
    image: '',
    TrailerYouTubeUrl: '',
    GameplayYouTubeUrl: '',
    ImdbScore: 0,
  })

  let navigate = useNavigate();

  const handleChangeValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGame((values: gameObj) => ({
      ...values,
      [event.target.name]: event.target.value
    }))
  };

  const createGame = async (event: SyntheticEvent) => { 
  event.preventDefault();
    const response = await createGameService.createGame(values);
    const jwt = response.data.token;

    if(jwt) {
      localStorage.setItem('jwt', jwt);
      swal({
        title: 'Game registered successfully !',
        icon: "success",
        timer: 7000,
      })
      navigate('/')
    }else {
      swal({
        title: 'Erro!',
        text: `${response.data.message}`,
        icon: 'error',
        timer: 7000
      })
    }
  }

  return (
    
    <S.BoxGameSettings>
    <S.BoxGameSettingsForm onSubmit={createGame}>
    <S.BoxGameSettingsText>
        <span>Register Game</span>
    </S.BoxGameSettingsText>
      <input 
      type="text" 
      placeholder="Game Title" 
      name='title' 
      id='title'
      onChange={handleChangeValues}
      
      />
      <input 
      type="text" 
      placeholder="Description"  
      name='description' 
      id='description' 
      onChange={handleChangeValues}
      />
      <input 
      type="text" 
      placeholder="Genre"  
      name='genreName'
      id='genreName' 
      onChange={handleChangeValues}
     
      /> 
      <input 
      type="number" 
      min='0'
      placeholder="Game price"  
      name='price' 
      id='price' 
      onChange={handleChangeValues}
     
      />
      <input 
      type="number" 
      min='0'
      placeholder="Release year"  
      name='year' 
      id='year'
      onChange={handleChangeValues}
      
     
      />
      <input 
      type="text" 
      placeholder="Youtube Trailer URL"  
      name='TrailerYouTubeUrl' 
      id='TrailerYouTubeUrl' 
      onChange={handleChangeValues}
   
      />
      <input 
      type="text" 
      placeholder="Youtube Gameplay URL"  
      name='GameplayYouTubeUrl' 
      id='GameplayYouTubeUrl' 
      onChange={handleChangeValues}
   
      />
      <input 
      type="number" 
      min='0'
      placeholder="IMDb score"  
      name='ImdbScore' 
      id='ImdbScore' 
      onChange={handleChangeValues}
   
      />
      <input 
      type="text" 
      placeholder="image url"  
      name='image' 
      id='image' 
      onChange={handleChangeValues}
     
      />
      
      <ButtonLarge value='Register' type='submit'/>
    </S.BoxGameSettingsForm>
    
    <S.BoxGenreSettingsForm>
    <S.BoxGameSettingsText>
        <span>Register Genre</span>
    </S.BoxGameSettingsText>
    <input 
      type="text" 
      placeholder="Genre " 
      name='genre' 
      id='genre'
      />
    <ButtonLarge value='Send' type='submit'/>
    </S.BoxGenreSettingsForm> 
    </S.BoxGameSettings>
  )
}

export default BoxGameSettings;