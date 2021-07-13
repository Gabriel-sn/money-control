import {Container} from './styles';
import incomeSVG from '../../assets/income.svg';
import outcomeSVG from '../../assets/outcome.svg';
import totalSVG from '../../assets/total.svg';

export function Sumary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entrada</p>
                    <img src={incomeSVG} alt="Entrada" />
                </header>

                <strong>R$ 1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saída</p>
                    <img src={outcomeSVG} alt="Saída" />
                </header>

                <strong>R$ 800,00</strong>
            </div>

            <div className="card-total">
                <header>
                    <p>Total</p>
                    <img src={totalSVG} alt="Total" />
                </header>

                <strong>R$ 200,00</strong>
            </div>
        </Container>
    )
}