import { useState} from "react";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header/Header";
import { Dashboard } from "./components/Dashboard/Dashboard";
import Modal from 'react-modal';
import { NewTransactionModal } from "./components/NewTransactionModal/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

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
    <TransactionsProvider> 
      <GlobalStyle />
      
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}/>

      <Dashboard />
    </TransactionsProvider> 
  );
}

