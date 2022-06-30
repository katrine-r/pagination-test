import { GET_PRODUCTS_LIST } from '../types'
import { FILTERED_PRODUCTS_LIST } from '../types'

export const getProductsList = payload => {
    return {
        type: GET_PRODUCTS_LIST,
        payload
    }
}

export const filteredProductsList = payload => {
    return {
        type: FILTERED_PRODUCTS_LIST,
        payload
    }
}