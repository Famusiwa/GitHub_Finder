import { Link } from "react-router-dom"

type User = {
  id: number
  login: string
  avatar_url: string
}

type UserItemProp = {
    user: User
}


const UserItem:React.FC<UserItemProp> = ({user: {login, avatar_url}}) => {
  return (
    <div className="card shadow-md compact side bg-base-100">
        <div className=" flex-row items-center space-x-4 card-body">
            <div>
                <div className="avatar">
                    <div className="rounded-full shadow w-14 h-14">
                        <img src={avatar_url} alt="ProfileImage" />
                    </div>
                </div>
            </div>
            <div>
                <h2 className="card-title">{login}</h2>
                <Link to={`/user/${login}`} className="text-base-content">
                    Visit Profile
                </Link>
            </div>
        </div>
    </div>
  )
}

export default UserItem
