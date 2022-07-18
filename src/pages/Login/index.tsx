import * as S from "./style";
import logo from "assets/imgs/logo.png";
import BoxLogin from "components/BoxLogin";



const Login = () => {
  return (
    <S.Login>
      <S.MenuLogo>
        <img src={logo} alt="Logo" />
      </S.MenuLogo>
      <S.WhiteBox>
      <S.BoxContent>
          <BoxLogin/>
        </S.BoxContent>
      </S.WhiteBox>   
    </S.Login>
  );
};

export default Login;
