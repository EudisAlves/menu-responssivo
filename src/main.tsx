import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Main } from './components/Main/index'
import './App.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Main />
  </React.StrictMode>,
)
