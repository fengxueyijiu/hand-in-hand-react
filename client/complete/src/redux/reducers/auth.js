import isEmpty from 'lodash/fp/isEmpty';


const initialState = {
  isAuthenticatde:false,
  curruntUser:{}
}

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case 'AUTH_USER':
      return {
        isAuthenticated: !isEmpty(action.user),
        currentUser: action.user
      }
    default:
      return state
  }
}
