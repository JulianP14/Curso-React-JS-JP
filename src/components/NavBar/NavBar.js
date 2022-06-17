import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget.js"
import { Link, NavLink } from 'react-router-dom'
/* import NavBarOptions from '../../Helpers/strings' */


const NavBar = () => {
    return (
        <nav>
            <div className="div__navbar">
                <Link to ='/' className='DN__contenedor'>
                    <h2 className='DNC__titulo'><i>De Cuero</i></h2>
                </Link>
                <ul className="navBar"> 
                    <NavLink to='/category/billeteras' className={({isActive }) => isActive ? 'clickNavBar' : 'noClickNavBar'}>Billeteras</NavLink>
                    <NavLink to='/category/carteras' className={({isActive }) => isActive ? 'clickNavBar' : 'noClickNavBar'}>Carteras</NavLink>
                    <NavLink to='/category/morrales' className={({isActive }) => isActive ? 'clickNavBar' : 'noClickNavBar'}>Morrales</NavLink>
                    <NavLink to='/category/cinturones' className={({isActive }) => isActive ? 'clickNavBar' : 'noClickNavBar'}>Cinturones</NavLink>
                </ul>
                <CartWidget />
            </div>
        </nav>
    )
}
export default NavBar