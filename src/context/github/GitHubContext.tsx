import { createContext, useState, useCallback } from "react";
import type { ReactNode } from "react";
import axios, { AxiosError } from "axios";

// Define User type
type User = {
  id: number;
  login: string;
  avatar_url: string;
};

// Define context shape
type GitHubContextType = {
  users: User[];
  loading: boolean;
  error: string | null;
  fetchUsers: () => Promise<void>;
};

// Create context with initial undefined (to be provided later)
const GitHubContext = createContext<GitHubContextType | undefined>(undefined);

// Define props for provider
type UserProviderProps = {
  children: ReactNode;
};

const API_URL = import.meta.env.VITE_API_URL;

// Provider component (modern style, no FC)
export function GitHubProvider({ children }: UserProviderProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get<User[]>(`${API_URL}/users`);
      setUsers(response.data);
    } catch (err: unknown) {
      const error = err as AxiosError;
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []); 

  return (
    <GitHubContext.Provider value={{ users, loading, error, fetchUsers }}>
      {children}
    </GitHubContext.Provider>
  );
}

export default GitHubContext;
