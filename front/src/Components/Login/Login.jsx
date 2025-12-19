import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from "react";

import "./Login.css";

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    };
    
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Acesse o sistema</h1>
                <div className="input-field">
                    <FaUser className="icon" />
                    <input type="email" placeholder="Email"
                    onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="input-field">
                    <FaLock className="icon" />
                    <input type="password" placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div className="recall-forget">
                    <label>
                        <input type="checkbox"/>
                        Lembrar de mim?
                    </label>
                    <a href="#">Esqueci minha Senha</a>
                </div>

                <button>Entrar</button>

                <div className="signup-link">
                    <Link to="/register">Quero me registrar</Link>
                </div>
            </form>
        </div>
    )
}

export default Login