import back from "assets/icons/back.svg";
import MenuSettings from "components/SettingsMenu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "types";
import * as S from "./style";
import UserModal from "components/UsersCRUD/UserModal";
import DeleteUserModal from "components/UsersCRUD/DeleteUserModal";
import { mockedUsers } from "mocks/users";

const UserSettings = () => {
  let Navigate = useNavigate();
  function goToHome() {
    Navigate("/home");
  }
  
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [user, setUser] = useState<User | undefined>(undefined);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  
  const handleOpenUpdateModal = (user: User) => {
    setUser(user);
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
      <MenuSettings path={"users"} />
      <S.EditEntitiesContainer>
        <h2>Manage Users</h2>
        <S.EntitiesEditList>
          <S.AddEntityCard onClick={handleOpenModal}>
            <h2>+</h2>
            <p>Add User</p>
          </S.AddEntityCard>

          {mockedUsers.map((element) => (
          <S.SettingsUserCard key={element.id}>
            <img src={element.image} alt={element.name} />
            <h2>{element.name}</h2>

            <div>
            <S.SettingsUserEditCardButton
                onClick={() => {
                  setUser(user);
                  handleOpenUpdateModal(element);
                }}
              >
                Edit
              </S.SettingsUserEditCardButton>
              <S.SettingsUserDeleteCardButton
                onClick={() => {
                  setUser(element);
                  handleOpenDeleteModal();
                }}
              >
                Delete
              </S.SettingsUserDeleteCardButton>
            </div>
              
            
          </S.SettingsUserCard>
        ))} 

        </S.EntitiesEditList>
      </S.EditEntitiesContainer>
 
       {openModal && (
        <UserModal
          setUser={setUser}
          user={user}
          handleOpenModal={handleOpenModal}
        />
      ) }

      {openDeleteModal && (
        <DeleteUserModal
          setUser={setUser}
          userId={user?.id}
          handleOpenDeleteModal={handleOpenDeleteModal}
        />
      )}  
    </S.SettingsContainer>
  );
};

export default UserSettings;
