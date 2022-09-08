import estilos from './itemdetail.module.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ( { item }) => {

    const [cantidad, setCantidad] = useState(0);

    const onAdd = (arg) => {
        setCantidad(arg);
    }
    return (
        <div className={estilos.detailDiv}>
            <h2>Detalle</h2>
            <img src={item.img} alt="foto" />
            <p>Precio: ${item.price}.-</p>
            <p>Descripcion: {item.description}</p>
            { cantidad === 0 ? (<ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>) : (  <Link to="/cart" >Ir al carrito</Link>) }
            
        </div>
        
        )
}

export default ItemDetail;