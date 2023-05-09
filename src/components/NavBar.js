import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


export default function NavBar() {

    const products = useSelector((state) => state.products.cartItems)
    let count = 0
    for(let i in products) {
        count += products[i].count
        console.log(products);
    }
    

    return (
        <ul className="links">
            <li className="li">
                <NavLink to={'/'}>Prod Page</NavLink> 
            </li>
            <li className="li">
                <NavLink to={'/cart'}>your cart ({count})</NavLink> 
            </li>
        </ul>
    )
}