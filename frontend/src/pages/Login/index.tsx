import { useHistory } from "react-router-dom"

import { Container, FormContainer } from "./styles"
import logoImg from '../../assets/logo.svg'

import api from '../../services/api';
import { FormEvent, useState } from "react";

const Login = (): JSX.Element => {
    
    const TOKEN_KEY = "@managerUser-Token";

    let history = useHistory()

    interface Login {
        email: string;
        password: string;
    }
    
    async function createLogin(login: Login) {
        const { email, password } = login;
        if (!email || !password) {
            console.log({ error: "Preencha e-mail e senha para continuar!" });
        } else {
            try {
                const response = await api.post("/login", { email, password });
                if(response.status === 200) {
                    localStorage.setItem(TOKEN_KEY, response.data.token);
                    history.push("/home");
                }else{
                    console.log({
                        error:
                            "Houve um problema com o login, verifique suas credenciais. T.T"
                    });
                }
            } catch (err) {
                console.log({
                    error:
                        "Houve um problema com o login, verifique suas credenciais. T.T"
                });
            }
        }
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    async function handleSignIn(event: FormEvent) {
        event.preventDefault();

        await createLogin({
            email,
            password,
        })
    }

    // function handleLogin() {
    //     history.push("/home")
    // }

    return (
        <Container>
            <FormContainer>
                <form onSubmit={handleSignIn}>
                    <img src={logoImg} alt="Logo Zukt" />
                    <h2>User Login</h2>
                    <input placeholder="Login" value={email} onChange={event => setEmail(event.target.value)} />
                    <input placeholder="Password" type="password" value={password} onChange={event => setPassword(event.target.value)} />
                    <button type="submit">Login</button>
                </form>
                <a href="/register">Create a new account</a>
            </FormContainer>
        </Container>
    )
}

export default Login;