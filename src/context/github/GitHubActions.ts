// import { useCallback } from "react";
import axios, { AxiosError } from "axios";
import type { Repo, User } from "./types";

const API_URL = import.meta.env.VITE_API_URL;

const github = axios.create({
  baseURL: API_URL,
});

export const searchUsers = async (text: string) => {
    const param = new URLSearchParams({
      q: text,
    });
    try {
      const response = await github.get(`/search/users?${param}`);

    //   dispatch({ type: "SUCCESS", payload: response.data.items });
    const items = response.data.items;  
    return items;
    } catch (err) {
      // Check if error is an Axios error
      if (err instanceof Error) {
        const error = err as AxiosError<{ message: string }>;
        // Prefer server's message if available
        const message = error.response?.data?.message || error.message;
        // dispatch({ type: "ERROR", payload: message });
        throw new Error(message);
      }
    }
  };

  
//   const get_User_Repos = useCallback(async (login: string) => {
//     const params = new URLSearchParams({
//       sort: "created",
//       per_page: "10",
//     });
//     try {
//       const [user, repos] = await Promise.all([
//         github.get(`/users/${login}`),
//         github.get(`${API_URL}/users/${login}/repos?${params}`),
//       ]);
//     //   dispatch({ type: "GET_USER", payload: user.data });
//     return user.data;
//     //   dispatch({ type: "GET_REPOS", payload: repos.data });
//     return repos.data;  
//     } catch (err) {
//       if (axios.isAxiosError(err)) {
//         // const error = err as AxiosError<{ message: string }>;
//         const message = err.response?.data?.message || err.message;
//         // dispatch({ type: "ERROR", payload: message });
//         throw new Error(message);
//       }
//     }
//   }, []);

  export const get_User_Repos = async (login: string): Promise<{user: User, repos: Repo[]}> => {
    const params = new URLSearchParams({
      sort: "created",
      per_page: "10",
    });
    try {
      const [user, repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`${API_URL}/users/${login}/repos?${params}`),
      ]);
    return {user: user.data, repos: repos.data};

    } catch (err) {
      if (axios.isAxiosError(err)) {
        const message = err.response?.data?.message || err.message;
        throw new Error(message);
      }
    }
    return {user: {} as User, repos: [] as Repo[]}; 
  };

 



  
  

