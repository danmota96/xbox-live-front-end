import GameList from 'components/GameList';
import GenreList from 'components/GenreList';
import NavBar from 'components/NavBar';
import { useNavigate } from 'react-router-dom';
import back from "assets/icons/back.svg";
import * as S from "./style";
import { mockedGames } from 'mocks/games';
import { useGames } from 'contexts/games';


const HomePage = () => {  
  const { games } = useGames();

  let Navigate = useNavigate();
  function goToStart() {
  Navigate("/profile/select");
}
  return (
    <S.HomePage>
      <S.BackButton >
        <img src={back} onClick={goToStart} />
        </S.BackButton>
      <NavBar />
      <section>
      <S.BoxItems>
      <GameList list={games} />
      {/* <FavoriteList/> */}
      <GenreList /> 
      </S.BoxItems>
      </section>
      

    </S.HomePage>
  )
}

export default HomePage;