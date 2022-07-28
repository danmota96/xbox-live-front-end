import api from './api';

const findAllGenres =  { 
    allGenres: () =>
    api.get('/genre')
    .then((response: any) => { 
        return response;
    })
    .catch((error: any) => console.log(error))
    
}

const createGenreService =  { 
    createGenre: () =>
    api.post('/genre')
    .then((response: any) => { 
        return response;
    })
    .catch((error: any) => console.log(error))
    
}

export { findAllGenres, createGenreService };