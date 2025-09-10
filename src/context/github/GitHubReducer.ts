import type {State, Action} from "./type"

// export const initialState: State = {
//   users: [],
//   loading: false,
//   error: null,
// };

// export function githubReducer(state: State, action: Action){
//   switch (action.type) {
//     case "START":
//       return { ...state, loading: true, error: null };
//     case "SUCCESS":
//       return { ...state, users: action.payload, loading: false };
//     case "ERROR":
//       return { ...state, error: action.payload, loading: false };
//     default:
//       return state;
//   }
// }

export const githubReducer = (state: State, action: Action) => {
    switch (action.type) {
    case "START":
      return { ...state, loading: true};
    case "SUCCESS":
      return { ...state, users: action.payload, loading: false };
    case "ERROR":
      return { ...state, error: action.payload, loading: false };
    case "CLEAR":
      return{...state, users: []}
    default:
      return state;
  }
}





 