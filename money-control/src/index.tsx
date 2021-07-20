import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {Model, Server} from 'miragejs';

new Server ({

  models: {
    transaction: Model
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de Site',
          type: 'deposit',
          amount: 2500,
          category: 'Freelance',
          createdAt: new Intl.DateTimeFormat('pt-BR').format(new Date())
        },

        {
          id: 2,
          title: 'Impressora 3D',
          type: 'withdraw',
          amount: 250,
          category: 'Equipamento',
          createdAt: new Intl.DateTimeFormat('pt-BR').format(new Date())
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

