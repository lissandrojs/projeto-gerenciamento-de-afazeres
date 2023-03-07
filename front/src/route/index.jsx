import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Login/login';
import Register from '../pages/Register/register';


const RouterApp = createBrowserRouter([
    {
        path: '/',
        element: <Register />
    },
    {
        path: '/login',
        element: <Login />
    }

]);

export default RouterApp