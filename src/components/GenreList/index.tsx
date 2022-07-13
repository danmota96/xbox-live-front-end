import React from 'react'
import * as S from "./style";

const GenreList = () => {
  return (
  <S.GenresSection>
    <h1>Genres</h1>
    <S.GenreList>
      <S.GenreBox />
      <S.GenreBox />
      <S.GenreBox />
      <S.GenreBox />
    </S.GenreList>
  </S.GenresSection>
  )
}

export default GenreList;