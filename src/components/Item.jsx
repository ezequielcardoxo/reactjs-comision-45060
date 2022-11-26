import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({products}) => {
  return (
    <div className='items' key={products.id}>
          <img
          src={products.img}
          width="200px"
          alt= {products.title}
          className= 'imgCart'
          />
          <article>
            <h2 className='title'>{products.title}</h2>
            <h3>Precio: ${products.price}.-</h3>
            <Link to= {`/detail/${products.id}`}
           className='detalleProducto' >Ver detalle del producto</Link>
          </article>
        </div>
  )
}

export default Item;

