import { LOGIN_FAILED,LOGIN_START,LOGIN_SUCCESS } from '../actions//actionTypes';
const initialAuthState = {
  user: {},
  error: null,
  isLoggedIn: false,
  inProgress: false,
};
export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        inProgress: true,
      };
    }
    case LOGIN_FAILED: {
        return {
          ...state,
          inProgress: false,
          error:action.error
        };
      }
      case LOGIN_SUCCESS: {
        return {
          ...state,
          user:action.user,
          isLoggedIn:true,
          error:null,
          inProgress:false
        };
      }
    default:
      return state;
  }
}
