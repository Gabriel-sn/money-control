import { Sumary } from '../Sumary/Sumary';
import { TransactionsTable } from '../TransactionsTable/TransactionsTable';
import {Container} from './styles';

export function Dashboard (){
    return (
        <Container>
            <Sumary/>
            <TransactionsTable/>
        </Container>
    )
}