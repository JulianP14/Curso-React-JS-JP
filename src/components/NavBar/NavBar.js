import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget.js"
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
        <nav>
            <div className="div__navbar">
                <Link to ='/' className='DN__contenedor'>
                    <h2 className='DNC__titulo'><i>De Cuero</i></h2>
                </Link>
                <ul className="navBar">
{/*                 <Link to='/category/billeteras' className="navBar__li">Billeteras</Link>
                    <Link to='/category/carteras' className="navBar__li">Carteras</Link>
                    <Link to='/category/morrales' className="navBar__li">Morrales</Link>
                    <Link to='/category/cinturones' className="navBar__li">Cinturones</Link> */}

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