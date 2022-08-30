import * as S from "./style";
import { useProfiles } from "contexts/profiles";
import { useNavigate } from "react-router-dom";

const BoxProfile = () => {
  const { profiles } = useProfiles();
   let Navigate = useNavigate();
  function goToAdminHome() {
  Navigate("/home");
}

  return (
    <S.BoxProfile>
      {profiles.map((element) => (
        <div>
        <S.ProfileIcon src={element.image} alt='user' onClick={goToAdminHome}/>
        <h2>{element.name}</h2> 
        </div>
        ))}   
    </S.BoxProfile>
  )
}

export default BoxProfile;