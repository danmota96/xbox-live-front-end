import ButtonLarge from 'components/ButtonLarge';
import { SyntheticEvent, useState } from 'react';
import { userService } from 'services/userService';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import React from 'react';
import * as S from "./style";

interface userObj {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  cpf: string;
  image: string;
}
const BoxCreateUser = () => {

  let navigate = useNavigate(); 

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>){ 
    event.preventDefault();

    const newUser: userObj = { 
    name: event.currentTarget.nome.value,
    email: event.currentTarget.email.value,
    password: event.currentTarget.password.value,
    confirmPassword: event.currentTarget.confirmPassword.value,
    cpf: event.currentTarget.cpf.value,
    image: event.currentTarget.image.value,
    };
    console.log(newUser);
    
    
    const req = await userService.postUser(newUser);
    if (req?.status === 201) { 
    navigate('/')
    }
  }


  return (
    <S.BoxCreateUser >
         <S.BoxCreateUserText>
        <span>Create user</span>
      </S.BoxCreateUserText>
    <S.BoxCreateForm onSubmit={handleSubmit}>
      <input 
      type="text" 
      placeholder="Name" 
      name='nome' 
      id='name'
      
      />
      <input 
      type="email" 
      placeholder="Email"  
      name='email' 
      id='email' 
    
      />
      <input 
      type="password" 
      placeholder="Password"  
      name='password'
      id='password' 
     
      />
      <input 
      type="password" 
      placeholder="Confirm your password"  
      name='confirmPassword' 
      id='confirmPassword' 
     
      />
      <input 
      type="text" 
      placeholder="cpf"  
      name='cpf' 
      id='cpf' 
     
      />
      <input 
      type="text" 
      placeholder="image url"  
      name='image' 
      id='image' 
   
      />
      
      <ButtonLarge />
    </S.BoxCreateForm>
    </S.BoxCreateUser>
  )
}

export default BoxCreateUser;