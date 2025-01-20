import { Link } from "react-router";
import useFetch from "../hooks/useFetch";
const PostList = () => {
  const {
    data: posts,
    loading,
    error,
  } = useFetch([], "https://jsonplaceholder.typicode.com/posts");

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h3>Post List</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
