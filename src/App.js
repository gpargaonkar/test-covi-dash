import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import WorldCount from './components/WorldCount/WorldCount';
import CountryCount from './components/CountryCount/CountryCount';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {


    render() {

        return (
            <Router>
                <Header />
                <Switch>
                        <Route path={process.env.PUBLIC_URL+'/'} exact  component={WorldCount} />
                        <Route path='/country' exact component={CountryCount} />
                </Switch>
            </Router>
        );
    }


}

export default App;


// code for date number to date: alert(new Date(1273185387).toUTCString());

/*function countrySelectedCallbackFunction(country){
  console.log("App",country)
}
*/
