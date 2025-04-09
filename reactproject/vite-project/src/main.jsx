import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // Import CartProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider> {/* Wrap App with CartProvider */}
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
);