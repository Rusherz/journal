import md5 from "md5";
import { connect } from "react-redux";
import React, { Component } from "react";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { Link, Redirect } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

export class Header extends Component {
    constructor() {
        super();

        this.state = {
            open: false
        };
    }

    ToggleMenu = () => {
        this.setState({
            open: !this.state.open
        });
    };

    render() {
        return (
            <AppBar position="sticky" className="App-Header">
                <Toolbar>
                    <Typography variant="h4">Better Journal</Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

const mapStateToProps = state => ({
    ...state.user
});

export default connect(mapStateToProps, null)(Header);
