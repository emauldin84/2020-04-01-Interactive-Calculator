import React from 'react'
import '../styles/shapes.css'

const ShapeDisplay = (props) => {
    const shapeStyle = {
        width: `${props.width}px`,
        height: props.shape === 'square' || props.shape === 'circle' ? `${props.width}px` : `${props.height}px`,
        background: `${props.color}`, 
        borderRadius: props.shape === 'oval' ? props.width ? `${(props.width/2)}px` : '100px' / props.height ? `${(props.height/2)}px` : '50px' : ''
    }

    let shapeDisplay = props.shape ? <div className={props.shape} style={shapeStyle}>

                                    </div>
                                    : 
                                    <div>Begin by selecting your shape!</div>
    return (
        <div className='shape-display-container'>
            {shapeDisplay}
        </div>
    )
}

export default ShapeDisplay