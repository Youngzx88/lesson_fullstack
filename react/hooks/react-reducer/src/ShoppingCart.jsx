import { useReducer } from "./fakeReducer";
import { shoppingCartRedecuer } from "./shoppingCartReducer";

const initialState = {
    products: [
      { id: 1, name: "太阳眼镜", num: 1, price: 200 },
      { id: 2, name: "充电宝", num: 1, price: 96 },
    ],
    total: 296,
};

const ShoppingCart = () => {
  const [state,dispatch]=useReducer(shoppingCartRedecuer,initialState)
 
  return (
    <div>
      <h2>购物车</h2>
      <ul>
        {state.products.map((product) => {
          return (
            <li key={product.id}>
              {product.name} {product.num} {product.price} 
              <button onClick={()=>dispatch({type:'ADD',payload:product.id})}>+</button>
              <button onClick={()=>dispatch({type:'DECREASE',payload:product.id})}>-</button>
            </li>
          );
        })}
      </ul>
      <hr />
      <button onClick={()=>dispatch({type:'CLEAR'})}>清空</button>
      总计 {state.total} 元
    </div>
  );
};
export default ShoppingCart;
