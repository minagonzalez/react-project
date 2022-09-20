import estilos from './itemlistcontainer.module.css';
//import { products } from '../../mock/products';
import React, { useState, useEffect } from 'react';
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const ItemListContainer = (props) => {

    const [items, setIems] = useState([]);

    const { categoryId } = useParams();


    useEffect(() => {
        const itemCollection = collection(db, 'productos');
        let q;
        categoryId ? q = query(itemCollection, where('category', '==', categoryId)) : q = itemCollection;
        getDocs(q)
        .then((res) => {
            const products = res.docs.map((prod) =>{
                return {
                    id: prod.id,
                    ...prod.data()
                };
            });
            console.log(typeof categoryId);
            setIems(products);
        })
        .catch(error =>{
            console.log(error);
        })
     }, [categoryId])



    return  (
    <div className= {estilos.containerSaludo}>
        <p>{props.saludo}</p>
       
        <ItemList items={items}/>
    </div>
    );
}


export default ItemListContainer;

      

// const getProducts = new Promise((res, rej) => {
//     const prodFiltrados = products.filter((product) => product.category === categoryId)
//      setTimeout(() => {
//       res(categoryId ? prodFiltrados : products);
//      }, 2000);
//   });

//   getProducts
//   .then((data) => {
//       setIems(data);
//   })
//   .catch((rej) => {
//       console.log('catch: ', rej);
//   });


