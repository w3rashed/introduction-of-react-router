import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, phone } = user;

  const userStyle = {
    border: "2px solid green",
    padding: "10px",
    borderRadius: "20px",
  };
  return (
    <div style={userStyle}>
      <h2>{name}</h2>
      <p>email:{email}</p>
      <p>Phone:{phone}</p>
      <Link to={`/user/${id}`}>Users Details</Link>
    </div>
  );
};

export default User;
