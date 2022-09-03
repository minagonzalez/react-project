import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemCount from "../ItemCount/ItemCount";
import { Routes, Route } from "react-router-dom";
import Cart from "../Cart/Cart";

const Main =  () => {

    const onAdd = (param) => {
        alert(`Se han sumado ${param} productos al carrito`);
      }

    return(
        <main>
            <Routes>
                <Route path="/" element={ <ItemListContainer saludo="Bienvenidxs a mi Ecommerce <3" /> } />
                <Route path="/category/:categoryId" element={ <ItemListContainer/> }/>
                <Route path="/item/:id" element={ <ItemDetailContainer/> }/>
                <Route path="/cart" element={ <Cart/> }/>
            </Routes>
            <ItemCount stock={10} initial={1} onAdd= {onAdd}/>
        </main>
    )
}

export default Main;