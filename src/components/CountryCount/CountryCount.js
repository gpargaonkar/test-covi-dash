import React, { Component } from 'react'
import { getAllCountry } from '../../api/api';
import AllFigure from './AllFigures/AllFigure';
import CountrySelector from './Countries/CountrySelector';
import './CountryCount.css'
import CountryChart from './CountryChart/CountryChart';


class CountryCount extends Component {

    constructor() {
        super()
        this.state = {
            allCountry: false,
            selected: 'Afghanistan', // selected country string
            selectedCountry: {}, // selected country object
            countryList: [] // all country list
        }
    }

    countrySelectedCallbackFunction = (country) => {
        console.log("App", country)
        const countryObj = this.state.allCountry.filter(ele => ele.country === country)
        console.log("App", countryObj)
        this.setState({
            ...this.state,
            selected: country,
            selectedCountry: countryObj[0]
        })

    }


    getAllCountry() {
        getAllCountry()
            .then((data) => {
                //console.log("CCCCC Promise Data", data.map(ele => ele.country))
                this.setState({
                    ...this.state,
                    allCountry: data,
                    selectedCountry: data[0],
                    countryList: data.map(ele => ele.country)
                })
            })
    }



    componentDidMount() {
        this.getAllCountry();
    }

    render() {

        //console.log("COUNTRY CHART PROPS 1", this.state.selected)

        return (
            <div className="dashboard-wrapper">
                <div>Select Country</div>
                <CountrySelector countryList={this.state.countryList}
                    countrySelectedCallbackFunction={this.countrySelectedCallbackFunction} />
                <div className="dashboard">
                    <AllFigure country={this.state.selectedCountry} />
                    <CountryChart selectedCountry={this.state.selected==="USA"?"US":this.state.selected} />
                </div>
            </div>
        )
    }
}

export default CountryCount