import { products } from '../../mock/products';
import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [item, setIem] = useState(0);

    useEffect(() => {
        const getProduct = new Promise((res, rej) => {
            setTimeout(() => {
             res(products.find((product) => product.id === 1));
            }, 2000);
         });
     
         getProduct
         .then((data) => {
             setIem(data);
         })
         .catch((rej) => {
             console.log('catch: ', rej);
         });
    }, [])

    // console.log(item);

    return  (
    <div>
    
        <ItemDetail item={item}/>
    </div>
    );
}


export default ItemDetailContainer;