import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import ErrorBoundary from './ErrorBoundary';
import reportWebVitals from './reportWebVitals';
import './styles/index.scss';

ReactDOM.render(
  <ErrorBoundary>
    <App />,
  </ErrorBoundary>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
