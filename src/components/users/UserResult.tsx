import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import { useGitHubContext } from "../../hooks/UseGithubContext";

const UserResult: React.FC = () => {
  const { users, loading, error } = useGitHubContext();

  if (error) return <p>Error: {error}</p>;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

export default UserResult;
