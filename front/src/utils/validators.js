export function validatePasswords(password, rePassword) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

    if (!password && !rePassword) 
        return {valid: false, error: ''}

    if (password !== rePassword) 
        return {valid: false, error: 'As senhas não são iguais'}

    if (!regex.test(password))
        return {valid: false, error: 'A senha deve conter ao menos 8 caracteres, um caracter maíusculo, um caracter minúsculo e um caracter especial'}

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
    // 1. Regex para aceitar apenas alfanuméricos e espaço
    if(!username)
        return {valid: false , error: ''}

    if(username.length < 4)
        return {valid: false, error: 'Username deve ter mais de 3 caracteres'}

    return {valid: true, error: ''}
}