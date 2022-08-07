import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Cart } from './pages/cart'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { CartProvider } from './hooks/useCart'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
    
  </React.StrictMode>
)
