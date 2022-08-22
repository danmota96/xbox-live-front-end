import * as S from "./style";
import back from "assets/icons/back.svg";
import user from "assets/icons/user.svg";
import profiles from "assets/icons/profiles.svg";
import gameSettings from "assets/icons/gamesettings.svg";
import genreSettings from "assets/icons/genresettings.svg";
import { useNavigate } from "react-router-dom";
import SettingsGameCard from "components/SettingsGameCard";
import { mockedGames } from "mocks/games";

const Settings = () => {
  let Navigate = useNavigate();
  function goToHome() {
    Navigate("/home");
  }

  return (
    <S.Settings>
      <S.BackButton>
        <img src={back} alt="backButton" onClick={goToHome} />
      </S.BackButton>

      <S.SettingsNavigationContainer>
        <h2>Settings</h2>
        <S.SettingsNavigationButtonsList>
          <S.SettingsNavigationButtonsContainer>
            <S.SettingsNavigationButtonSelected>
              <img src={user} alt="" />
              <h2>Manage Users</h2>
              <p></p>
            </S.SettingsNavigationButtonSelected>
          </S.SettingsNavigationButtonsContainer>

          <S.SettingsNavigationButtonsContainer>
            <S.SettingsNavigationButtonSelected>
              <img src={profiles} alt="" />
              <h2>Manage Profiles</h2>
              <p></p>
            </S.SettingsNavigationButtonSelected>
          </S.SettingsNavigationButtonsContainer>

          <S.SettingsNavigationButtonsContainer active>
            <S.SettingsNavigationButtonSelected active>
              <img src={gameSettings} alt="" />
              <h2>Manage Games</h2>
              <p></p>
            </S.SettingsNavigationButtonSelected>
          </S.SettingsNavigationButtonsContainer>

          <S.SettingsNavigationButtonsContainer>
            <S.SettingsNavigationButtonSelected>
              <img src={genreSettings} alt="" />
              <h2>Manage Genres</h2>
              <p></p>
            </S.SettingsNavigationButtonSelected>
          </S.SettingsNavigationButtonsContainer>
        </S.SettingsNavigationButtonsList>
      </S.SettingsNavigationContainer>

      <S.EditEntitiesContainer>
        <h2>Manage Games</h2>
     {/*    <S.EditEntitiesSelector>
          <S.EditEntitiesButton>Users</S.EditEntitiesButton>
          <S.EditEntitiesButton>Profiles</S.EditEntitiesButton>
          <S.EditEntitiesButton>Games</S.EditEntitiesButton>
          <S.EditEntitiesButton>Genres</S.EditEntitiesButton>
        </S.EditEntitiesSelector> */}

        <S.EntitiesEditList>
          <S.AddEntitieCard>
            <h2>+</h2>
            <p>Add Game</p>
          </S.AddEntitieCard>

          {mockedGames.map((element) => (
            <SettingsGameCard game={element} key={element.id} />
          ))}
        </S.EntitiesEditList>

       {/*  <S.ConfirmationContainer>
          <button>Cancel</button>
          <button>Save Changes</button>
        </S.ConfirmationContainer> */}
      </S.EditEntitiesContainer>
    </S.Settings>
  );
};

export default Settings;
