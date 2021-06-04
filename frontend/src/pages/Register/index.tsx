import { useHistory } from "react-router-dom"

import { Container, FormContainer } from "./style"
import logoImg from '../../assets/logo.svg'
import { FormEvent, useState } from "react"
import api from "../../services/api"

interface createRegister {
    name: string;
    email: string;
    password: string;
}

const Register = (): JSX.Element => {

    let history = useHistory()

    // function handleLogin() {
    //   history.push("/")
    // }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function createRegister(register: createRegister) {
        const { name, email, password } = register;
        if (!email || !password || !name) {
            console.log({ error: "Preencha todos os campos para continuar!" });
        } else {
            try {
                api.post("/register", register)
                    .then(response =>{history.push("/");
                    });
            } catch (err) {
                console.log({
                    error:
                        "Houve um problema com o login, verifique suas credenciais. T.T"
                });
            }
        }
    }

    async function handleSignUp(event: FormEvent) {
        event.preventDefault();

        await createRegister({
            name,
            email,
            password,
        })
    }


    return (
        <Container>
            <FormContainer>
                <form onSubmit={handleSignUp}>
                    <img src={logoImg} alt="Logo Zukt" />
                    <h2>Create User</h2>
                    <input placeholder="Complete Name" value={name} onChange={event => setName(event.target.value)} />
                    <input placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} />
                    <input placeholder="Password" type="password" value={password} onChange={event => setPassword(event.target.value)} />
                    <button type="submit">Register</button>
                </form>
            </FormContainer>
        </Container>
    )
}

export default Register;