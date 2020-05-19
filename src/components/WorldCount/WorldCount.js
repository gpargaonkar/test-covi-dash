import React, { Component } from 'react'
import Figure from '../Figure/Figure'
import './WorldCount.css'
import { getOverallDetails, getOverallHistoricalData } from '../../api/api';
import { Line } from 'react-chartjs-2'
import WorldChart from './WorldChart';
import FigureHzt from '../Figure/FigureHzt';
import { rateOfChange } from '../../utils/utils';

class WorldCount extends Component {

    constructor() {
        super()
        this.state = {
            overall: false,
            dateWiseCases: false,
            dateWiseDeaths: false,
            dateWiseRecovered: false,
            lastNdays: 60
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

    getOverallHistoricalData(days) {
        getOverallHistoricalData(days)
            .then(data => {
                console.log("XXXX Promise data: Overall - Date-wise", data.cases)
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
        this.getOverallHistoricalData(this.state.lastNdays);
    }

    //util 1 calculate date
    calculateDate(string) {
        return new Date(string).toUTCString()
    }

    //util 2 fetch data for last several days
    setLastNDays(days) {

        this.setState({
            ...this.state,
            lastNdays: days
        }, () => this.getOverallHistoricalData(this.state.lastNdays))
    }

    render() {

        const { cases,
            deaths,
            recovered,
            active,
            updated,
            casesPerOneMillion,
            activePerOneMillion,
            affectedCountries,
            critical } = this.state.overall

        console.log("RENDER", Object.keys(this.state.dateWiseCases))

        return (
            <div className="world-dashboard">
                <h2>World Count</h2>

                {
                    (this.state.overall && this.state.dateWiseCases) ?
                        <div>
                            <div className="world-count-wrapper">
                                <div>
                                    <div className="world-figures">
                                        <Figure data={cases} text="Total Cases" />
                                        <Figure data={deaths} text="Total Deaths" />
                                        <Figure data={recovered} text="Recovered" />
                                        <Figure data={active} text="Active Cases" />
                                    </div>
                                    <div className="timestamp">*Last Updated on: {this.calculateDate(updated)}</div>
                                </div>
                            </div>

                            <div className="chart-and-other-stats">

                                <div className="other-stats">
                                    <FigureHzt data={casesPerOneMillion} text="Cases Per One Million" />
                                    <FigureHzt data={activePerOneMillion} text="Active Per One Million" />
                                    <FigureHzt data={affectedCountries} text="Affected Countries" />
                                    <FigureHzt data={critical} text="Critical" />
                                    <FigureHzt
                                        isNew={true}
                                        data={rateOfChange(Object.values(this.state.dateWiseCases)) + '%'}
                                        text="Cases Rate" />
                                    <FigureHzt
                                        isNew={true}
                                        data={rateOfChange(Object.values(this.state.dateWiseDeaths)) + '%'}
                                        text="Death Rate" />
                                    <FigureHzt
                                        isNew={true}
                                        data={rateOfChange(Object.values(this.state.dateWiseRecovered)) + '%'}
                                        text="Recovery Rate" />
                                </div>

                                <div>
                                    <WorldChart
                                        dateWiseCases={this.state.dateWiseCases}
                                        dateWiseDeaths={this.state.dateWiseDeaths}
                                        dateWiseRecovered={this.state.dateWiseRecovered}
                                        lastNdays={this.state.lastNdays}
                                    />
                                    <div className="buttons">
                                        <div className="button-item" onClick={() => this.setLastNDays(30)}>30</div>
                                        <div className="button-item" onClick={() => this.setLastNDays(45)}>45</div>
                                        <div className="button-item" onClick={() => this.setLastNDays(60)}>60</div>
                                        <div className="button-item" onClick={() => this.setLastNDays(90)}>90</div>
                                    </div>
                                </div>
                            </div>
                        </div> :
                        <div className="loading">Loading..</div>
                }
            </div>
        )
    }
}

export default WorldCount
