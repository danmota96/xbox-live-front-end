import CreateUser from 'pages/Create-User';
import GameDetails from 'pages/Game-Details';
import GameSettings from 'pages/Game-Settings';
import HomePage from 'pages/Homepage';
import { Routes, Route } from 'react-router-dom';
import { RoutePath } from 'types/routes';
import Login from "./pages/Login/index";
import Profile from "./pages/Profiles/index";

const Router = () => {
    return (
        <Routes>
            <Route path={RoutePath.LOGIN} element={<Login/>} />
            <Route path={RoutePath.HOME} element={<HomePage/>} />
            <Route path={RoutePath.CREATE_USER} element={<CreateUser/>} />
            <Route path={RoutePath.PROFILE_SELECT} element={<Profile/>} />
            <Route path={RoutePath.SETTINGS_GAMES} element={<GameSettings/>} />
            <Route path={RoutePath.GAME_DETAILS} element={<GameDetails />} />
        </Routes>
    );
}

export default Router;