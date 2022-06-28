const API_URL = process.env.REACT_APP_API_URL

class PaginationService {
    static async getProducts() {
        const response = await fetch(`${API_URL}/api/products`)
        const products = await response.json()
        return products
    }
}

export default PaginationService