import React from 'react'

const ShapeForm = (props) => {
    const handleSetShape = (e) => {
        console.log(e.target.value)
        props.setShape(e.target.value)
    }
    return (
        <div className='shape-form-container'>
            <form>
            <label htmlFor="pet-select">Shape:</label>
            <select name="shape" id="shape-select" value={props.shape}onChange={handleSetShape}>
                <option value="">--Select a shape--</option>
                <option value="square">square</option>
                <option value="rectangle">rectangle</option>
                <option value="circle">circle</option>
                <option value="oval">oval</option>
                <option value="triangle">triangle</option>
            </select>
            </form>
        </div>
    )
}

export default ShapeForm