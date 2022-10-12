import back from "assets/icons/back.svg";
import DeleteProfileModal from "components/ProfilesCRUD/DeleteProfileModal";
import ProfileModal from "components/ProfilesCRUD/ProfileModal";
import MenuSettings from "components/SettingsMenu";
import { mockedProfiles } from "mocks/profile";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Profile } from "types";
import * as S from "./style";

const ProfileSettings = () => {
  let Navigate = useNavigate();
  function goToHome() {
    Navigate("/home");
  }
  
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [profile, setProfile] = useState<Profile | undefined>(undefined);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  
  const handleOpenUpdateModal = (profile: Profile) => {
    setProfile(profile);
    setOpenModal(!openModal);
  };

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  };

  return (
    <S.SettingsContainer>
       <S.BackButton>
        <img src={back} alt="backButton" onClick={goToHome} />
      </S.BackButton>
      <MenuSettings path={"profiles"} />
     

      <S.EditEntitiesContainer>
        <h2>Manage Profiles</h2>
        <S.EntitiesEditList>
          <S.AddEntityCard onClick={handleOpenModal}>
            <h2>+</h2>
            <p>Add Profile</p>
          </S.AddEntityCard>

          {mockedProfiles.map((element) => (
          <S.SettingsProfileCard key={element.id}>
            <img src={element.image} alt={element.name} />
            <h2>{element.name}</h2>

            <div>
            <S.SettingsProfileEditCardButton
                onClick={() => {
                  setProfile(profile);
                  handleOpenUpdateModal(element);
                }}
              >
                Edit
              </S.SettingsProfileEditCardButton>
              <S.SettingsProfileDeleteCardButton
                onClick={() => {
                  setProfile(element);
                  handleOpenDeleteModal();
                }}
              >
                Delete
              </S.SettingsProfileDeleteCardButton>
            </div>
              
            
          </S.SettingsProfileCard>
        ))} 

        </S.EntitiesEditList>
      </S.EditEntitiesContainer>
 
       {openModal && (
        <ProfileModal
          setProfile={setProfile}
          profile={profile}
          handleOpenModal={handleOpenModal}
        />
      ) }

      {openDeleteModal && (
        <DeleteProfileModal
          setProfile={setProfile}
          profileId={profile?.id}
          handleOpenDeleteModal={handleOpenDeleteModal}
        />
      )} 
    </S.SettingsContainer>
  );
};

export default ProfileSettings;
