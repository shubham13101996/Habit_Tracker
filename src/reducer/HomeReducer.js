// initial state
const initialData = {
  list: [],
};

// reducer take state  and action as argument
const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    // action to perform when type of action is to add task
    case "ADD_TASK":
      const { id, task, description } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            task: task,
            description: description,
          },
        ],
      };
    // action to perform when type of action is to delete task
    case "DELETE_TASK":
      const newList = state.list.filter((elem) => elem.id !== action.id);
      return {
        ...state,
        list: newList,
      };
    // if not match with the action type return current state
    default:
      return state;
  }
};
export default todoReducers;
