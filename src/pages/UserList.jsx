
import useFetch from "../hooks/useFetch";

const UserList = () => {
  const {
    data: users,
    loading,
    error,
  } = useFetch([], "https://jsonplaceholder.typicode.com/users");
  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <div>
      <h3>User List</h3>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default UserList;
