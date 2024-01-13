export const actionTypes = {
  SUCCESSFUL: 'SUCCESSFUL_LOGIN',
  LOGOUT: 'LOGOUT_SUCCESSFUL',
};

const adminReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SUCCESSFUL:
      return { ...state, userIsInactive: false };

    case actionTypes.LOGOUT:
      return { ...state, userIsInactive: true };

    default:
      throw new Error('no matching action type');
  }
};

export default adminReducer;
