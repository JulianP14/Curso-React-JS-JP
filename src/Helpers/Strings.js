/* 
te recomiendo hacer otro file llamado strings.js en una carpeta helpers, donde tu puedas ir  metiendo los  disntintos strings y data que necesites en tu app y así lo haces reusable y dinámico (por si te toca cmabiarlo, ya lo tengas fácil y solo cambiar en un solo lugar y no en 5 o 6) . Para este caso un array con los strings del navbar : export const navBarOptions = ['Home ', 'Features', 'Pricing',  'Disabled'];


y en el Navbar import este array e utilizarlo con un.map dentro del tag ul y por cada iteración(string) creas un li



import { navBarOptions } from '../helpers/strings':

ya en el render algo así(entre {}, ya que todo lo que va adentro es js:
<ul className="navbar-nav">
    {NavbarOptions.map(navBarOption => {
         <li className="nav-item active">
            <a className="nav-link" href="#">{navBarOption }<span className="sr-only">(current)</span></a>
        </li>
 })} 
</ul> 
*/
/* const NavBarOptions = ['Billeteras', 'Carteras', 'Morrales', 'Cinturones'];

export default NavBarOptions */

/* 

Mira puedes poner estas lineas en otra funcion y ya despues llamarla en el useEffect:

    obtenerProductos().then(response =>{
            setProductos(response)
        })
 */

