// Define User type
export type User = {
  id: number;
  login: string;
  avatar_url: string;
};

// Define context shape
export type State = {
  users: User[];
  loading: boolean;
  error: string | null;
};

export type Action =
  | { type: "START" }
  | { type: "SUCCESS"; payload: User[] }
  | { type: "ERROR"; payload: string }
  | {type: "CLEAR"; };
