import { ADD_TASK,UPDATE_TASK,DELETE_TASK,FETCH_TASKS } from "../types/Type";

let initialState = {
  error:'',
  tasks: [],
};

function ToDoReducer(state = initialState, action) {
  switch (action.type) {

    case FETCH_TASKS:
      console.log("data in reducer from fetch action", action.payload);
      // work  / logic will be her
      return {
        ...state,
        tasks: action.payload,
      };


    case ADD_TASK:
      console.log("data in reducer from action", action.payload);
      // work  / logic will be her
      let newTasks = state.tasks;
      newTasks.push(action.payload)
      return {
        ...state,
        tasks: newTasks
      };

    case UPDATE_TASK:
      console.log("data in reducer from action", action.payload);
      // work  / logic will be here
      let updatedTasks = state.tasks.map((item)=>{
        if(action.payload.docID === item.docID){
          return {...action.payload.data,...action.payload.docID}
        }
        else {
          return item
        }
      })
      return {
        ...state,
        tasks : updatedTasks
      };

    case DELETE_TASK:
      console.log("data in reducer for delete action", action.payload);
      let filterTasks = state.tasks.filter((item)=> item.docID !== action.payload)
      return {
        ...state,
        tasks: filterTasks
      };

    default:
      return state;
  }
}

export default ToDoReducer;