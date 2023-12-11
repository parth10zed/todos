const Initial_State = {
  User_data: [],
};
export const todoreducers = (state = Initial_State, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        User_data: [...state.User_data, action.payload],
      };

    case "DELETE_DATA":
      const deleteiem = state.User_data.filter(
        (ele, key) => key !== action.payload
      );
      console.log("DELETE", deleteiem);
      return {
        ...state,
        User_data: deleteiem,
      };
    case "UPDATE_DATA":
      const updateitem = state.User_data.map((ele, key) =>
        key == action.d ? action.payload : ele
      );
      console.log("===========>", updateitem);
      return {
        ...state,
        User_data: updateitem,
      };
    default:
      return state;
  }
};
