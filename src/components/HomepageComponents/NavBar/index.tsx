import * as S from "./style";
import settings from "assets/icons/settings.svg";
import { useNavigate } from "react-router-dom";
import { mockedUsers } from "mocks/users";

const NavBar = () => {
  let Navigate = useNavigate();
  function goToSettings() {
    Navigate("/settings/games");
  }

  return (
    <S.NavBarIcons>
      {mockedUsers.map((element) => (
        <div>
          <S.UserIcon 
          src={element.image}
          />
          <h1>{element.name}</h1>
        </div>
      ))}
      <S.settingsSVG src={settings} onClick={goToSettings} />
    </S.NavBarIcons>
  );
};

export default NavBar;
