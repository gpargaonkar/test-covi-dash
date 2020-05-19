import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import { getCountryHistoricalData } from '../../../api/api'

class CountryChart extends Component {

    constructor(props) {
        super(props)

        this.state = {
            chartData: {},
            chartOptions: {},
            selected: this.props.selectedCountry,//name of country for which data is currently represented
            historyData: false,
            lastNdays: 30
        }
    }

    prepareLastNdaysData = (array, lastNdays) => {
        let n = array.length
        console.log("PPPP", array.slice(n - lastNdays, n))
        return array.slice(n - lastNdays, n)
    }

    setDataToChartData() {

        console.log("setDataToChartData", this.state.historyData.map(ele => ele.Confirmed))
        console.log("setDataToChartData", this.state.historyData.map(ele => ele.Deaths))
        console.log("setDataToChartData", this.state.historyData.map(ele => ele.Recovered))
        console.log("setDataToChartData", this.state.historyData.map(ele => ele.Date.slice(0, 10)))

        this.setState({
            chartData: {
                labels: this.prepareLastNdaysData(this.state.historyData.map(ele => ele.Date.slice(0, 10)), this.state.lastNdays),
                fontColor: 'black',
                datasets: [
                    {
                        label: 'Cases',
                        data: this.prepareLastNdaysData(this.state.historyData.map(ele => ele.Confirmed), this.state.lastNdays),
                        backgroundColor: 'rgba(125, 225, 232,0.6)',
                        pointBackgroundColor: 'rgba(0, 255, 234)',
                        pointBorderColor: 'rgba(91, 94, 91)'
                    },
                    {
                        label: 'Deaths',
                        data: this.prepareLastNdaysData(this.state.historyData.map(ele => ele.Deaths), this.state.lastNdays),
                        backgroundColor: 'rgba(247, 54, 54,0.6)',
                        pointBackgroundColor: 'rgba(247, 54, 54)'
                    },
                    {
                        label: 'Recovered',
                        data: this.prepareLastNdaysData(this.state.historyData.map(ele => ele.Recovered), this.state.lastNdays),
                        backgroundColor: 'rgba(44, 230, 65,0.6)',
                        pointBackgroundColor: 'rgba(0, 255, 81)',
                        pointBorderColor: 'rgba(91, 94, 91)'
                    }
                ]
            },
            chartOptions: {
                title: {
                    display: true,
                    text: `Historical Chart: ${this.state.selected}   Period:last ${this.state.lastNdays} days`,
                    fontColor: 'black'
                },
                tooltips: {
                    mode: 'x'
                }
            }
        })
    }

    getCountryHistoricalData(country) {
        console.log("getCountryHistoricalData Called")
        getCountryHistoricalData(country)
            .then(data => {
                console.log("Promise Data: getCountryHistoricalData", data)
                // console.log("Promise Data: getCountryHistoricalData filter", data.map(ele => ele.Confirmed))
                // console.log("Promise Data: getCountryHistoricalData filter", data.map(ele => ele.Date))
                this.setState({
                    ...this.state,
                    historyData: data
                }, () => this.setDataToChartData())
            })

    }

    componentDidMount() {
        this.getCountryHistoricalData(this.state.selected.toLowerCase())
        this.prepareLastNdaysData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)
    }

    componentDidUpdate(props) {
        console.log("History Data", this.state.historyData)
        console.log("*** PrevProps", props.selectedCountry)
        console.log("*** NewProps", this.props.selectedCountry)
        if (props.selectedCountry !== this.props.selectedCountry) {
            this.setState({
                ...this.state,
                selected: this.props.selectedCountry
            }, () => this.getCountryHistoricalData(this.state.selected.toLowerCase()))
        }
    }

    setLastNDays = days => {
        this.setState({
            ...this.state,
            lastNdays: days
        }, () => this.setDataToChartData())
    }



    render() {


        console.log("COUNTRY CHART PROPS 2", this.state.selected)

        return (
            <div className="country-chart">
                <Line
                    data={this.state.chartData}
                    options={this.state.chartOptions}
                    width={800}
                    height={400}
                />
                <div className="buttons">
                    <div className="button-item" onClick={() => this.setLastNDays(15)}>15</div>
                    <div className="button-item" onClick={() => this.setLastNDays(30)}>30</div>
                    <div className="button-item" onClick={() => this.setLastNDays(45)}>45</div>
                    <div className="button-item" onClick={() => this.setLastNDays(60)}>60</div>
                    <div className="button-item" onClick={() => this.setLastNDays(90)}>90</div>
                </div>
            </div>
        )
    }

}

export default CountryChart

// historyCases: data.map(ele => ele.Confirmed),
//                     historyDeaths: data.map(ele => ele.Deaths),
//                     historyRecovered: data.map(ele => ele.Recovered),
//                     dateLabels: data.map(ele => ele.Date.slice(0, 10))

// historyCases: false,
//             historyDeaths: false,
//             historyRecovered: false,
//             dateLabels: false