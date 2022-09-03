import estilos from './itemlistcontainer.module.css';
import { products } from '../../mock/products';
import React, { useState, useEffect } from 'react';
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {

    const [items, setIems] = useState([]);

    const { categoryId } = useParams();


    useEffect(() => {       

            const getProducts = new Promise((res, rej) => {
               const prodFiltrados = products.filter((product) => product.category === categoryId)
                setTimeout(() => {
                 res(categoryId ? prodFiltrados : products);
                }, 2000);
             });
         
             getProducts
             .then((data) => {
                 setIems(data);
             })
             .catch((rej) => {
                 console.log('catch: ', rej);
             });
    
     
           }, [categoryId])

    // console.log(items);

    return  (
    <div className= {estilos.containerSaludo}>
        <p>{props.saludo}</p>
       
        <ItemList items={items}/>
    </div>
    );
}


export default ItemListContainer;