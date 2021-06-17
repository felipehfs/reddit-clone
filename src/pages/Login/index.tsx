import {
    Wrapper,
    Card,
    Form
} from './Login.styles'
import Input from '../../components/shared/Input'
import logo from '../../assets/images/logo.svg'
import { useState } from 'react'
import Button from '../../components/shared/Button';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event: React.MouseEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return (
        <Wrapper>
            <Card>
                <img src={logo} alt="Reddit Logo" />
                <Form onSubmit={handleSubmit}>
                    <Input 
                        type="email"
                        label="E-mail"
                        value={email} 
                        errorMessage="O campo de email é obrigatório"
                        onChange={event => setEmail(event.target.value)} />
                    <Input  
                        type="password"
                        label="Senha"
                        errorMessage="O campo de senha é obrigatório"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        />
                    <Button colorScheme="secondary">Login</Button>
                </Form>
            </Card>
        </Wrapper>
    )
}
