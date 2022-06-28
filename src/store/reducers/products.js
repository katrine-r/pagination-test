import { GET_PRODUCTS_LIST } from '../types'

const initialState = {
    products: null
}

export const appReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_PRODUCTS_LIST:
            return {
                ...state,
                products: payload
            }
        default:
            return state;
    }
}