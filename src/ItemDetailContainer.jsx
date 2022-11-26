import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { getDoc, doc } from 'firebase/firestore'
import {collectionProd } from './services/firebaseConfig'
import PulseLoader from "react-spinners/PulseLoader";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const {idProd} = useParams ();
  const [loading, setLoading] = useState(true);


  useEffect (()=>{
   
    const ref = doc(collectionProd, idProd);
    getDoc(ref)
    .then((res) => {

      setItem({
          id: res.id,
          ...res.data(),
      });
  })
  .catch((error) => {
      console.log(error);
  })
  .finally(() => {
      setLoading(false);
  });
  
  }, [idProd]);

  if (loading) {
    return (
        <div className="loader">
            <PulseLoader size={25}/>
        </div>
    );
}

  return (
    <div className='detailContainer'>
        <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer;