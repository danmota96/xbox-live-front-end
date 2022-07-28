import GenreCard from 'components/GenreCard';
import React, { useEffect, useState } from 'react'
import { findAllGenres } from 'services/genreService';
import * as S from "./style";

interface Genre  { 
  id: string;
  genre: string;
}

const GenreList = () => {
  const[genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
  getAllGenres();
  },[]);

  const getAllGenres = async () => { 
  const response = await findAllGenres.allGenres();
  console.log(response);
  setGenres(response.data);
  }

  return (
  <S.GenresSection>
    <h1>Genres</h1>
    <S.GenreList>
      {genres.map((genre, index) => (
         <GenreCard genre={genre} key={index}/>
        ))} 
    </S.GenreList>
  </S.GenresSection>
  )
}

export default GenreList;