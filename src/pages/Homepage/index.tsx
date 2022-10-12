import GameList from 'components/HomepageComponents/GameList';
import GenreList from 'components/HomepageComponents/GenreList';
import NavBar from 'components/HomepageComponents/NavBar';
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
      <section>
      <S.BoxItems>
      <GameList/>
      {/* <FavoriteList/> */}
      <GenreList/> 
      </S.BoxItems>
      </section>
      

    </S.HomePage>
  )
}

export default HomePage;