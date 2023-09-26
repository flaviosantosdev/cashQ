import { Container } from "./styles";
import income from '../../assets/increase.png'
import outcome from '../../assets/decrease.png'
import total from '../../assets/money-bag.png'

export function Summary(){

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={income} alt="Entradas" />
                </header>
                <strong>R$1000,000</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcome} alt="Saidas" />
                </header>
                <strong> - R$1000,000</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={total} alt="" />
                </header>
                <strong>R$1000,000</strong>
            </div>
        </Container>
    )
}