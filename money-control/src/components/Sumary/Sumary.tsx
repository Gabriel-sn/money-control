import {Container} from './styles';
import incomeSVG from '../../assets/income.svg';
import outcomeSVG from '../../assets/outcome.svg';
import totalSVG from '../../assets/total.svg';
import { useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';

export function Sumary() {

    const {transactions} = useContext(TransactionsContext);

    const summary = transactions.reduce((acc, transaction) => {
        
        if(transaction.type === 'deposit'){
            acc.deposits += transaction.amount;
            acc.total += transaction.amount
        }

        if(transaction.type === 'withdraw'){
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount
        }

        return acc
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    })


    return (
        <Container>
            <div>
                <header>
                    <p>Entrada</p>
                    <img src={incomeSVG} alt="Entrada" />
                </header>

                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(summary.deposits)}
                </strong>
            </div>

            <div>
                <header>
                    <p>Saída</p>
                    <img src={outcomeSVG} alt="Saída" />
                </header>

                <strong>
                    -{new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(summary.withdraws)}
                </strong>
            </div>

            <div className="card-total">
                <header>
                    <p>Total</p>
                    <img src={totalSVG} alt="Total" />
                </header>

                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}