import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/app';
import ErrorBoundary from './components/error-boundary';
import ApiService from './services/api-service';
import { ApiServiceProvider } from './components/api-service-context';

import store from './store';

const apiService = new ApiService();

ReactDOM.render(
  <Provider store ={store}>
   <ErrorBoundary>
    <ApiServiceProvider value={apiService}>
     <Router>
      <App/>
     </Router>
    </ApiServiceProvider>
   </ErrorBoundary>
  </Provider>,
   document.getElementById('root')
)