//import React, { memo } from 'react';
import Item from './Item';

const ItemList = ({items}) => {
  return (
    <div className="itemList">
    {items.map((products) => {
      return (
        <Item products={products} key={products.id} />
      )
    })}
    </div>
  );
};


/*  const ItemList = memo(
  ({items})  => {
 return (
     <div>
         {items.map((products) => {
             return <Item products={products} key={products.id}/>;
         })}    
     </div>
 );
},
(a, b) => a.items === b.items
); */


export default ItemList


