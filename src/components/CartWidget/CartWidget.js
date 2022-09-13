import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {

    const {totalItems} = useContext(CartContext);

    const totalItemsCart = totalItems();
    return (
    <div>
        <span className="material-symbols-outlined">
    shopping_cart
        </span>
        <p>{totalItemsCart === 0 ? '' : totalItemsCart}</p>
    </div>
    );
}

export default CartWidget;