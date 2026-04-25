import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import AnalyticsTracker from './components/AnalyticsTracker.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AnalyticsTracker />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)