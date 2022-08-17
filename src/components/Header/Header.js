import NavBar from "../NavBar/NavBar";
import estilos from './header.module.css';

const Header = () => {
    return (
        <header className={estilos.contenedorMain}>
            <NavBar/>
        </header>
    )
}

export default Header;