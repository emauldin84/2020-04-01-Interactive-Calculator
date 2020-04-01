import React from 'react'

const ShapeForm = (props) => {
    const handleSetShape = (e) => {
        console.log(e.target.value)
        props.setShape(e.target.value)
    }
    const handleSetHeight = (e) => {
        console.log(e.target.value)
        props.setHeight(e.target.value)
    }
    const handleSetWidth = (e) => {
        console.log(e.target.value)
        props.setWidth(e.target.value)
    }
    const handleSetColor = (e) => {
        console.log(e.target.value)
        props.setColor(e.target.value)
    }
    let display = props.shape === 'square' || props.shape === 'circle'
    return (
        <div className='shape-form-container'>
            <div className="settings shape-container">
                <label htmlFor="shape-select">Shape:</label>
                <select name="shape" id="shape-select" value={props.shape} onChange={handleSetShape}>
                    <option value="">--Select a shape--</option>
                    <option value="square">square</option>
                    <option value="rectangle">rectangle</option>
                    <option value="circle">circle</option>
                    <option value="oval">oval</option>
                </select>
            </div>
            <div className="settings color-container">
                <label htmlFor="color">Color:</label>
                <input type="color" id="color" name="color" value={props.color} onChange={handleSetColor}/>
            </div>
            {display ? null : <div className="settings height-container">
                <label htmlFor="height">Height: {props.height}</label>
                <input type="range" id="height" name="height" min="1" max="400" value={props.height} step="1" onChange={handleSetHeight}/>
    </div> }
            <div className='settings width-container'>
                <label htmlFor="width">Width:</label>
                <input type="range" id="width" name="width" min="1" max="400" value={props.width} step="1" onChange={handleSetWidth}/>
            </div>
        </div>
    )
}

export default ShapeForm