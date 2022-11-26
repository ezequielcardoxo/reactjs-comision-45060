import ItemCount from './components/ItemCount'
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from './context/CartContext';

const ItemDetail = ({item}) => {

    
      const [mostrar, setMostrar] = useState (true);
    const {addToCart, cantidadDeProducto} = useContext(CartContext);
 
    const onAdd = (qwe) => {
      
      setMostrar(false);
      addToCart(item, qwe);
    }

    const cantidad = cantidadDeProducto (item.id);

  return (
    <div   className='Detail' >
        <img   className='imgDetail' src= {item.img} alt={item.title} />
        <article>
        <h2 className='imgDetail'>{item.title}</h2>

        <h3 className='imgDetail'>${item.price}</h3>

        {mostrar ? (
          <ItemCount stock={item.stock} onAdd={onAdd} initial={cantidad}/>
        ) : (
          <Link to="/Cart" className='irCarro'>Ir al Carrito para continuar la compra</Link>
        )
        }
        
        </article>
    </div>
  )
}

export default ItemDetail;