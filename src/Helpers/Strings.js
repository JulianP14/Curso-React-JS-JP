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
const NavBarOptions = ['Billeteras', 'Carteras', 'Morrales', 'Cinturones'];

export default NavBarOptions



/* Hola Julían, si te entiendo, podrias usar varios selectores para el mismo elemento, usando clases de elementos hermanos o de padres. algo asi: div .container li {}

seria que buscaras los elementos mas cercanos y hagas esto, y así también aprendes de css un poco más.



mira este recurso: https://lenguajecss.com/css/selectores/selectores-avanzados/ 




Muy buena la utilización del spread con los props en esta linea. 

{productos.map(producto => <Item key={producto.id} {...producto}/>)}



Mira puedes poner estas lineas en otra funcion y ya despues llamarla en el useEffect:

    obtenerProductos().then(response =>{
            setProductos(response)
        })



En este componente puedes usar la destructuración de las props y evitas el .props
const Titulo = ({greeting}) => {
    return(
        <div>
            <h1 id="titulo">{greeting}</h1>
        </div>
    )
}




*/