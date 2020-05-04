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
import Login from "./components/auth/Login";
import PrivateRoute from "./components/routing/PrivateRoute";
import Alerts from "./components/layout/Alert";

const App = () => {
    return (
        <Router className="App">
            <Fragment>
                <Navbar/>
                <div className="container">
                    <Alerts/>
                    <Switch>
                        <PrivateRoute exact path="/" component={Home}/>
                        <Route exact path="/" component={About}/>
                        <Route exact path='/register' component={Register}/>
                        <Route exact path='/login' component={Login}/>
                    </Switch>
                </div>
            </Fragment>
        </Router>
    );
}

export default App;
