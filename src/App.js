import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { BrowserRouter } from 'react-router-dom';

function App() {

 
  return (
    <BrowserRouter>
      <Header/>
      <Main />
    </BrowserRouter>
  );
}

export default App;
