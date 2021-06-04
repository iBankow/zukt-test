import logoImg from '../assets/logo.svg'
import { Container } from "./style";

export function Header() {
    return (
        <Container>
            <img src={logoImg} alt="Logo Zukt" />
            <h1>User Manager</h1>
        </Container>
    )
}
