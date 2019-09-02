const INITIAL_STATE = {
  currentUser: null
};
const userReducer = (state = INITIAL_STATE, action) => {
  const { type, playload } = action;

  switch (type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: playload
      };

    default:
      return state;
  }
};

export default userReducer;
