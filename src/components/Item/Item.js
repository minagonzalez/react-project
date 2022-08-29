import estilos from './item.module.css';

const Item = ( { item } ) => {

    return (
    <div className={estilos.productCont}>
        <img className={estilos.imgProduct} src={item.img} alt="foto" />
        <h3>{item.title}</h3>
        <p>Precio: ${item.price}.-</p>
        <p>Categoria: {item.category}</p>
        <p>Stock: {item.stock}</p>
    </div>
    )
}


export default Item;