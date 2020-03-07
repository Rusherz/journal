import thunk from "redux-thunk";
import user from "./user/reducer";
import notification from "./notification/reducer";
import { applyMiddleware, combineReducers, createStore } from "redux";

const bindMiddleware = middleware => {
    if (process.env.NODE_ENV !== "production") {
        const { composeWithDevTools } = require("redux-devtools-extension");

        return composeWithDevTools(applyMiddleware(...middleware));
    }

    return applyMiddleware(...middleware);
};

function configureStore(initialState = {}) {
    const store = createStore(
        combineReducers({
            notification,
            user
        }),
        initialState,
        bindMiddleware([thunk])
    );

    return store;
}

export default configureStore;
