// let localLoggedinUser = null
// if (sessionStorage.loggedinUser) localLoggedinUser = JSON.parse(sessionStorage.loggedinUser)


const initialState = {
  user: null,
}

export function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.user }
    default:
      return state
  }
}
