import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

class WorldChart extends Component {

    constructor(props) {
        super(props)
        this.state = {
            chartData: {}
        }
    }

    setDataToChartData() {
        this.setState({
            chartData: {
                labels: Object.keys(this.props.dateWiseCases),
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
                        data: Object.values(this.props.dateWiseDeaths),
                        backgroundColor: 'rgba(247, 54, 54,0.6)',
                        pointBackgroundColor: 'rgba(247, 54, 54)'
                    },
                    {
                        label: 'Recovered',
                        data: Object.values(this.props.dateWiseRecovered),
                        backgroundColor: 'rgba(44, 230, 65,0.6)',
                        pointBackgroundColor: 'rgba(0, 255, 81)',
                        pointBorderColor: 'rgba(91, 94, 91)'
                    }
                ]
            }
        })
    }

    componentDidMount() {
        this.setDataToChartData()
    }

    render() {

        console.log("WORLD CHART", Object.keys(this.props.dateWiseCases))

        return (
            <div className="world-chart">
                <Line
                    data={this.state.chartData}
                />
            </div>
        )
    }

}

export default WorldChart