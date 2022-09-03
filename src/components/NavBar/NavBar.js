import CartWidget from '../CartWidget/CartWidget';
import estilos from './navbar.module.css';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className={estilos.nav}>
            <Link to="/">
            <div className={estilos.logoNavbar}>
                <h2>Mina Ecommerce</h2>
            </div>
            </Link>
            <ul className={estilos.ulNavbar}>
                <li><Link to="/category/remeras">Remeras</Link></li>
                <li><Link to="/category/gorras">Gorras</Link></li>
                <li><Link to="/category/zapatillas">Zapatillas</Link></li>
                <li><Link to="/cart"> <CartWidget/></Link></li>
            </ul>
            
        </nav>
    )
}

export default NavBar;