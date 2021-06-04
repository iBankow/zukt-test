import { Header } from "../../Parts/Header";
import { useHistory } from "react-router-dom"
import { Container } from "./styles";
import api from '../../services/api';
import { useEffect, useState } from "react";


interface User {
    id: number;
    name: string;
    email: number;
    created_at: string;
}

function Home() {

    let history = useHistory()

    function getToken() {
        return localStorage.getItem("@managerUser-Token");
    }


    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        async function users() {
            api.interceptors.request.use(async config => {
                const token = getToken();
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            });
            try {
                const response = await api.get<User[]>('/cads');
                const data = response.data
                setUsers(data);
            } catch (error) {
                history.push("/");
            }
        }
        users()
        // eslint-disable-next-line
    }, [])


    function handleLogout() {
        try {
            api.post("/logout")
                .then(response => {
                    if (response){
                        localStorage.removeItem("@managerUser-Token");
                        history.push("/");
                    } 
                });
        } catch (err) {
            console.log({
                error:
                    "Houve um problema com o login, verifique suas credenciais. T.T"
            });
        }
    }


    return (
        <div>
            <Header />
            <Container>
                <table>
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Email</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.created_at}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={handleLogout} type="submit">Logout</button>
            </Container>

        </div>
    )
}

export default Home;