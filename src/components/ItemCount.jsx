import React, { useState } from 'react'

const ItemCount = ({stock, onAdd, initial = 1}) => {

    const [cantidad, setCantidad] = useState(initial);

    const restar =() => {
        if (cantidad > 0) {
            setCantidad (cantidad - 1);
        }      
    }
    
    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    }

    const agregar = () => onAdd(cantidad);


  return (
    <div>
    <div className='botonSumaResta'>
        <button onClick={restar}>-</button>
        <p>{cantidad}</p>
        <button disabled={cantidad===stock} onClick={sumar}>+</button>
    </div>
    <div className='botonSumaResta'>
    <button  className='botonAgregar' onClick={agregar}>Agregar al carrito</button>
    </div>
    </div>
  )
}

export default ItemCount