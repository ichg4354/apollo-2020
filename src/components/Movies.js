import { Link } from "react-router-dom";
import styled from "styled-components";

const Poster = styled.img`
  width: 300px;
  height: 400px;
`;

export default ({ id, poster }) => {
  return (
    <Link to={`/${id}`}>
      <Poster src={poster} />
      <h1>{id}</h1>
    </Link>
  );
};
