import React, { Component } from 'react'
import Figure from '../../Figure/Figure'
import './AllFigures.css'
import FigureHzt from '../../Figure/FigureHzt'

function AllFigure(props) {

    function calculateDate(string) {
        return new Date(string).toUTCString()
    }

    return (
        <div className="all-figures">
            <h2>{props.country.country}</h2>
            <div className="figures">
                <FigureHzt data={props.country.cases} text="Total Cases" />
                <FigureHzt data={props.country.deaths} text="Total Deaths" />
                <FigureHzt data={props.country.recovered} text="Recovered" />
                <FigureHzt data={props.country.active} text="Active Cases" />
                <FigureHzt data={props.country.todayCases} text="Today Cases" />
                <FigureHzt data={props.country.todayDeaths} text="Today Deaths" />
                <FigureHzt data={props.country.critical} text="Critical" />
                <FigureHzt data={props.country.tests} text="Total Tests" />
            </div>
            <div className="timestamp">*Last Updated on: {calculateDate(props.country.updated)}</div>
        </div>
    )


}

export default AllFigure