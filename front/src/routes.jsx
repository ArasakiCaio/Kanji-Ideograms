import AuthLayout from './Layout/Auth/AuthLayout'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'

const routes = [
    {
        element: <AuthLayout />,
        children: [
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
        ],
    },
    { path: '/', element: <Home />},
]

export default routes