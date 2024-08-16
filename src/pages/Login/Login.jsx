import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiRequest } from "../../utils/apiRequest";

export const Login = () => {
    const navigate = useNavigate();
    const [authError, setAuthError ] = useState(); 

    const handleSubmit = (event) => {
        event.preventDefault()
        
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries())
        apiRequest('login', 'POST', data)
            .then(({ token, message }) => {
                if (token) {
                    localStorage.setItem('token', token)
                    navigate('/users')
                } else {
                    setAuthError(message)
                }
            })
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail</label>
                <input type="text" name="email" id="email" />
                <label htmlFor="">Senha</label>
                <input type="password" name="password" id="password" />
                {authError}
                <button>Logar</button>
            </form>
        </>
    )
}