export default (store) => (next) => (action) => {
    console.log(action)
    if(typeof action === "function"){
        action(store.dispatch);
        return;
    }
    next(action)
}