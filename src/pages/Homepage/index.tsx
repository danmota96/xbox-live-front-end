import GameList from 'components/HomepageComponents/GameList';
import GenreList from 'components/HomepageComponents/GenreList';
import NavBar from 'components/HomepageComponents/NavBar';
import { useNavigate } from 'react-router-dom';
import back from "assets/icons/back.svg";
import * as S from "./style";
import { useGenres } from 'contexts/genres';
import api from 'services/api';


const HomePage = () => {  
  const { genres } = useGenres();
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
      <GameList/>
      {/* <FavoriteList/> */}
      <GenreList list={genres}/> 
      </S.BoxItems>
      </section>
      

    </S.HomePage>
  )
}

export default HomePage;