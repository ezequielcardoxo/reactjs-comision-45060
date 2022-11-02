import React, { useState } from 'react'

const ItemCount = ({stock, onAdd}) => {

    const [count, setCount] = useState(0);

    const restar =() => {
        if (count > 0) {
            setCount (count - 1);
        }      
    }
    
    const sumar = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const agregar = () => onAdd(count);


  return (
    <div>
    <div className='botonSumaResta'>
        <button onClick={restar}>-</button>
        <p>{count}</p>
        <button onClick={sumar}>+</button>
    </div>
    <div className='botonSumaResta'>
    <button onClick={agregar}>Agregar al carrito</button>
    </div>
    </div>
  )
}

export default ItemCount