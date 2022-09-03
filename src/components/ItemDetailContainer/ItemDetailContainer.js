import { products } from '../../mock/products';
import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [item, setIem] = useState(0);

    const { id } = useParams();
    useEffect(() => {
        const getProduct = new Promise((res, rej) => {
            setTimeout(() => {
                const prodId = products.find((product) => product.id === Number(id));
               
                console.log(' prodId ',products.find((prod) => prod.id === Number(id)));
             res(prodId);
            }, 2000);
         });
     
         getProduct
         .then((data) => {
             setIem(data);
         })
         .catch((rej) => {
             console.log('catch: ', rej);
         });
    }, [id])

    // console.log(item);

    return  (
    <div>
        <ItemDetail item={item}/>
    </div>
    );
}


export default ItemDetailContainer;