import React from 'react'
import '../styles/shapes.css'

const ShapeDisplay = (props) => {
    return (
        <div className='shape-display-container'>
            <div className={props.shape}>

            </div>
        </div>
    )
}

export default ShapeDisplay