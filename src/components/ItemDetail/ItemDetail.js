import estilos from './itemdetail.module.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ( { item }) => {

    const [cantidad, setCantidad] = useState(0);
    const { addToCart } = useContext(CartContext);


    const onAdd = (cantidad) => {
        setCantidad(cantidad);
        addToCart(item, cantidad);

    }
    return (
        <div className={estilos.detailDiv}>
            <h2>Detalle</h2>
            <img src={item.img} alt="foto" />
            <p>Precio: ${item.price}.-</p>
            <p>Descripcion: {item.description}</p>
            { 
            cantidad === 0 
            ? 
            (<ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>) 
            : 
            (  <Link to="/cart" >Terminar mi compra</Link>) 
            }
            
        </div>
        
        )
}

export default ItemDetail;