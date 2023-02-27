import { createBrowserRouter } from 'react-router-dom'
import Register from '../register';

const RouterApp = createBrowserRouter([
    {
        path: '/',
        element: <Register/>
    },

]);

export default RouterApp