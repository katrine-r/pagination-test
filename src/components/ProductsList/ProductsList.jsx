import React from 'react'
import classes from './ProductsList.module.scss'
import ProductsListItem from './ProductsListItem/ProductsListItem'

const ProductsList = ({ filteredList }) => {

    return (
        <div className={classes.ProductsList}>
            <ul>
                {filteredList?.map((i, index) => {
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