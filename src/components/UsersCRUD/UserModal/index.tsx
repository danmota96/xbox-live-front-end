import { ErrorMessage, StyledInput } from "assets/styles/globalStyles";
import { ModalOverlay } from "assets/styles/globalStyles";
import ButtonLarge from "components/ButtonLarge";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as S from "./style";
import * as yup from "yup";
import api from "services/api";
import toast from "react-hot-toast";
import { User } from "types";
import { useUsers } from "contexts/user";

/* HOOKFORM */
interface UserModalProps {
  handleOpenModal: () => void;
  user?: User;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

interface UserData {
  name?: string;
  email?: string;
  image?: string;
  cpf?: string;
  isAdmin?: boolean;
}

const newUserSchema = yup.object().shape({
  name: yup.string().required("Name is required"),

  email: yup.string().required("email is required"),

  image: yup
    .string()
    .url("Invalid URL format")
    .required("User cover image is required"),

  cpf: yup.string().required("CPF is required"),

  isAdmin: yup
    .string()
    .url("Invalid URL format")
    .required("Embed URL required"),
});

const updateUserSchema = yup.object().shape({
  name: yup.string(),

  email: yup.string(),

  image: yup.number(),

  cpf: yup.number(),
});

const UserModal = ({ handleOpenModal, user, setUser }: UserModalProps) => {
  const { handleGetUsers } = useUsers();

  /* useForm */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: yupResolver(user ? updateUserSchema : newUserSchema),
  });

  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleNewUser = (data: UserData) => {
    api
      .post(`/user`, data, headers)
      .then(() => {
        toast.success("User added succesfully!");
        handleGetUsers();
        handleOpenModal();
        setUser(undefined);
      })
      .catch(() => toast.error("Select !"));
  };

  const handleUpdateUser = (data: UserData) => {
    api
      .patch(`/user/${user?.id}`, data, headers)
      .then(() => {
        toast.success("User updated succesfully!");
        handleGetUsers();
        handleOpenModal();
        setUser(undefined);
      })
      .catch(() => toast.error("Select !"));
  };

  return (
    <ModalOverlay>
      <S.ModalContainer
        onSubmit={
          user ? handleSubmit(handleUpdateUser) : handleSubmit(handleNewUser)
        }
      >
        <h2>{user ? "Update User" : "Register a new user"}</h2>

        <StyledInput
          defaultValue={user ? user.name : ""}
          placeholder="Name"
          {...register("name")}
        />

        <StyledInput
          defaultValue={user ? user.email : ""}
          placeholder="E-mail"
          {...register("email")}
        />

        <StyledInput
          defaultValue={user ? user.cpf : ""}
          placeholder="CPF"
          {...register("cpf")}
        />

        {/* <input type="radio" placeholder="Admin?"/> */}
        <StyledInput
          defaultValue={user ? user.image : ""}
          placeholder="Image URL"
          {...register("image")}
        />

        <ErrorMessage>
          {errors.name?.message ||
            errors.email?.message ||
            errors.cpf?.message ||
            errors.cpf?.message ||
            errors.isAdmin?.message}
        </ErrorMessage>
        <div>
          <ButtonLarge value={"Send"} type="submit" />
          <ButtonLarge
            value={"Cancel"}
            variant="cancel"
            onClick={() => {
              handleOpenModal();
              setUser(undefined);
            }}
          />
        </div>
      </S.ModalContainer>
    </ModalOverlay>
  );
};

export default UserModal;
