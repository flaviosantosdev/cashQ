import logoImg from '../../assets/money-flow.png'
import { Container, Content } from './styles'


export function Header(){

    return(
        <Container>
            <Content>
                <img src={logoImg} alt="" /> 
                <button type='button'>Nova Transação</button> 
           </Content>       
        </Container>
    )
}