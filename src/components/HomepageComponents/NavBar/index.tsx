import * as S from "./style";
import settings from 'assets/icons/settings.svg'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  let Navigate = useNavigate();
  function goToSettings() {
  Navigate("/settings/games");
}

  return (
    <S.NavBarIcons> 
            <S.UserIcon/>
            <h1>DANIEL</h1>
          <S.settingsSVG src={settings} onClick={goToSettings} />
    </S.NavBarIcons>
  )
}

export default NavBar;