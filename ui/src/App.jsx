import "./App.scss";
import { connect } from "react-redux";
import React, { Component } from "react";
import Header from "./Components/Header";
import Paper from "@material-ui/core/Paper";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Notification from "./Components/Utils/Notification";
import { createNotification } from "./store/notification/action";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

export class App extends Component {
    componentDidMount() {}

    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Paper
                        elevation={0}
                        style={{
                            padding: "1rem"
                        }}
                    >
                        <Notification />
                        <Switch>
                            <Route path="/" component={Register} />
                            <Route path="/login" component={Login} />
                        </Switch>
                    </Paper>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    ...state.user,
    ...state.notification
});

export default connect(mapStateToProps, { createNotification })(App);
