import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

class WorldChart extends Component {

    constructor(props) {
        super(props)
        this.state = {
            chartData: {},
            chartOptions: {},
            dateWiseCases: Object.keys(this.props.dateWiseCases),
            dateWiseDeaths: Object.values(this.props.dateWiseDeaths),
            dateWiseRecovered: Object.values(this.props.dateWiseRecovered),
            lastNdays: this.props.lastNdays
        }
    }

    setDataToChartData() {
        this.setState({
            chartData: {
                labels: this.state.dateWiseCases,
                datasets: [
                    {
                        label: 'Cases',
                        data: Object.values(this.props.dateWiseCases),
                        backgroundColor: 'rgba(125, 225, 232,0.6)',
                        pointBackgroundColor: 'rgba(0, 255, 234)',
                        pointBorderColor: 'rgba(91, 94, 91)'
                    },
                    {
                        label: 'Deaths',
                        data: this.state.dateWiseDeaths,
                        backgroundColor: 'rgba(247, 54, 54,0.6)',
                        pointBackgroundColor: 'rgba(247, 54, 54)'
                    },
                    {
                        label: 'Recovered',
                        data: this.state.dateWiseRecovered,
                        backgroundColor: 'rgba(44, 230, 65,0.6)',
                        pointBackgroundColor: 'rgba(0, 255, 81)',
                        pointBorderColor: 'rgba(91, 94, 91)'
                    }
                ]
            },
            chartOptions: {
                title: {
                    display: true,
                    text: `Showing chart for last ${this.state.lastNdays}  days`
                }
            }
        })
    }

    componentDidMount() {
        this.setDataToChartData()
    }

    componentDidUpdate(props) {
        console.log("WORLD CHART: PRE PROPS", props.dateWiseCases)
        console.log("WORLD CHART: NEW PROPS", this.props.dateWiseCases)
        if (props.dateWiseCases !== this.props.dateWiseCases) {
            this.setState({
                ...this.state,
                dateWiseCases: Object.keys(this.props.dateWiseCases),
                dateWiseDeaths: Object.values(this.props.dateWiseDeaths),
                dateWiseRecovered: Object.values(this.props.dateWiseRecovered),
                lastNdays: this.props.lastNdays
            }, () => this.setDataToChartData())
        }

    }

    render() {

        console.log("WORLD CHART", Object.keys(this.props.dateWiseCases))

        return (
            <div className="world-chart">
                <Line
                    data={this.state.chartData}
                    options={this.state.chartOptions}
                    width={800}
                    height={400}
                />
            </div>
        )
    }

}

export default WorldChart
