import estilos from './itemdetail.module.css';

const ItemDetail = ( { item }) => {

    return (
        <div className={estilos.detailDiv}>
            <h2>Detalle</h2>
            <img src={item.img} alt="foto" />
            <p>Precio: ${item.price}.-</p>
            <p>Descripcion: {item.description}</p>
        </div>
        )
}

export default ItemDetail;