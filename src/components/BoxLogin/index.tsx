import ButtonLarge from 'components/ButtonLarge';
import React from 'react'
import * as S from "./style";
import { useState } from 'react';
import { loginService } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';


interface userLoginObj {
  email: string;
  password: string;
}
const BoxLogin = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  const handleChangesValues = (event: React.ChangeEvent<HTMLInputElement>)  => {
    // faco uma copia do objeto no estado (values) e adiciono as pripriedades digitadas pelo usuario
    // após isso retorno para a função que vai atualizar esse valor no estado da aplicação.
    setValues((values: userLoginObj) => ({
      ...values,
      [event.target.name]: event.target.value
    }))
  }
  
  const loginUser = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const response = await loginService.login(values)
    const jwt = response?.data.token;
    const userId = response.data.user.id;
    console.log(response.data);
    
    if(jwt) {
      localStorage.setItem('jwtLocalStorage', jwt);
      localStorage.setItem('UserId', userId);
      swal({
        title: 'Welcome!',
        icon: 'success',
        timer: 3000,
      })
      navigate('/profile/select'); 
    }else swal({
      title: 'Invalid credentials',
      icon: 'error',
      timer: 3000,
    })
  }

  return (
    <S.BoxLogin>
      <S.BoxLoginText>
        <span>Sign in</span>
      </S.BoxLoginText>
    <S.BoxLoginForm onSubmit={loginUser}>
      <input type="text" placeholder="E-mail" name='email' id='email' onChange={handleChangesValues}/>
      <input type="password" placeholder="Password"  name='password' id='password' onChange={handleChangesValues}/>
      <a><Link to="/create-user" className='link-register'>No account?Create one!</Link></a> 
      <ButtonLarge value="Sign in"/>
      
    </S.BoxLoginForm>
  </S.BoxLogin>
  )
}

export default BoxLogin;