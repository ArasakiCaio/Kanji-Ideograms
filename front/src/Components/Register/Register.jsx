import { useEffect, useState } from 'react'
import { FaLock, FaMailBulk, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom'

import './Register.css'
import { validateEmails, validatePasswords, validateUsername } from '../../utils/validators';

const Register = () => {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [email, setEmail] = useState("");
    const [reEmail, setReEmail] = useState("");

    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [canSubmit, setCanSubmit] = useState(false);

    useEffect(() => {
        const { valid: usernValid, error: usernError} = validateUsername(username)
        const { valid: passValid, error: passError} = validatePasswords(password, rePassword)
        const { valid: emailValid, error: emailError} = validateEmails(email, reEmail)

        setUsernameError(usernError)
        setPasswordError(passError)
        setEmailError(emailError)
        setCanSubmit(passValid && emailValid && usernValid)
    }, [username, password, rePassword, email, reEmail])

    const handleSubmit = (event) => {
        
        event.preventDefault();

        const { valid: usernValid, error: usernError} = validateUsername(username)
        const { valid: passValid, error: passError} = validatePasswords(password, rePassword)
        const { valid: emailValid, error: emailError} = validateEmails(email, reEmail)
        if(!usernValid || !passValid || !emailValid) {
            setUsernameError(usernError)
            setPasswordError(passError)
            setEmailError(emailError)
            return
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>

                <h1>Registre-se</h1>

                <div className="input-username">
                    <FaUser className='icon' />
                    <input 
                    type='text' 
                    placeholder='Nome de Usuário'
                    onChange={(e) => setUsername(e.target.value)} 
                    aria-describedby={usernameError ? 'username-error' : undefined}
                    />
                    {
                        usernameError && (
                            <p id='username-error' className='error' role='alert' aria-live='assertive'>
                                {usernameError}
                            </p>
                        )
                    }
                </div>

                <div className="input-email">
                    <FaMailBulk className='icon' />
                    <input 
                    type='email' 
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                    aria-describedby={emailError ? 'email-error' : undefined}
                    />
                    {
                        emailError && (
                            <p id='email-error' className='error' role='alert' aria-live='assertive'>
                                {emailError}
                            </p>
                        )
                    }
                </div>

                <div className="input-email">
                    <FaMailBulk className='icon' />
                    <input type='email' placeholder='Repita o Email'
                    onChange={(e) => setReEmail(e.target.value)} />
                </div>

                <div className="input-password">
                    <FaLock className='icon' />
                    <input type='password' placeholder='Senha'
                    onChange={(e) => setPassword(e.target.value)}
                    aria-describedby={passwordError ? 'password-error' : undefined}
                    />
                    {
                        passwordError && (
                            <p id='password-error' className='error' role='alert' aria-live='assertive'>
                                {passwordError}
                            </p>
                        )
                    }
                </div>

                <div className="input-password">
                    <FaLock className='icon' />
                    <input
                    type='password'
                    placeholder='Repita a Senha'
                    onChange={(e) => setRePassword(e.target.value)} />
                </div>

                <div className="terms">
                    <label>
                        <input type='checkbox'></input>
                        Aceito os <a href='#'>termos de uso</a>
                    </label>
                </div>

                <button
                    type='submit'
                    disabled={!canSubmit}>
                    Registrar
                </button>

                <div className="signin-link">
                    <Link to="/login">Já possuo conta</Link>
                </div>
            </form>
        </div>
    )
}

export default Register