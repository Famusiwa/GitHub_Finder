
import { useEffect, useContext } from "react"
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GitHubContext from "../../context/github/GitHubContext";




const UserResult:React.FC = () => {
    const context = useContext(GitHubContext)
    
    
  if (!context) {
    throw new Error("UserResult must be used within a GitHubProvider");
  }

  const { users, loading, error, fetchUsers } = context;

useEffect( () => {
    fetchUsers();
}, [fetchUsers]) 


    if (error) return <p>Error: {error}</p>;
     if (loading){
        return <Spinner />;
     } else{
        return (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
            {users.map((user => (
                <UserItem key={user.id} user={user} />
        )))}
        </div>
      )
    }
  
}

export default UserResult
