import { StyledInput } from "assets/styles/globalStyles";
import { ModalOverlay } from "assets/styles/globalStyles";
import ButtonLarge from "components/ButtonLarge";

import * as S from "./style";

const GameModal = () => {
  return (
    <ModalOverlay>
      <S.ModalContainer>
        <StyledInput />
        <StyledInput />
        <StyledInput />
        <StyledInput />
        <StyledInput />
        <StyledInput />
        <div>
          <ButtonLarge value={"Send"} />
          <ButtonLarge value={"Cancel"} />
        </div>
      </S.ModalContainer>
    </ModalOverlay>
  );
};

export default GameModal;
