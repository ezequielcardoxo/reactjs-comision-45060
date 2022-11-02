import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { getProduct } from './moks/products'

const ItemDetailContainer = () => {
  const [item, setItem] = useState({})
  const {idProd} = useParams ();


  useEffect (()=>{
   
    getProduct(idProd)
    .then ((res)=>{
      setItem(res);
    })
    .catch((error)=>{
      console.log (error);
    });

  }, [idProd]);



  return (
    <div className='detailContainer'>
        <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer