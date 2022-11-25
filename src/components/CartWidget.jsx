import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const {totalUnidades} = useContext(CartContext);
  return (
    <div>
        <span className="material-symbols-outlined">
            shopping_cart
        </span>
        <span>{totalUnidades() !== 0 && totalUnidades()}</span>
    </div>
  )
}


export default CartWidget;