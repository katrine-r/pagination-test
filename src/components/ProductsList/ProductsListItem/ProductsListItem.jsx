import React from 'react'
import classes from './ProductsListItem.module.scss'

const ProductsListItem = ({id, name, year, color}) => {
    return (
        <div className={classes.ProductsListItem}>
            <li className={classes.Item} style={{backgroundColor: `${color}`}}>
                <span className={classes.IdWrapper}>{id} </span>
                <span className={classes.NameWrapper}>{name} </span>
                <span className={classes.YearWrapper}>{year}</span>
            </li>
        </div>
    )
}

export default ProductsListItem