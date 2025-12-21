import { use, useEffect, useState } from 'react'
import { FaLock, FaMailBulk, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom'

import './Register.css'
import { validateEmails, validatePasswords, validateTerms, validateUsername } from '../../utils/validators';

const Register = () => {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [email, setEmail] = useState("");
    const [reEmail, setReEmail] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);

    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [termsError, setTermsError] = useState("");
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
        const { valid: termsValid, error: terError} = validateTerms(acceptTerms)
        if(!usernValid || !passValid || !emailValid || !termsValid ) {
            setUsernameError(usernError)
            setPasswordError(passError)
            setEmailError(emailError)
            setTermsError(terError)
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

                <div className="show-password">
                    <input 
                    id='show-password' 
                    type='checkbox'
                    checked={showPassword}
                    onChange={(e) => setShowPassword(e.target.checked)}
                    />
                    <label htmlFor='show-password'>Mostrar Senha</label>
                </div>

                <div className="input-password">
                    <FaLock className='icon' />
                    <input 
                    type={showPassword ? 'text' : 'password'} 
                    placeholder='Senha'
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
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Repita a Senha'
                    onChange={(e) => setRePassword(e.target.value)} />
                </div>

                <div className="terms">
                    <input 
                    id='accept-terms'
                    type='checkbox'
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    aria-describedby={termsError ? 'terms-error' : undefined}
                    aria-invalid={termsError ? true : undefined}
                    />
                    <label htmlFor='accept-terms'>Aceito os <a href='#'>termos de uso</a></label>
                {
                    <p id='terms-error' className='error' role='alert' aria-live='assertive'>
                        {termsError}
                    </p>
                }
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