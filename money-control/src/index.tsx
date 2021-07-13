import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {Server} from 'miragejs';

new Server ({
  routes(){
    this.namespace = 'api';
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction',
          amount: '3500.00',
          type: 'deposit',
          category: 'Development',
          data: new Date(),
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

