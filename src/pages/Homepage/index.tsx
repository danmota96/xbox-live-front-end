import GameList from 'components/GameList';
import GenreList from 'components/GenreList';
import NavBar from 'components/NavBar';
import { useNavigate } from 'react-router-dom';
import back from "assets/icons/back.svg";
import * as S from "./style";


const HomePage = () => {  
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
      <S.BoxItems>
      <GameList />
      {/* <FavoriteList/> */}
      <GenreList /> 
      </S.BoxItems>

    </S.HomePage>
  )
}

export default HomePage;