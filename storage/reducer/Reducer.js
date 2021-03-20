import { combineReducers } from "redux"
import { ADD_COUNTER, DECREMENT, DELETE_RESULT, INCREMENT, STORING_RESULT } from "../action/Action"


const initialState = {
    counter: 0,
    result: []
}

export const calculationReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT: {
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        case DECREMENT: {
            return {
                ...state,
                counter: state.counter - 1
            }
        }
        case ADD_COUNTER:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case STORING_RESULT:
            return {
                ...state,
                result: state.result.concat({ id: new Date(), value: state.counter })
            }
        case DELETE_RESULT:
            const upDatedArray = state.result.filter(result => result.id !== action.resultElementId)
            return {
                ...state,
                result: upDatedArray
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    cal: calculationReducer
})

export default rootReducer;