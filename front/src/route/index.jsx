import { createBrowserRouter } from 'react-router-dom'
import Register from '../pages/Register/register';


const RouterApp = createBrowserRouter([
    {
        path: '/',
        element: <Register />
    },

]);

export default RouterApp