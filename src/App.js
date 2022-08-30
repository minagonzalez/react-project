import Header from "./components/Header/Header";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App() {

  const onAdd = () => {
    alert('On Add fu ejecutada');
  }
  return (
    <>
      <Header/>
      <ItemListContainer saludo="Bienvenidxs a mi Ecommerce <3" />
      <ItemDetailContainer/>
      <ItemCount stock={10} initial={1} onAdd= {onAdd}/>
    </>
  );
}

export default App;
