import React from 'react'
import './Figure.css'

function Figure(props) {
    return (
        <div className="figure">
            <div className="number">{props.data}</div>
            <div className="text">{props.text}</div>
        </div>
    )
}

export default Figure