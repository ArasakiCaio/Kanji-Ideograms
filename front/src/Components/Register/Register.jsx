import { useState } from 'react'
import { FaLock, FaMailBulk, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom'

import './Register.css'

const Register = () => {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [email, setEmail] = useState("");
    const [reEmail, setReEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>

                <h1>Registre-se</h1>

                <div className="input-field">
                    <FaUser className='icon' />
                    <input type='text' placeholder='Nome de Usuário'
                    onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div className="input-field">
                    <FaLock className='icon' />
                    <input type='password' placeholder='Senha'
                    onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="input-field">
                    <FaLock className='icon' />
                    <input type='password' placeholder='Repita a Senha'
                    onChange={(e) => setRePassword(e.target.value)} />
                </div>

                <div className="input-field">
                    <FaMailBulk className='icon' />
                    <input type='email' placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="input-field">
                    <FaMailBulk className='icon' />
                    <input type='email' placeholder='Repita o Email'
                    onChange={(e) => setReEmail(e.target.value)} />
                </div>

                <div className="terms">
                    <label>
                        <input type='checkbox'></input>
                        Aceito os <a href='#'>termos de uso</a>
                    </label>
                </div>

                <button>Registrar</button>

                <div className="signin-link">
                    <Link to="/login">Já possuo conta</Link>
                </div>
            </form>
        </div>
    )
}

export default Register