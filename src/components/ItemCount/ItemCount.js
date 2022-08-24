import React, {useState} from 'react';
import estilos from './itemcount.module.css';

const ItemCount = (props) => {

    
    const [count, setCount] = useState(props.initial);

    const suma = () => {
        props.stock > count ? setCount(count + 1) : alert('no hay más stock para agregar a este producto del que ya tenés');
    }

    const resta = () => {
        count > props.initial ? setCount(count - 1) : setCount(count);
    }

    return (
        <div className={estilos.itemDiv}>
            <button onClick={resta}>-</button>
            <p>{count}</p>
            <button onClick={suma}>+</button>
            <button onClick={props.onAdd}>Agregar al carrito</button>
        </div>
    )
}


export default ItemCount;