import api from "../../Plugins/Api";
import { createNotification } from "../notification/action";

export const setUser = data => dispatch => {
    dispatch({
        type: "SET_USER",
        payload: data
    });
};

export const createUser = user => dispatch => {
    api.post("/v1/users", user)
        .then(response => {
            let data = response;

            if (!data.status) {
                dispatch({
                    type: "ERROR",
                    payload: data.errors
                });

                return;
            }

            dispatch({
                type: "CREATE_USER",
                payload: response
            });
        })
        .catch(message => {
            createNotification({
                message: message,
                severity: "error"
            });
        });
};
