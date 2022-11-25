import React, { useEffect, useState } from 'react'
//import { getProducts } from '../moks/products';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import {collection,getDocs, query, where } from 'firebase/firestore';
import PulseLoader from "react-spinners/PulseLoader";
import { db } from '../services/firebaseConfig';

const ItemListContainer = ({greeting}) => {
  const [items, setItems] = useState ([]);
  const [loading, setLoading] = useState(true);

  const {categoryName} = useParams ();

  useEffect (() => {

    const collectionProd = collection(db, 'products');

    if (!categoryName) {
        getDocs(collectionProd)
        .then((res) => {
            const products = res.docs.map((prod) => {
                return {
                    id: prod.id,
                    ...prod.data(),
                };
            });
            setItems(products);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        });
    } else {
        const q = query(collectionProd, where('category', '==', categoryName));
        getDocs(q)
        .then((res) => {
            const products = res.docs.map((prod) => {
                return {
                    id: prod.id,
                    ...prod.data(),
                };
            });
            setItems(products);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        });
    }
    return () => setLoading(true);
}, [categoryName]);

if (loading) {
  return (
    <div className='loader'>
      <PulseLoader size={25}/>
    </div>
  );
}

  return (
    <div className='container'>
    <div className='greetingIndex'>{greeting}</div>
      <ItemList items={items}/>
    </div>
  )
  
}

export default ItemListContainer; 


