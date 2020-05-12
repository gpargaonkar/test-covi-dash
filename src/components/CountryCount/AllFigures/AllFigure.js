import React, { Component } from 'react'
import Figure from '../../Figure/Figure'
import './AllFigures.css'

function AllFigure(props) {

    function calculateDate(string) {
        return new Date(string).toUTCString()
    }

    return (
        <div className="all-figures">
            <h2>{props.country.country}</h2>
            <div className="figures">
                <Figure data={props.country.cases} text="Total Cases" />
                <Figure data={props.country.deaths} text="Total Deaths" />
                <Figure data={props.country.recovered} text="Recovered" />
                <Figure data={props.country.active} text="Active Cases" />
            </div>
            <div className="rates">
                <Figure data={props.country.todayCases} text="Today Cases" />
                <Figure data={props.country.todayDeaths} text="Today Deaths" />
                <Figure data={props.country.critical} text="Critical" />
                <Figure data={props.country.tests} text="Total Tests" />
            </div>
            <div className="timestamp">*Last Updated on: {calculateDate(props.country.updated)}</div>
        </div>
    )


}

export default AllFigure