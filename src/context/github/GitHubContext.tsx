
// //Use Context with UseState 

// import { createContext, useState, useCallback } from "react";
// import axios, { AxiosError } from "axios";
// import type {State, User} from "./type"


// // Define context shape
// type GitHubContextType = State & {
//   fetchUsers: () => Promise<void>;
// };

// // Create context with initial undefined (to be provided later)
// const GitHubContext = createContext<GitHubContextType | undefined>(undefined);

// // // Define props for provider
// // type UserProviderProps = {
// //   children: ReactNode;
// // };

// const API_URL = import.meta.env.VITE_API_URL;



// //Using Arrow function, importing reactnode into arrow function 

// export const GitHubProvider:React.FC<{ children: React.ReactNode }> = ({ children }) => {

//   const [users, setUsers] = useState<User[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   const fetchUsers = useCallback(async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get<User[]>(`${API_URL}/users`);
//       setUsers(response.data);
//     } catch (err: unknown) {
//       const error = err as AxiosError;
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   }, []); 

//   return (
//     <GitHubContext.Provider value={{ users, loading, error, fetchUsers }}>
//       {children}
//     </GitHubContext.Provider>
//   );
// }


// export default GitHubContext;







//UseContext with UseReducer

import { createContext, useReducer, useCallback } from "react";
import type { ReactNode } from "react";
import axios, { AxiosError } from "axios";
// import { initialState, githubReducer } from "./GitHubReducer";
import { githubReducer } from "./GitHubReducer";
import type {State} from "./type"


// Define context shape
type GitHubContextType = State & {
  searchUsers: (text:string) => Promise<void>;
  clearUser: () => void
};

// Create context with initial undefined (to be provided later)
const GitHubContext = createContext<GitHubContextType | undefined>(undefined);

// Define props for provider
type UserProviderProps = {
  children: ReactNode;
};

const API_URL = import.meta.env.VITE_API_URL;


export function GitHubProvider({ children }: UserProviderProps) {
  const initialState = {
  users: [],
  loading: false,
  error: null,
};
  const [state, dispatch] = useReducer(githubReducer, initialState);

  //Filter Users
  const searchUsers = useCallback(async (text:string) => {
    setLoading()
    const param = new URLSearchParams({
      q: text
    })
    try {
      const response = await axios.get(`${API_URL}/search/users?${param}`);

      dispatch({ type: "SUCCESS", payload: response.data.items });
    } catch (err: unknown) {
      const error = err as AxiosError;
      dispatch({ type: "ERROR", payload: error.message });
    }
  }, []);


  //Clear Users
  const clearUser = () => dispatch({type: "CLEAR"})

  //Create a function for loading to be resuable 
  const setLoading = () => dispatch({ type: "START" });
  

  return (
    <GitHubContext.Provider value={{ ...state, searchUsers, clearUser }}>
      {children}
    </GitHubContext.Provider>
  );
}

export default GitHubContext

