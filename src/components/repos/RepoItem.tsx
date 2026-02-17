import type { Repo } from "../../context/github/types";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

interface RepoCardProps {
  repo: Repo;
}

const RepoItem: React.FC<RepoCardProps> = ({ repo }) => {
  const {
    name,
    description,
    html_url,
    watchers_count,
    stargazer_count,
    open_issues,
    forks,
  } = repo;
  return (
    <div className="rounded-md mb-2 card bg-gray-800 hover:bg-gray-900">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
          <a href={html_url}>
            <FaLink className="inline mr-1" />
            {name}
          </a>
          <p className="mb-3 text-sm">{description}</p>
        </h3>
        <div>
          <div className="mr-2 badge badge-info badge-lg">
            <FaEye className="mr-2" />
            {watchers_count}
          </div>
          <div className="mr-2 badge badge-success badge-lg">
            <FaStar className="mr-2" />
            {stargazer_count}
          </div>
          <div className="mr-2 badge badge-error badge-lg">
            <FaInfo className="mr-2" />
            {open_issues}
          </div>
          <div className="mr-2 badge badge-warning badge-lg">
            <FaUtensils className="mr-2" />
            {forks}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
