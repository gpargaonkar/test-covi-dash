import axios from 'axios'

//API calls

//fetching data of all country

export const getAllCountry = () => {
    return new Promise(function( resolve, reject){
        axios.get(`https://disease.sh/v2/countries`)
        .then( res => {
            console.log(" Res from axios getAllCountry", res)
            resolve(res.data)
        })
    })
}

//fetching historical data for specific country

export const getCountryHistoricalData = (country) => {
    return new Promise(function(resolve, reject){
        axios.get(`https://api.covid19api.com/total/country/${country}`)
        .then( res => {
            console.log("Res from axios country - date wise data")
            resolve(res.data)
        })
    })
}

//fetching data overall world data

export const getOverallDetails = () => {
    return new Promise(function(resolve, reject){
        axios.get(`https://disease.sh/v2/all`)
        .then( res => {
            console.log("Res from axios world data", res)
            resolve(res.data)
        })
    })
}

//fetching historical world data 

export const getOverallHistoricalData = () => {
    return new Promise(function(resolve, reject){
        axios.get(`https://disease.sh/v2/historical/all?lastdays=60`)
        .then( res => {
            console.log("Res from axios world data date wise", res)
            resolve(res.data)
        })
    })
}