import { createBrowserRouter } from 'react-router-dom'
import App from '../App';


const RouterApp = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
]);

export default RouterApp