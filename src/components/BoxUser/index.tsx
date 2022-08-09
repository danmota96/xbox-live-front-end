import * as S from "./style";
import edit from "assets/icons/edit.svg"
import { useNavigate } from "react-router-dom";

const BoxUser = () => {
  let Navigate = useNavigate();
  function goToAdminHome() {
  Navigate("/home");
}

  return (
    <S.BoxUser>
        <S.UserIcon src='user-image' alt='loggeuser' onClick={goToAdminHome}>
        </S.UserIcon>
        <h1>Admin</h1>
        <S.EditButton>
        <img src={edit} alt="back" />
        </S.EditButton>
    </S.BoxUser>
  )
}

export default BoxUser;