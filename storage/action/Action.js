export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_COUNTER = "ADD_COUNTER";
export const STORING_RESULT = "STORING_RESULT";
export const DELETE_RESULT = "DELETE-RESULT";

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}


export const addCounter = (value) => {
    return {
        type: ADD_COUNTER,
        value
    }
}
export const storeResult = () => {
    return {
        type: STORING_RESULT,
    }
}

export const deletResult = (resElId) => {
    return {
        type: DELETE_RESULT,
        resultElementId: resElId

    }
}