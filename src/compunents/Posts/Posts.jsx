import { useLoaderData } from "react-router-dom";
import Post from "../post/Post";
import "./Posts.css";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      Posts:{posts.length}
      <div className="postsStyle">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
