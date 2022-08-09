import React from "react";
import * as S from "./style";
import back from "assets/icons/back.svg";
import { useNavigate } from "react-router-dom";
import BoxGameSettings from "components/BoxGameSettings";

const GameSettings = () => {
  let Navigate = useNavigate();
  function goToHome() {
    Navigate("/home");
  }

  return (
    <S.GameSettings>
      <S.BackButton>
        <img src={back} alt="backButton" onClick={goToHome} />
      </S.BackButton>
      <S.WhiteBox>
        <S.BoxContent>
          <BoxGameSettings />
        </S.BoxContent>
      </S.WhiteBox>
    </S.GameSettings>
  );
};

export default GameSettings;
