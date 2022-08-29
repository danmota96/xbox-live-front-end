import ButtonLarge from "components/ButtonLarge";
import { useUsers } from "contexts/user";
import toast from "react-hot-toast";
import api from "services/api";
import { ModalOverlay } from "../../../assets/styles/globalStyles";
import { User } from "../../../types";
import * as S from "./style";

interface DeleteUserModalProps {
  userId?: string;
  handleOpenDeleteModal: () => void;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

const DeleteUserModal = ({
  userId,
  handleOpenDeleteModal,
  setUser,
}: DeleteUserModalProps) => {
  const { handleGetUsers } = useUsers();

  const handleDeleteUser = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.delete(`/user/${userId}`, headers).then(() => {
      handleGetUsers();
      setUser(undefined);
      handleOpenDeleteModal();
      toast.success("User deleted succesfully!");
    });
  };

  return (
    <ModalOverlay>
      <S.DeleteModalContainer>
        <h2>Delete User</h2>
        <div>
          <ButtonLarge value={"Delete"} onClick={handleDeleteUser}/>
          <ButtonLarge
            onClick={() => {
              setUser(undefined);
              handleOpenDeleteModal();
            }}
            value="Cancel"
            variant="cancel"
            />
        </div>
      </S.DeleteModalContainer>
    </ModalOverlay>
  );
};

export default DeleteUserModal;