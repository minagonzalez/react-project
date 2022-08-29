import estilos from './itemlistcontainer.module.css';
import { products } from '../../mock/products';
import React, { useState, useEffect } from 'react';
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => {

    const [items, setIems] = useState([]);

    useEffect(() => {
        const getProducts = new Promise((res, rej) => {
            setTimeout(() => {
             res(products);
            }, 2000);
         });
     
         getProducts
         .then((data) => {
             setIems(data);
         })
         .catch((rej) => {
             console.log('catch: ', rej);
         });
    }, [])

    console.log(items);

    return  (
    <div className= {estilos.containerSaludo}>
        <p>{props.saludo}</p>
       
        <ItemList items={items}/>
    </div>
    );
}


export default ItemListContainer;