import { createStore, applyMiddleware } from "redux";
import { phonesReducer } from "./redux/phones";

const logger = store => next => action => {
    console.log("previousState", store.getState())
    console.log("action", action)
    next(action)
    console.log("nextState", store.getState())
}

export const store = createStore(phonesReducer, applyMiddleware(logger));