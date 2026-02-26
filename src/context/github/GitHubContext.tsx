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

import { createContext, useReducer } from "react";
import { githubReducer } from "./GitHubReducer";
import type { Action, State } from "./types";

// Define context shape
interface GitHubContextType extends State {
  dispatch: React.Dispatch<Action>;
}

const GitHubContext = createContext<GitHubContextType | undefined>(undefined);

export function GitHubProvider({ children }: { children: React.ReactNode }) {
  const initialState = {
    users: [],
    user: null,
    repos: [],
    loading: false,
    error: null,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GitHubContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GitHubContext.Provider>
  );
}

export default GitHubContext;
