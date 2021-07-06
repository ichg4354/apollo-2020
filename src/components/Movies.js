import { Link } from "react-router-dom";

export default ({ id }) => {
  return (
    <Link to={`/${id}`}>
      <h1>{id}</h1>
    </Link>
  );
};
