export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN_SUCCESS":
      return { loading: false, userInfo: action.payload };
    case "USER_LOGIN_FAILURE":
      return { loading: false, error: action.payload };
    case "USER_LOGOUT":
      return null;
    default:
      return state;
  }
};
