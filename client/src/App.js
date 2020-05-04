import React, {Fragment} from 'react';
import './App.css';
import Navbar from "./components/layout/Navbar";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
const App = () => {
    return (
        <Router className="App">
            <Fragment>
                <Navbar/>
                <div className="container">
                    <Switch>
                        <Route exact={true} path="/" component={Home}/>
                        <Route exact={true} path="/" component={About}/>
                    </Switch>
                </div>
            </Fragment>
        </Router>
    );
}

export default App;
