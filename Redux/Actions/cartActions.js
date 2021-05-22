import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART,
    ADD_TO_CART_WITH_QUANTITY
} from '../constants';

export const addToCart = (payload) => {
    return {
        type: ADD_TO_CART,
        payload
    }
}

export const addToCartWithQuantity = (payload) => {
    return {
        type: ADD_TO_CART_WITH_QUANTITY,
        payload
    }
}
export const removeFromCart = (payload) => {
    return {
        type: REMOVE_FROM_CART,
        payload
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}