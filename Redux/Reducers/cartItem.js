import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART,
    ADD_TO_CART_WITH_QUANTITY
} from '../constants';

const cartItems = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            var item= state.find(item => item.product.Product_id == action.payload.product.Product_id)
            {console.log("--------*******************-------------")}
            {console.log(item)}
            if(item)
            {
              item.quantity = item.quantity+1;
              {console.log("--------")}
              {console.log(item)}
              {console.log("--------")}
              return [...state]
            }
            {console.log("--------end____")}
            {console.log(action.payload)}
            return [...state, action.payload]
        case REMOVE_FROM_CART:
            return state.filter(cartItem => cartItem !== action.payload)
        case CLEAR_CART:
            return state = []
        case ADD_TO_CART_WITH_QUANTITY:
            var item= state.find(item => item.product.Product_id == action.payload.product.Product_id)
            {console.log("--------**********rada*********-------------")}
            {console.log(item)}
            if(item)
            {
              item.quantity = parseInt(item.quantity)+ 1+ parseInt(action.payload.quantity) - 1;
              {console.log("--------")}
              {console.log(item)}
              {console.log("--------")}
              return [...state]
            }
            
            {console.log("--------end____")}
            {console.log(action.payload)}
            return [...state, action.payload]

    }
    return state;
}

export default cartItems;