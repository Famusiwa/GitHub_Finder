import { useState } from "react";
import { useGitHubContext } from "../../hooks/UseGithubContext";
import { useAlertContext } from "../../hooks/UseAlertContext";

const UserSearch: React.FC = () => {
  const [text, setText] = useState<string>("");
  const { users, searchUsers, clearUser } = useGitHubContext();
  const { setAlert } = useAlertContext();

  // const handleChange = ({
  //   target: { value },
  // }: React.ChangeEvent<HTMLInputElement>) => setText(value);

  //   const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   const { value } = e.target;
  // };

  //or use this instead of above code which destructures the value from the event target directly in the parameter list

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please type in the search area", "error");
    } else {
      searchUsers(text);
      setText("");
    }
  };
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-3 ">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative flex">
              <input
                type="text"
                onChange={handleChange}
                value={text}
                placeholder="Type here to search"
                className="flex-1 bg-gray-300 input input-md text-blue-500 rounded-r-none"
              />
              <button className="rounded-l-none w-25 btn btn-md">Search</button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div
          onClick={clearUser}
          className="btn btn-error rounded-xl w-20  btn-md"
        >
          Clear
        </div>
      )}
    </div>
  );
};

export default UserSearch;
