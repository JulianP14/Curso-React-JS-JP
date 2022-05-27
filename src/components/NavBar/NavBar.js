import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget.js"


const NavBar = () => {
    return (
        <nav>
            <div className="div__navbar">
                <ul className="navBar">
                    <li className="navBar__li"><a href="#">Inicio</a></li>
                    <li className="navBar__li"><a href="#">Billeteras</a></li>
                    <li className="navBar__li"><a href="#">Morrales</a></li>
                    <li className="navBar__li"><a href="#">Carteras</a></li>
                    <li className="navBar__li"><a href="#">Contacto</a></li>
                </ul>
                <CartWidget />
                    
            </div>
        </nav>
    )
}
export default NavBar