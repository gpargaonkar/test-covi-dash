import React, { Component } from 'react'
import './CountrySelector.css'
import { Link } from 'react-router-dom'



class CountrySelector extends Component {


    getDataOfSelectedCountry = () => {
        let e = document.getElementById("countrySelector");
        let selectedCountry = e.options[e.selectedIndex].value;
        console.log("selectedCountry", selectedCountry)
        this.props.countrySelectedCallbackFunction(selectedCountry);

    }

    render(props) {
        return (
            <div className="selector-wrapper">
                <div className="selector">
                    <select size="1" id="countrySelector" onChange={() => this.getDataOfSelectedCountry()}>
                        {
                            this.props.countryList
                                .map(ele => {
                                    return (
                                        <option key={ele} className="country-options" value={ele}>
                                            {ele}
                                        </option>
                                    )
                                })
                        }
                    </select>
                </div>
            </div>
        )
    }

}

export default CountrySelector