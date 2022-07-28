import api from '../services/api';
import swal from 'sweetalert';

const findAllGames =  { 
    allGames: () =>
    api.get('/game')
    .then((response: any) => { 
        return response;
    })
    .catch((error: any) => console.log(error))
}

const createGameService = {
    createGame: (values: object) =>
    api.post('/game', values)
      .then((response: any) => response)
      .catch((error: any) => {        
        swal({
          title: "Erro!",
          text: `${error.message}`,
          icon: "error",
          timer: 7000,
        })
        console.log(error);
      })
  } 


const findGameByIdService = {
    findGameByIdService: (id: string) =>
      api.get(`/game/${id}`)
      .then((response: any) => response)
      .catch((error: any) => {
        swal({
          title: "Error!",
          text: `${error.message}`,
          icon: "error",
          timer: 7000,
        })
        console.log(error);
      })
      
  }

  const updateGameService = {
    updateGame: (game: object, id: string) =>
    api.patch(`/game/${id}`, game)
      .then((response: any) => response)
      .catch((error: any) => {
        swal({
          title: "Error!",
          text: `${error.message}`,
          icon: "error",
          timer: 7000,
        })
      })
  }
  
  const deleteGameService = {
    deleteGame: (id: string) =>
    api.delete(`/game/delete/${id}`)
      .then((response: any) => response)
      .catch((error: any) => {
        swal({
          title: "Error!",
          text: `${error.message}`,
          icon: "error",
          timer: 7000,
        })
      })
  }

export { findAllGames, createGameService, findGameByIdService, updateGameService, deleteGameService };