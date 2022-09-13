import { createContext, useState } from "react";

export const CartContext = createContext(); 

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            //lo encuentro y le sumo la cantidad
            addItem(item, cantidad);
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    // corroborar si el producto ya está en el carrito (isInCart)

    const isInCart = (id) => {
        return cart.some((producto) => producto.id === id);
    };

    //sumar cantidades del mismo producto

    const addItem = (item, cantidad) => {
        const updateProducts = cart.map((prod) => {
            if (prod.id === item.id) {
                const productUpdated = {
                    ...prod,
                    cantidad: cantidad,
                };

                return productUpdated;
            } else {
                return prod;
            }
        });
        setCart(updateProducts);
    };

    //eliminar un solo producto pasandole el id

    const removeItem = (id) => {
     
        const filteredProducts = cart.filter((prod) => prod.id !== id);
        setCart(filteredProducts);
    };

    //vaciar todo el carrito
    
    const clear = () => {
        setCart([]);
    };

    // total precio del carrito

    const totalPrice = () => {
        let acumulador = 0;
        cart.forEach((prod) => {
            acumulador += prod.cantidad * prod.price;
        });
        return acumulador;
    };

    const totalItems = () => {
        let acumulador = 0;
        cart.forEach((prod) => {
            acumulador += prod.cantidad;
        });
        return acumulador;
    };

    return(
        <CartContext.Provider value={{ cart, addToCart, clear, addItem, removeItem, totalPrice, totalItems}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider;