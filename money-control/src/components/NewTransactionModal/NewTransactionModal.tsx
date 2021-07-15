import Modal from 'react-modal';
import {Container, TransactionType, TransactionTypeButton} from './styles';
import closeSVG from '../../assets/close.svg';
import incomeSVG from '../../assets/income.svg';
import outcomeSVG from '../../assets/outcome.svg';
import { useState } from 'react';

interface NewTransactionModalProps{
    isOpen: boolean,
    onRequestClose: () => void,
}

export function NewTransactionModal({isOpen, onRequestClose} : NewTransactionModalProps){
    const [type, setType] = useState('deposit');

    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="modal-overlay"
            className="modal-style">

            <button 
                type="button" 
                onClick={onRequestClose}
                className="modal-close-btn"
            >
                <img src={closeSVG} alt="Fechar" />
            </button>
            
            <Container>
                <h2>Cadastrar Transação</h2>
                
                <input type="text" placeholder="Título"/>
                <input type="number" placeholder="Valor"/>

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

                <input type="text" placeholder="Categoria"/>
                <button type="submit">Cadastrar</button>
            </Container>

        </Modal>
    )
}