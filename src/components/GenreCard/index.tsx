import { Genre } from "types";
import * as S from "./style";

interface GenreCardProps {
  genre: Genre;
}

const GenreCard = ({ genre }: GenreCardProps) => {
  return (
    <S.GenreNav>
      <S.NavigationGenresButton>
        <h2>{genre.genre}</h2>
      </S.NavigationGenresButton>
    </S.GenreNav>
  );
};

export default GenreCard;
