import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import estilos from "./cart.module.css";
import Form from "../Form/Form";

const Cart = () => {
    const [idCompra, setIdCompra] = useState('');
    const {cart, clear, removeItem, totalPrice} = useContext(CartContext);

    const total = totalPrice();

    const handleId = (id) => {
        setIdCompra(id);
    };

    if (idCompra) {
        return <h1>Gracias por comprar tu id es: {idCompra}</h1>;
    }

    if (cart.length === 0) {
        return (
            <h1>
                Aún no tenés productos, podés ir al <Link to="/">Home</Link>{' '}
                para buscar algún producto
            </h1>
        );
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
        >

            {cart.map((prod) => (
                <div
                    key={prod.id}
                    className={estilos.cartClass}
                >
                    <h3>{prod.title}</h3>
                    <h3>Cantidad: {prod.cantidad}</h3>
                    <h3>Precio${prod.price}.-</h3>
                    <button onClick={() => removeItem(prod.id)}>Delete</button>
                </div>
            ))}
            
            <button onClick={clear}>Clear Cart</button>
            {total === 0 ?
                <div  className={estilos.cartClass}>
                    <p>Usted no ha agregado productos al carrito.</p>
                    <Link to="/">Volver a la Home</Link>
                </div> 
                :
                <h4 className={estilos.cartClass}>El total a pagar es: ${total}</h4>
            }
              <Form
                cart={cart}
                total={total}
                clear={clear}
                handleId={handleId}
            />
        </div>
    );
}


export default Cart;