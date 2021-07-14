import Modal from 'react-modal';
import {Container} from './styles';

interface NewTransactionModalProps{
    isOpen: boolean,
    onRequestClose: () => void,
}

export function NewTransactionModal({isOpen, onRequestClose} : NewTransactionModalProps){
    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="modal-overlay"
            className="modal-style"
        >
            <Container>
                <h2>Cadastrar Transação</h2>
                
                <input type="text" placeholder="Título"/>
                <input type="number" placeholder="Valor"/>
                <input type="text" placeholder="Categoria"/>
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}