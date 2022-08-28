import ButtonLarge from "components/ButtonLarge";
import { useGames } from "contexts/games";
import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";
import api from "services/api";
import { ModalOverlay } from "../../../assets/styles/globalStyles";
import { Game } from "../../../types";
import * as S from "./style";

interface DeleteGameModalProps {
  gameId?: string;
  handleOpenDeleteModal: () => void;
  setGame: React.Dispatch<React.SetStateAction<Game | undefined>>;
}

const DeleteGameModal = ({
  gameId,
  handleOpenDeleteModal,
  setGame,
}: DeleteGameModalProps) => {
  const { handleGetGames } = useGames();

  const handleDeleteGame = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.delete(`/game/${gameId}`, headers).then(() => {
      handleGetGames();
      setGame(undefined);
      handleOpenDeleteModal();
      toast.success("Game deleted succesfully!");
    });
  };

  return (
    <ModalOverlay>
      <S.DeleteModalContainer>
        <h2>Delete Game</h2>
        <div>
          <ButtonLarge value={"Delete"} onClick={handleDeleteGame}/>
          <ButtonLarge
            onClick={() => {
              setGame(undefined);
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

export default DeleteGameModal;