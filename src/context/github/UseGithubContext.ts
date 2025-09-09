import { useContext } from "react";

import GitHubContext from "./GitHubContext";

export const useGitHubContext = () => {
  const context = useContext(GitHubContext);
  if (!context) {
    throw new Error("useGitHubContext must be used within a GitHubProvider");
  }
  return context;
};