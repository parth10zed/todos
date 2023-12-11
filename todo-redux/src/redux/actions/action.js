export const Add = (iteams) => {
  return {
    type: "ADD_DATA",
    payload: iteams,
  };
};
export const DELETE = (id) => {
  return {
    type: "DELETE_DATA",
    payload: id,
  };
};
export const UPDATE = (items, id) => {
  return {
    type: "UPDATE_DATA",
    payload: items,
    d: id,
  };
};

