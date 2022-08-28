import GenreCard from 'components/GenreCard';
import { Genre } from 'types';
import * as S from "./style";

interface GenreListProps  { 
  list: Genre[];
}

const GenreList = ({ list }: GenreListProps) => {

  return (
  <S.GenresSection>
    <h1>Genres</h1>
    <S.GenreList>
      {list.map((element, index) => (
         <GenreCard genre={element} key={index}/>
        ))} 
    </S.GenreList>
  </S.GenresSection>
  )
}

export default GenreList;