import './AuthLayout.css'
import { Outlet } from 'react-router-dom'

function AuthLayout() {
    return <div className="Auth"><Outlet /></div>
}

export default AuthLayout