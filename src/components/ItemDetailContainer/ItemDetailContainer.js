//import { products } from '../../mock/products';
import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from '../../firebaseConfig';
import { getDoc, doc, collection } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [item, setItem] = useState(0);

    const { id } = useParams();
    useEffect(() => {
        const itemCollection = collection(db, 'productos');
        const ref = doc(itemCollection, id);
        getDoc(ref)
        .then(res =>{
            setItem({
                id: res.id,
                ...res.data()
            })
        })
    }, [id])


    return  (
    <div>
        <ItemDetail item={item}/>
    </div>
    );
}


export default ItemDetailContainer;


// const getProduct = new Promise((res, rej) => {
//     setTimeout(() => {
//         const prodId = products.find((product) => product.id === Number(id));
       
//         console.log(' prodId ',products.find((prod) => prod.id === Number(id)));
//      res(prodId);
//     }, 2000);
//  });

//  getProduct
//  .then((data) => {
//      setIem(data);
//  })
//  .catch((rej) => {
//      console.log('catch: ', rej);
//  });