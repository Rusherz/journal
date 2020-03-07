import { connect } from "react-redux";
import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { createUser, setUser } from "../../store/user/action";

export class Register extends Component {
    componentDidUpdate(nextProps) {
        console.log(this.props)
    }

    onChange(event) {
        console.log(event.target.name, event.target.value);
        this.props.setuser({
            [event.target.name]: event.target.value
        });
    }

    render() {
        if (!this.props.user) {
            return null;
        }

        return (
            <Grid container justify="center" spacing={1}>
                <Grid item container justify="center" xs={12} md={6} lg={3}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            name="firstName"
                            defaultValue={this.props.user.firstName}
                            label="First name"
                            onChange={this.onChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            name="lastName"
                            defaultValue={this.props.user.lastName}
                            label="Last name"
                            onChange={this.onChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            name="username"
                            defaultValue={this.props.user.username}
                            label="Username"
                            onChange={this.onChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            name="email"
                            defaultValue={this.props.user.email}
                            label="Email"
                            onChange={this.onChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            type="password"
                            name="password"
                            defaultValue={this.props.user.password}
                            label="Password"
                            onChange={this.onChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            type="password"
                            name="confirmPassword"
                            defaultValue={this.props.user.confirmPassword}
                            onChange={this.onChange}
                            label="Confirm Password"
                        />
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        style={{
                            marginTop: "1rem"
                        }}
                    >
                        <Button fullWidth variant="outlined" color="primary">
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps, {
    createUser,
    setUser
})(Register);
