// import {useReducer} from 'react'
import {useReducer} from './fakeReducer'
import ShoppingCart from './ShoppingCart';


const reducer=(state,action)=>{
   switch(action.type){
      case "ADD":
        return state+1;
      case "DECREASE":
        return state-1;
      default:
        return state;
   }
}

function App() {
  const [state,dispatch]=useReducer(reducer,0)
  return (
    <div className="App">
      <div>
        <h2>Demo1</h2>
      计数器 {state}
      <button onClick={()=>dispatch({type:'ADD'})}>+</button>
      <button onClick={()=>dispatch({type:'DECREASE'})}>-</button>
      </div>
      <div>
        <h2>Demo2</h2>
        <ShoppingCart />
      </div>
    </div>
  );
}

export default App;
