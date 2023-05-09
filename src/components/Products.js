import { useDispatch, useSelector } from "react-redux";
import Data from "./product.json";
import { incr, addToCart } from "../store/productsReducer";

const Products = () => {
  const cartItems = useSelector((state) => state.products.value);
  const dispatch = useDispatch();
  

  return (
    <div> 
      {Data.map((data) => {
        return (
          <div>
            <ul className="prods">
              <li>{data.name} <button onClick={e => dispatch(addToCart(data))}>add</button></li>
            </ul>
          </div>
        )
      })}
    </div>
  );
};

export default Products;
