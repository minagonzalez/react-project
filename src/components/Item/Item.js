import estilos from './item.module.css';
import { Link } from 'react-router-dom';
// import { products } from '../../mock/products';

const Item = ( { item } ) => {

    return (
    <div className={estilos.productCont}>
        <img className={estilos.imgProduct} src={item.img} alt="foto" />
        <h3>{item.title}</h3>
        <p>Precio: ${item.price}.-</p>
        <p>Categoria: {item.category}</p>
        <p>Stock: {item.stock}</p>
        <Link to={`/item/${item.id}`}>Ver Detalle</Link>
    </div>
    )
}


export default Item;