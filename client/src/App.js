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
import Register from "./components/auth/Register";
const App = () => {
    return (
        <Router className="App">
            <Fragment>
                <Navbar/>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/" component={About}/>
                        <Route exact path='/register' component={Register} />
                    </Switch>
                </div>
            </Fragment>
        </Router>
    );
}

export default App;
