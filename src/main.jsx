import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
<<<<<<< HEAD
import Header from './components/Header'
=======
>>>>>>> master
import './index.css'
import { store } from './app/store'
import { Provider } from 'react-redux'

<<<<<<< HEAD
=======

>>>>>>> master
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
)
