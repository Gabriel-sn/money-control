import Modal from 'react-modal';
import {Container, TransactionType, TransactionTypeButton} from './styles';
import closeSVG from '../../assets/close.svg';
import incomeSVG from '../../assets/income.svg';
import outcomeSVG from '../../assets/outcome.svg';
import { FormEvent, useState } from 'react';

interface NewTransactionModalProps{
    isOpen: boolean,
    onRequestClose: () => void,
}

export function NewTransactionModal({isOpen, onRequestClose} : NewTransactionModalProps){
    const [title, setTitle] = useState('');
    const [transactionValue, setTransactionValue] = useState(0);
    const [type, setType] = useState('deposit');
    const [category, setCategory] = useState('');

    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        console.log({
            title,
            transactionValue,
            type,
            category
        })
    }

    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="modal-overlay"
            className="modal-style"
        >

            <button 
                type="button" 
                onClick={onRequestClose}
                className="modal-close-btn"
            >
                <img src={closeSVG} alt="Fechar" />
            </button>
            
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>
                
                <input
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input 
                    type="number"
                    placeholder="Valor"
                    value={transactionValue}
                    onChange={event => setTransactionValue(Number(event.target.value))}
                />

                <TransactionType>
                    <TransactionTypeButton
                        type="button"
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor='green'>
                            <img src={incomeSVG} alt="Entrada" />
                            <span>Entrada</span>
                    </TransactionTypeButton>

                    <TransactionTypeButton 
                        type="button"
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor='red'>
                            <img src={outcomeSVG} alt="Saída" />
                            <span>Saída</span>
                    </TransactionTypeButton>
                </TransactionType>

                <input 
                    type="text"
                    placeholder="Categoria"
                    value={category}
                    onChange={event => {setCategory(event.target.value)}}
                />
                <button type="submit">Cadastrar</button>
            </Container>

        </Modal>
    )
}