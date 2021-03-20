import { applyMiddleware, createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { DECREMENT, INCREMENT } from "./action/Action";
import logger from "./middleware/logger";
import rootReducer from "./reducer/Reducer";



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(logger, thunk))

);

console.log("store state ", store.getState())

store.subscribe(() => console.log("sub   ", store.getState()))



console.log("store state ", store.getState())

export default store;