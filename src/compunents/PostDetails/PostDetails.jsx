import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import "./PostDetails.css";

const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body } = post;
  const { postId } = useParams();
  console.log(postId);

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h3>Post details about:{id}</h3>
      <p>{title}</p>
      <p>{body}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;
