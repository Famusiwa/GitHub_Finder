import { useGitHubContext } from "../context/github/UseGithubContext";

import { FaCodepen, FaStore, FaUserFriends, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/layout/Spinner";
import RepoLists from "../components/repos/RepoLists";




const User = () => {
  const { get_User_Repos, user, loading, error, repos } = useGitHubContext();
  const params = useParams<{ login: string }>();

  useEffect(() => {
    const getUserData = async () => {
       if (params.login) {
      await get_User_Repos(params.login);
    }
    }
    getUserData()
  }, [params.login, get_User_Repos]);

 
  if (!user) return <p>Error: {error}</p>;
  if (loading) {
    return <Spinner />;
  } else {
    const { name, type, avatar_url, login, hireable, followers, public_repos,
          bio, html_url, location, blog, twitter_username, following, public_gists } = user;
    return (
       <div className="w-full mx-auto lg:w-10/12">
          <div className="mb-4">
            <Link to="/" className="btn btn-ghost">Back to Search</Link>
          </div> 
          <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
            <div className="custom-card-image mb-6 md:mb-0">
              <div className="rounded-xl shadow-xl card-image-full">
                <figure>
                  <img src={avatar_url} alt="image_profile" />
                </figure>
                <div className="card-body justify-end">
                  <h2 className="card-title mb-0">
                    {name}
                  </h2>
                  <p>{login}</p>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="mb-6">
                <h1 className="text-3xl card-title">
                  {name}
                  <div className="ml-2 mr-1 badge badge-success">
                    {type}
                  </div>
                  {hireable && (
                    <div className="mx-1 badge badge-info">
                      Hireable
                    </div>
                  )}
                </h1>
                <p>{bio}</p>
                <div className="mt-4 card-action">
                  <a href={html_url} target="blank" rel="noreferrer" className="btn btn-outline">
                    Visit Github Profile
                  </a>
                </div>
              </div>
              <div className="rounded-lg w-full shadow-md bg-base-100 stats">
                  {location && (
                    <div className="stat">
                      <div className="stat-title text-md">
                        Location
                      </div>
                      <div className="text-lg stat-value">
                        {location}
                      </div>
                    </div>
                  )}
                   {blog && (
                    <div className="stat">
                      <div className="stat-title text-md">
                        Website
                      </div>
                      <div className="text-lg stat-value">
                        <a href={`https://${blog}`} target="_blank" rel="noreferrer">{blog}</a>
                      </div>
                    </div>
                  )}
                  {twitter_username && (
                    <div className="stat">
                      <div className="stat-title text-md">
                        Twitter
                      </div>
                      <div className="text-lg stat-value">
                        <a href={`https://x.com/${twitter_username}`} target="_blank" rel="noreferrer">{twitter_username}</a>
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </div>
          <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
            <div className="stat">
              <div className="stat-figure-text-secondary">
                <FaUser className="text-3xl md:text-5xl"/>
              </div>
              <div className="stat-title pr-5">
                Followers
              </div>
              <div className="start-value pr-5 text-3xl md:text 4xl">
                {followers}
              </div>
            </div>
            <div className="stat">
              <div className="stat-figure-text-secondary">
                <FaUserFriends className="flex text-3xl md:text-5xl"/>
              </div>
              <div className="stat-title pr-5">
                Following
              </div>
              <div className="start-value pr-5 text-3xl md:text 4xl">
                {following}
              </div>
            </div>
            <div className="stat">
              <div className="stat-figure-text-secondary">
                <FaCodepen className="flex text-3xl md:text-5xl"/>
              </div>
              <div className="stat-title pr-5">
                Public Repos
              </div>
              <div className="start-value pr-5 text-3xl md:text 4xl">
                {public_repos}
              </div>
            </div>
            <div className="stat">
              <div className="stat-figure-text-secondary">
                <FaStore className="flex text-3xl md:text-5xl"/>
              </div>
              <div className="stat-title pr-5">
                Public Gists
              </div>
              <div className="start-value pr-5 text-3xl md:text 4xl">
                {public_gists}
              </div>
            </div>
          
          </div>
            {/* <RepoLists  /> */}
            <RepoLists repos={repos} />

        </div>
    );
  }
};

export default User;
