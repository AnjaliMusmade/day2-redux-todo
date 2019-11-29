export default function todoReducer(state: [] = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    // let newState=state.concat({
    //   text: action.text,
    //     completed:false
    // });

    // return newState;
    case "TOGGLE_TODO":
      return state.map((item, index) => {
        if (item.text == action.text) {
          return {
            ...item,
            completed: !action.completed
          };
        } else return item;
      });

    default:
      return state;
  }
}
