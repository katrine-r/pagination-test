import { GET_PRODUCTS_LIST } from '../types'

export const getProductsList = payload => {
    return {
        type: GET_PRODUCTS_LIST,
        payload
    }
}