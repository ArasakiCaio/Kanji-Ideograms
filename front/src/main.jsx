import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login/Login.jsx'
import Home from './Components/Home/Home.jsx'
import Register from './Components/Register/Register.jsx'
import AuthLayout from './Layout/Auth/AuthLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route element={<AuthLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
