import React from 'react'
import ItemCount from './components/ItemCount'

const ItemDetail = ({item}) => {
    const onAdd = (qwe) => console.log(qwe)
  return (
    <div>
        <img  className='imgDetail' src= {item.img} alt={item.title} />
        <h2>{item.title}</h2>
        <h3>${item.price}</h3>
        <ItemCount stock={item.stock} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail