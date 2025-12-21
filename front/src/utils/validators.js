export function validatePasswords(password, rePassword) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

    if (!password && !rePassword) 
        return {valid: false, error: ''}

    if (password !== rePassword) 
        return {valid: false, error: 'As senhas não são iguais'}

    if (!regex.test(password))
        return {valid: false, error: 'A senha deve conter ao menos 8 caracteres com ao menos um caracter maíusculo, um minúsculo e um especial'}

    return {valid: true, error: ''}
}

export function validateEmails(email, reEmail) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

    if (!email && !reEmail)
        return {valid: false, error: ''}

    if (email !== reEmail)
        return {valid: false, error: 'Os emails não são iguais'}

    if (!regex.test(email))
        return {valid: false, error: 'O valor fornecido não é um email'}

    return {valid: true, error: ''}
}

export function validateUsername(username) {
    const regex = /^[\w\s-]+$/

    if(!username)
        return {valid: false , error: ''}

    if(username.length < 4)
        return {valid: false, error: 'Username deve ter mais de 3 caracteres'}

    if (!regex.test(username))
        return {valid: false, error: 'O username deve conter apenas letras, números, espaços, - e _'}

    return {valid: true, error: ''}
}

export function validateTerms(acceptTerms) {
    if(!acceptTerms)
        return { valid: false, error: 'Você precisa aceitar os termos para se registrar'}

    return { valid: true, error: '' }
}