import React from 'react'
import * as S from "./style";


interface cardProps { 
  genre:  { 
  id: string;
  genre: string;
  }
}

const GenreCard = ({genre}: cardProps) => {
  return (
    <S.GenreNav>
      <S.NavigationGenresButton>
      <h2>{genre.genre}</h2>
      </S.NavigationGenresButton>
    </S.GenreNav>
  )
}

export default GenreCard;