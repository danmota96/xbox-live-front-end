import { ErrorMessage, StyledInput } from "assets/styles/globalStyles";
import { ModalOverlay } from "assets/styles/globalStyles";
import ButtonLarge from "components/ButtonLarge";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as S from "./style";
import * as yup from "yup";
import { useState } from "react";
import { mockedGenres } from "../../mocks/genres"
import api from "services/api";
import toast from "react-hot-toast";
import { useGames } from "contexts/games";
import { Game, Genre } from "types";
import { useGenres } from "contexts/genres";


/* HOOKFORM */
interface GameModalProps { 
  handleOpenModal: () => void;
  game?: Game;
  genre?: Genre;
  setGame: React.Dispatch<React.SetStateAction<Game | undefined>>;
}

interface GameData {
  title?: string;
  description?: string;
  genreName?: string;
  price?: number;
  year?: number;
  image?: string;
  TrailerYouTubeUrl?: string;
  GameplayYouTubeUrl?: string;
  ImdbScore?: number;
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

const updateGameSchema = yup.object().shape({
  title: yup.string(),

  description: yup.string(),

  price: yup.number(),

  year: yup.number(),

  image: yup.string(),

  TrailerYouTubeUrl: yup.string(),

  GameplayYouTubeUrl: yup.string(),

  ImdbScore: yup.number(),
});

const GameModal = ({handleOpenModal, game, setGame}: GameModalProps  ) => { 
  const { handleGetGames } = useGames();
  const {  genres , handleGetGenres } = useGenres();
  console.log(genres);
  const [genreName, setGenreNameId] = useState<string>(
    game ? game.genreName: ""
    );

  /* useForm */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GameData>({ resolver: yupResolver(game? updateGameSchema: newGameSchema) });

  const token = localStorage.getItem("token");

    const headers = { 
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

  const handleNewGame = (data: GameData) => {
    data.genreName = genreName;
    api
    .post(`/game`, data, headers)
    .then(() => {
      toast.success("Game added succesfully!");
      handleGetGames();
      handleOpenModal();
      setGame(undefined);
    })
    .catch(() => toast.error("Select a genre!"));
  }; 

  const handleUpdateGame = (data: GameData) => {
    data.genreName = genreName;
    api.
    patch(`/game/${game?.id}`, data, headers)
    .then(() => {
      toast.success("Game updated succesfully!");
      handleGetGames();
      handleOpenModal();
      setGame(undefined);
    });
  };

  return (
    <ModalOverlay>
      <S.ModalContainer 
      onSubmit={
          game
        ? handleSubmit(handleUpdateGame)
        : handleSubmit(handleNewGame)
      } 
      >
        <h2>{game
         ? "Update Game"
          : "Register a new game"
          }
        </h2>
        
        <StyledInput 
        defaultValue={game ? game.title : ""}
        placeholder="Title" 
        {...register("title")}/>

        <StyledInput
        defaultValue={game ? game.description : ""}
        placeholder="Description" 
        {...register("description")}/>

        <S.Select 
        value={genreName} 
        onChange={(e) => 
        setGenreNameId(e.target.value)}>
          <option>Select a genre </option>
          {genres.map((element) => (
          <option value={element.genre}>{element.genre}
          </option> 
           ))}
        </S.Select>

        <StyledInput 
        defaultValue={game ? game.year : ""}
        placeholder="Year" 
        {...register("year")}
        />
        <StyledInput 
        defaultValue={game ? game.price : ""}
        placeholder="Price"
        {...register("price")}
        />
        <StyledInput 
        defaultValue={game ? game.TrailerYouTubeUrl : ""}
        placeholder="Trailer URL" 
        {...register("TrailerYouTubeUrl")}
        />
        <StyledInput 
        defaultValue={game ? game.GameplayYouTubeUrl : ""}
        placeholder="Gameplay URL" 
        {...register("GameplayYouTubeUrl")}
        />
        <S.Select
         defaultValue={game ? game.ImdbScore : ""}
         placeholder="IMDb Score" 
         {...register("ImdbScore")}>
        <option>IMDb Score</option>
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>

        </S.Select>
        <StyledInput 
        defaultValue={game ? game.image : ""}
        placeholder="Image URL" 
        {...register("image")}
        />

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
          <ButtonLarge value={"Send"} type="submit"/>
          <ButtonLarge value={"Cancel"} variant="cancel" onClick={()=> {
            handleOpenModal();
            setGame(undefined);
          }
          } />
        </div>
      </S.ModalContainer>
    </ModalOverlay>
  );
};

export default GameModal;
