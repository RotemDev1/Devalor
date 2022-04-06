const initialState = {
    indexPage: 1
}

export function uiReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'NEXT_INDEX_STEPS':
            return { ...state, indexPage: action.value }
        default:
            return state
    }
}