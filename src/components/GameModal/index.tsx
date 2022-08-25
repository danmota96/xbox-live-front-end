import { ErrorMessage, StyledInput } from "assets/styles/globalStyles";
import { ModalOverlay } from "assets/styles/globalStyles";
import ButtonLarge from "components/ButtonLarge";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as S from "./style";
import * as yup from "yup";


/* HOOKFORM */

interface GameModalProps { 
  handleOpenModal: () => void;
}

interface NewGameData {
  title: string;
  description: string;
  price: number;
  year: number;
  image: string;
  TrailerYouTubeUrl: string;
  GameplayYouTubeUrl: string;
  ImdbScore: number;
}

const newGameSchema = yup.object().shape({
  title: yup.string().required("Title is required"),

  description: yup.string().required("Game description is required"),

  price: yup.number().required("Price is required"),

  year: yup.number().required("Release year is required"),

  image: yup.string().url("Invalid URL format").required("Game cover image is required"),

  TrailerYouTubeUrl: yup.string().url("Invalid URL format").required("Embed URL required"),

  GameplayYouTubeUrl: yup.string().url("Invalid URL format").required("Embed URL required"),

  ImdbScore: yup.number().required("IMDb Score is required"),
});

const GameModal = ({handleOpenModal}: GameModalProps) => { 
  /* useForm */

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewGameData>({ resolver: yupResolver(newGameSchema) });

  const handleNewGame = (data: NewGameData) => {
    console.log(data);
  }; 

  return (
    <ModalOverlay>
      <S.ModalContainer onSubmit={handleSubmit(handleNewGame)} >
        <h2>Register a new game</h2>
        <StyledInput placeholder="Title" {...register("title")}/>
        <StyledInput placeholder="Description" {...register("description")}/>
        {/* <select name="" id=""></select> */}
        <StyledInput placeholder="Year" {...register("year")}/>
        <StyledInput placeholder="Price" {...register("price")}/>
        <StyledInput placeholder="Trailer URL" {...register("TrailerYouTubeUrl")}/>
        <StyledInput placeholder="Gameplay URL" {...register("GameplayYouTubeUrl")}/>
        <StyledInput placeholder="IMDb Score" {...register("ImdbScore")}/>
        <StyledInput placeholder="Image URL" {...register("image")}/>
        <ErrorMessage>
            {errors.title?.message ||
              errors.description?.message ||
              errors.year?.message ||
              errors.price?.message ||
              errors.TrailerYouTubeUrl?.message ||
              errors.GameplayYouTubeUrl?.message ||
              errors.ImdbScore?.message ||
              errors.image?.message}
          </ErrorMessage>
        <div>
          <ButtonLarge value={"Send"} type="submit" />
          <ButtonLarge value={"Cancel"} onClick={handleOpenModal}/>
        </div>
      </S.ModalContainer>
    </ModalOverlay>
  );
};

export default GameModal;
