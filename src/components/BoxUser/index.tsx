import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useUsers } from "contexts/user";

const BoxUser = () => {
  const { users } = useUsers();
  let Navigate = useNavigate();
  function goToAdminHome() {
  Navigate("/home");
}

  return (
    <S.BoxUser>  
        {users.map((element) => (
          <div>
                <S.UserIcon src={element.image} alt='loggeduser' onClick={goToAdminHome}/>
                <h2>{element.name}</h2> 
          </div>   
        ))}    
    </S.BoxUser>
  )
}

export default BoxUser;