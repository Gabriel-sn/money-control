import { useState } from "react";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header/Header";
import { Dashboard } from "./components/Dashboard/Dashboard";
import Modal from 'react-modal';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen,
     setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Modal isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}>
        <h2>Teste</h2>
      </Modal>

      <Dashboard />
    </>
  );
}

