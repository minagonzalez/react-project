import estilos from './itemlistcontainer.module.css';

const ItemListContainer = (props) => {
    return  (
    <div className= {estilos.containerSaludo}>
        <p>{props.saludo}</p>
    </div>
    );
}


export default ItemListContainer;