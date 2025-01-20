import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";

const PostDetails = () => {
  const { id } = useParams();
  const {
    data: post,
    loading,
    error,
  } = useFetch(null, `https://jsonplaceholder.typicode.com/posts/${id}`);
  return (
    <div>
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
