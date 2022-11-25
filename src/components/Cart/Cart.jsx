import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const Cart = () => {
  const {cart, deleteAll, deleteOne, totalPrecio} = useContext(CartContext);

  if (cart.length === 0)
  return (
      <h1>
          Aún no hay productos, volvé al <Link to="/">Home</Link> para continuar viendo.
      </h1>
  );

return (
  <div className='containerCart'>
      {cart.map((prod) => (
          <div key={prod.id}>
              <img className='imgCart' src={prod.img} alt={prod.title} />
              <div>
                  <h3>{prod.title}</h3>
                  <h3>{prod.cantidad}</h3>
                  <button onClick={() => deleteOne(prod.id)}>
                      Eliminar
                  </button>
              </div>
          </div>
      ))}
      <h2>Total: ${totalPrecio()}</h2>
      <button onClick={deleteAll}>Vaciar carrito</button>
      <h3>Ir al checkout para terminar con su compra:</h3>
      <Link to= "/checkout" className='botonCheckout'>Checkout</Link>
  </div>
);
};

export default Cart