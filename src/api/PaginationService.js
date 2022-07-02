const API_URL = process.env.REACT_APP_API_URL

class PaginationService {
    static async getProducts(per_page, page) {
        const response = await fetch(`${API_URL}/api/products?per_page=${per_page}&page=${page}`)
        const products = await response.json()
        return products
    }
}

export default PaginationService