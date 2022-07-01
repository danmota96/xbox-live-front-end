import { Routes, Route } from 'react-router-dom';
import { RoutePath } from 'types/routes';
import Login from "./pages/Login/index";

const Router = () => {
    return (
        <Routes>
            <Route path={RoutePath.LOGIN} element={<Login/>} />
        </Routes>
    );
}

export default Router;