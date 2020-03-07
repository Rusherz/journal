import api from "../../Plugins/Api";
import { connect } from "react-redux";
import React, { Component } from "react";

export class Login extends Component {
    async componentDidMount() {
        // Parse the url params
        let params = new URLSearchParams(this.props.location.search);

        // Get the oatuh code for orcid if its present
        let code = params.get("code");

        // If we are logged in redirect
        if (this.props.user.orcid) {
            this.props.history.push(params.get("redirect") || "/");
        }

        // Check if we have a code,
        // if not then redirect to orcid oauth page,
        if (!code) {
            window.location = `https://orcid.org/oauth/authorize?client_id=APP-TQMAHH6AA8KWSC3L&response_type=code&scope=/authenticate&redirect_uri=${
                window.location.origin
            }/login${
                this.props.location.redirectTo
                    ? "?redirect=" + this.props.location.redirectTo
                    : "/testest"
            }`;
        }

        // otherwise get a access object for our code,
        // and fetch the user
        else {
            try {
                let accessObject = await api.get(
                    `/v1/oauth/orcid?code=${code}`
                );

                this.props.fetchUser(accessObject);
            } catch (message) {
                this.props.createNotification({
                    message: message,
                    severity: "error"
                });

                this.setState({
                    total: 0,
                    loading: false,
                    submissions: []
                });
            }
        }
    }

    componentDidUpdate(nextProps) {
        // If the updated prop has a ocrid
        if (this.props.user.orcid) {
            let path = "/";

            // If we were pass a redirect parameter,
            // redirect there isntead
            let params = new URLSearchParams(this.props.location.search);

            this.props.history.push(params.get("redirect") || "/");
        }
    }

    render() {
        return <div></div>;
    }
}

const mapStateToProps = state => ({
    ...state.user
});

export default connect(mapStateToProps, {})(Login);
