import React from 'react'
import classes from './ProductsList.module.scss'
import { useSelector } from 'react-redux'
import ProductsListItem from './ProductsListItem/ProductsListItem'

const ProductsList = () => {
  const { products } = useSelector(state => state.products)
    console.log('products', products)
    console.log('products.data', products.data)
    return (
        <div className={classes.ProductsList}>
            <ul>
                {products.data.map((i, index) => {
                    return(
                        <ProductsListItem 
                            key={index}
                            id={i.id}
                            name={i.name}
                            year={i.year}
                            color={i.color}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default ProductsList