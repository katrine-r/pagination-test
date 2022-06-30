import { GET_PRODUCTS_LIST } from '../types'
import { FILTERED_PRODUCTS_LIST } from '../types'

const initialState = {
    products: [],
    filteredProducts: []
}

export const appReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_PRODUCTS_LIST:
            return {
                ...state,
                products: payload
            }
        case FILTERED_PRODUCTS_LIST:
            return {
                ...state,
                filteredProducts: payload
            }
        default:
            return state;
    }
}