import React from 'react'
import './Figure.css'

function FigureHzt(props){
    return(
        <div className="figure-hzt">
            <div className="text-hzt">{props.text} <span className={props.isNew?"isNew":"notNew"}>New</span> </div>
            <div className="number-hzt">{props.data}</div>
        </div>
    )
}

export default FigureHzt