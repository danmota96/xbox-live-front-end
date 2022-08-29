import CreateUser from 'pages/CreateUser';
import GameDetails from 'pages/GameDetails';
import HomePage from 'pages/Homepage';
import { Routes, Route, Navigate } from 'react-router-dom';
import { RoutePath } from 'types/routes';
import Login from "./pages/Login/index";
import Profile from "./pages/Profiles/index";
import GameSettings from 'pages/GameSettings';
import GenreSettings from 'pages/GenreSettings';
import ProfileSettings from 'pages/ProfileSettings';
import UserSettings from 'pages/UserSettings';
import { useAuth } from 'contexts/auth';

const Router = () => {
 const { logged } = useAuth(); 

    return (
        <Routes>
            {logged ? (
        <>
         <Route path={RoutePath.LOGIN} element={<Login/>} />
            <Route path={RoutePath.HOME} element={<HomePage/>} />
            <Route path={RoutePath.CREATE_USER} element={<CreateUser/>} />
            <Route path={RoutePath.PROFILE_SELECT} element={<Profile/>} />
            <Route path={RoutePath.GAMES_ETTINGS} element={<GameSettings/>} />
            <Route path={RoutePath.GENRE_SETTINGS} element={<GenreSettings/>} />
            <Route path={RoutePath.PROFILE_SETTINGS} element={<ProfileSettings/>} />
            <Route path={RoutePath.USER_SETTINGS} element={<UserSettings/>} />
            <Route path={RoutePath.GAME_DETAILS} element={<GameDetails />} />
        </>
      ) : (
        <Route path="/" element={<Login />} />
      )}     
      <Route
        path="*"
        element={<Navigate to={logged ? "/" : "/"} replace />}
      />
        </Routes>
    );
}

export default Router;