export const shoppingCartRedecuer=(state,action)=>{
    let newState=JSON.parse(JSON.stringify(state))
    let id=action.payload
    let index=state.products.findIndex((product)=>product.id===id)

    switch(action.type){
        case "ADD":
          newState.products[index].num++
          break;
        case "DECREASE":
            if(state.products[index].num<=1){
                newState.products.splice(index,1)

            }else{
                newState.products[index].num--
            }
           
           break;
        case "CLEAR":
            return {products:[],total:0}
        default:
           return state;    
       
     }

     newState.total=newState.products.reduce((total,product)=>{
        return total + product.num*product.price
    },0)

    return newState
    
}