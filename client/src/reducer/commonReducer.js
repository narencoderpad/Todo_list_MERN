const commonReducer = (state, action) => {
  switch (action.type) {
    case 'GET_DATA': 
    console.log(action)
    return {
        ...state,TaskList:action.TaskList
    };
    default: return state;
  }
};
export default commonReducer;