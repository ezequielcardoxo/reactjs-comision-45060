import React, { useEffect, useState } from 'react'
import { getProducts } from '../moks/products';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {
  const [items, setItems] = useState ([]);

  const {categoryName} = useParams ();

  useEffect (() => {

    getProducts(categoryName)
  .then((res) => {
    setItems(res);
  }).catch((rej) => {
     
  });
}, [categoryName]);

  return (
    <div className='container'>
    <div className='greetingIndex'>{greeting}</div>
      <ItemList items={items}/>
    </div>
  )
  
}

export default ItemListContainer; 


