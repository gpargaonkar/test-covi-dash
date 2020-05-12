import React, { Component } from 'react'
import Figure from '../Figure/Figure'
import './WorldCount.css'
import { getOverallDetails, getOverallHistoricalData } from '../../api/api';
import { Line } from 'react-chartjs-2'
import WorldChart from './WorldChart';

class WorldCount extends Component {

    constructor() {
        super()
        this.state = {
            overall: false,
            dateWiseCases: false,
            dateWiseDeaths: false,
            dateWiseRecovered: false
        }


    }

    getOverallDetails() {
        getOverallDetails()
            .then(data => {
                console.log("Promise data: overall", data)
                this.setState({
                    ...this.state,
                    overall: data
                })
            })
    }

    getOverallHistoricalData() {
        getOverallHistoricalData()
            .then(data => {
                console.log("Promise data: Overall - Date-wise", data)
                this.setState({
                    ...this.state,
                    dateWiseCases: data.cases,
                    dateWiseDeaths: data.deaths,
                    dateWiseRecovered: data.recovered
                })
            })

    }



    componentDidMount() {
        this.getOverallDetails();
        this.getOverallHistoricalData();
    }

    calculateDate(string) {
        return new Date(string).toUTCString()
    }

    render() {

        const { cases, deaths, recovered, active, updated } = this.state.overall

        console.log("date wise cases", Object.keys(this.state.dateWiseCases))

        return (
            <div className="world-dashboard">
                <div className="world-count-wrapper">
                    {
                        this.state.overall ?
                            <div>
                                <h1>World Count</h1>
                                <div className="world-figures">
                                    <Figure data={cases} text="Total Cases" />
                                    <Figure data={deaths} text="Total Deaths" />
                                    <Figure data={recovered} text="Recovered" />
                                    <Figure data={active} text="Active Cases" />
                                </div>
                                <div className="timestamp">*Last Updated on: {this.calculateDate(updated)}</div>
                            </div> :
                            <div>
                                <h3>Loading..</h3>
                            </div>
                    }
                </div>
                {
                    this.state.dateWiseCases ?
                        <WorldChart
                            dateWiseCases={this.state.dateWiseCases}
                            dateWiseDeaths={this.state.dateWiseDeaths}
                            dateWiseRecovered={this.state.dateWiseRecovered}
                        /> :
                        <h3>Loading..</h3>
                }
            </div>
        )
    }
}

export default WorldCount