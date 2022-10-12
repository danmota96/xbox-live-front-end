import GenreCard from 'components/HomepageComponents/GenreCard';
import { mockedGenres } from 'mocks/genres';
import * as S from "./style";


const GenreList = () => {
  return (
  <S.GenresSection>
    <h1>Genres</h1>
    <S.GenreList>
      {mockedGenres.map((element) => (
         <GenreCard genre={element} key={element.id}/>
        ))} 
    </S.GenreList>
  </S.GenresSection>
  )
}

export default GenreList;