import { useState } from 'react';
import MenuScreen from './screens/MenuScreen';
import CartScreen from './screens/CartScreen';

export default function App() {
  const [screen, setScreen] = useState('menu');
  const [cart, setCart] = useState([]);

  const addToCart = (item) => setCart((currentCart) => [...currentCart, item]);
  const removeFromCart = (id) => setCart((currentCart) => {
    const itemIndex = currentCart.findIndex((item) => item.id === id);
    return itemIndex === -1 ? currentCart : currentCart.filter((_, index) => index !== itemIndex);
  });

  if (screen === 'cart') {
    return <CartScreen cart={cart} removeFromCart={removeFromCart} goToMenu={() => setScreen('menu')} />;
  }
  return <MenuScreen cart={cart} addToCart={addToCart} goToCart={() => setScreen('cart')} />;
}
