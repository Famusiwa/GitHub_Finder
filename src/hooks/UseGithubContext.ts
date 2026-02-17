import { useContext } from "react";

import GitHubContext from "../context/github/GitHubContext";

export const useGitHubContext = () => {
  const context = useContext(GitHubContext);
  if (!context) {
    throw new Error("useGitHubContext must be used within a GitHubProvider");
  }
  return context;
};