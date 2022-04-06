export function nextSteps(value) {
    return async dispatch => {
        try {
            dispatch({ type: 'NEXT_INDEX_STEPS', value })
        } catch (err) {
            console.log("UIActions: err in next ");
        }
    }
}