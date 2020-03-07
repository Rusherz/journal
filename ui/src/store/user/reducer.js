const initialState = {
    email: "",
    username: "",
    lastName: "",
    firstName: ""
};

export default function(state = initialState, action) {
    switch (action.type) {
        case "CREATE_USER":
        case "SET_USER":
            // return the newly updated user and session
            return {
                ...state,
                ...action.payload
            };
        default:
            // return the current state
            return state;
    }
}
