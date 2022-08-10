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
        <S.UserIcon src='https://avatarfiles.alphacoders.com/218/218198.jpg' alt='loggeduser' onClick={goToAdminHome}>
        </S.UserIcon>
        <h1>Admin</h1>{/* LOGGED USER */}
        <S.EditButton>
        <img src={edit} alt="back" />
        </S.EditButton>
    </S.BoxUser>
  )
}

export default BoxUser;