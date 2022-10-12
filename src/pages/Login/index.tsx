import * as S from "./style";
import logo from "assets/imgs/logo.png";
import ButtonLarge from "components/ButtonLarge";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import api from "services/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "contexts/auth";
import { ErrorMessage } from "assets/styles/globalStyles";

/* interface LoginData {
  email: string;
  password: string;
}

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("O formato de e-mail está inválido")
    .required("Campo de e-mail obrigatório"),

  password: yup
    .string()
    .min(8, "Sua senha deve ter no mínimo 8 caracteres")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      "Sua senha deve ter no mímino 1 caracter especial, um número e uma letra maiúscula"
    )
    .required("Campo de senha obrigatório"),
}); */

const Login = () => {
  let Navigate = useNavigate();
  function goToHome() {
    Navigate("/profile/select");
} 
 /*  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ resolver: yupResolver(loginSchema) });

  const handleLogin = (data: LoginData) => {
    api
      .post(`/auth`, data)
      .then((res) => {
        login({ token: res.data.token, user: res.data.user })
        navigate('/profile/select');
      })
      .catch(() => {
        toast.error("Usuário ou senha inválido");
      });
  }; */

  return (
    <S.Login>
      <S.MenuLogo>
        <img src={logo} alt="Logo" />
      </S.MenuLogo>
      <S.WhiteBox>
        <S.BoxContent>
          <S.BoxLogin>
            <S.BoxLoginText>
              <span>Sign in</span>
            </S.BoxLoginText>
            <S.BoxLoginForm /* onSubmit={handleSubmit(handleLogin)} */>
              <input
               /*  type="text"
                placeholder="E-mail"
                
                id="email"
                {...register("email")} */
              />
              <input
               /*  type="password"
                placeholder="Password"
               
                id="password"
                {...register("password")} */
              />
          {/*  
                <Link to="/create-user" className="link-register">
                  No account?Create one!
                </Link> */}
         
              <ButtonLarge value="Sign in" type="submit" onClick={goToHome}/>
            </S.BoxLoginForm>
           {/*  <ErrorMessage>
          {errors.email?.message || errors.password?.message}
        </ErrorMessage> */}
          </S.BoxLogin>
        </S.BoxContent>
      </S.WhiteBox>
    </S.Login>
  );
};

export default Login;
