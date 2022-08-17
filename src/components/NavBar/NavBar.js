import estilos from './navbar.module.css';


const NavBar = () => {
    return (
        <nav>
            <div className={estilos.logoNavbar}>
                <h2>Mina Ecommerce</h2>
            </div>
            <ul className={estilos.ulNavbar}>
                <li><a href='www.google.com'>Home</a></li>
                <li><a href='www.google.com'>Quienes Somos</a></li>
                <li><a href='www.google.com'>Contacto</a></li>
                <li><a href='www.google.com'>FAQS</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;