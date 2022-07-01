import * as S from "./style";
import logo from "../../../public/logo.png";

const Login = () => {
  return (
    <S.Login>
      <S.MenuLogo>
        <img src={logo} alt="Logo" />
      </S.MenuLogo>
      <S.LoginContent>
        <S.BoxContent></S.BoxContent>
      </S.LoginContent>
    </S.Login>
  );
};

export default Login;
