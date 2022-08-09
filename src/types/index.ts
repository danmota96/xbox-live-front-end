export interface Game {
  id?: string;
  title: string;
  description: string;
  price: number;
  year: number;
  image: string;
  TrailerYouTubeUrl: string;
  GameplayYouTubeUrl: string;
  ImdbScore: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Genre {
  id?: string;
  genre: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface User {
  id?: string;
  name: string;
  email: string;
  image: string;
  cpf: string;
  isAdmin: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Profile {
    id?: string;
    name: string;
    image: string;
    userId?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
