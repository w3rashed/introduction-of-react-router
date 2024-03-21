import { Link, useNavigate } from "react-router-dom";
import "./Post.css";

const Post = ({ post }) => {
  const { id, title, body } = post;
  const navigate = useNavigate();
  const handleShowDetail = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div className="postStyle">
      <h4>Post of id:{id}</h4>
      <h3>{title}</h3>
      {/* <Link to={`/post/${id}`}>Post Details</Link> */}
      <div className="">
        <Link to={`/post/${id}`}> Post Details</Link>
        <Link to={`/post/${id}`}>
          <button>Post Details</button>
        </Link>
        <button onClick={handleShowDetail}>Click to see details</button>
      </div>
    </div>
  );
};

export default Post;
