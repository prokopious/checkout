import '../styles/globals.css'

import { CartContext, useCartState } from '../hooks/use-cart.js';

import Nav from '../components/Nav';

function MyApp({ Component, pageProps }) {
  const cart = useCartState();
  return (

   
    <CartContext.Provider value={cart}>
      
      <Component {...pageProps} />
    </CartContext.Provider>
  );
}

export default MyApp
