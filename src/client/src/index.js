import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import Explorer from './explorer/explorer.component';
import { BrowserRouter, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';


const apolloClient = new ApolloClient({ uri: 'http://localhost:5000/graphql'});

ReactDOM.render((
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <Route path='/' component={Explorer} />
    </BrowserRouter>
  </ApolloProvider>
  ),
  document.getElementById('root')
)

registerServiceWorker();