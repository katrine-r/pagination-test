import React from 'react'
import classes from './Loader.module.scss'

const Loader = () => {
    return (
        <div className={classes.LdsRing}>
            <div></div><div></div><div></div><div></div>
        </div>
    )
}

export default Loader