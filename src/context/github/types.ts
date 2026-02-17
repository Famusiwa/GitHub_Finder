// Define User type
export type User = {
  id: number;
  login: string;
  avatar_url: string;
  type: string
  name: string
  hireable:string
  bio:string
  html_url:string
  location:string
  blog:string
  twitter_username:string
  followers:string
  following:string
  public_repos:string
  public_gists:string
};

export type Repo ={
  id:string
  name:string
  description:string
  html_url:string
  watchers_count:string
  stargazer_count: string
  open_issues:string
  forks:string
}

 

// Define context shape
export type State = {
  users: User[];
  user: User | null;
  repos: Repo[];
  loading: boolean;
  error: string | null;
};

export type Action =
  | { type: "START" }
  | { type: "SUCCESS"; payload: User[] }
  | { type: "ERROR"; payload: string }
  | {type: "GET_USER", payload: User}
  | {type: "GET_REPOS", payload: Repo[]}
  | {type: "CLEAR"; };
