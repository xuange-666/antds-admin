import data from "./state"
let reducer = (state = data,action) => {
    switch (action.type) {
        case "ajaxTable":
            return state = action.data;
        case "decrement":
            return state = state;
        default:
            return state;
    }
}

export default reducer;