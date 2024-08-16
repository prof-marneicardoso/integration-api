import { Link } from "react-router-dom";
import { apiRequest } from "../../utils/apiRequest";

export const UserCreate = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries())
        apiRequest('register', 'POST', data)
            // .then()
    }

    return (
        <>
            <h1>Novo usuário</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nome</label>
                <input type="text" name="full_name" id="name" />
                <label htmlFor="email">E-mail</label>
                <input type="text" name="email" id="email" />
                <label htmlFor="">Senha</label>
                <input type="password" name="password" id="password" />
                <button>Salvar</button>
            </form>

            <Link to="/users">Ver todos</Link>
        </>
    )
}