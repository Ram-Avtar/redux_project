import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { DECREMENT, INCREMENT } from "./action/Action";
import rootReducer from "./reducer/Reducer";


const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log("store state ", store.getState())

store.subscribe(() => console.log("sub   ", store.getState()))

// store.dispatch({ type: INCREMENT });
// store.dispatch({
//     type: DECREMENT
// });

console.log("store state ", store.getState())

export default store;