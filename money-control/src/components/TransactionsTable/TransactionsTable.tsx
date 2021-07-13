import {Container} from './styles'

export function TransactionsTable () {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de Site</td>
                        <td className="deposit">R$2500.00</td>
                        <td>Desenvolvimento</td>
                        <td>12/07/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$800.00</td>
                        <td>Contas</td>
                        <td>05/07/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}