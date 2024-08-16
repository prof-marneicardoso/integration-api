import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { apiRequest } from '../../utils/apiRequest'

export const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        apiRequest('users')
            .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <Link to="/users/new">Novo usuario</Link>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.full_name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
