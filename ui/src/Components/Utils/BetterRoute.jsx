import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

export default class BetterRoute extends Component {
    constructor() {
        super()

        this.state = {
            initProps: true
        }
    }
    
    getProps() {
        let pageProps = {};

        if (this.props.component.initProps) {
            console.log('here1')
            this.props.component.initProps().then(result => {
                console.log('here5', result)
            });
            console.log('here', pageProps)
        }

        return pageProps
    }

    render() {
        let pageProps = {}

        if (this.state.initProps && this.props.component && this.props.component.initProps) {
            pageProps = this.getProps();
            console.log('here', pageProps)
        }

        console.log(this.props, pageProps)

        return <Route {...this.props} {...pageProps} />;
    }
}
