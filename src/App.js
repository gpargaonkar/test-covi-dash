import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import WorldCount from './components/WorldCount/WorldCount';
import CountryCount from './components/CountryCount/CountryCount';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer';

class App extends Component {


    render() {

        return (
            <Router>
                <div className="App">
                    <Header />
                    <Switch>
                        <Route path={'/'} exact component={WorldCount} />
                        <Route path={'/country'} exact component={CountryCount} />
                    </Switch>
                    <Footer />
                </div>
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
