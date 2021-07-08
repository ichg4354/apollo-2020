import { Link } from "react-router-dom";
import styled from "styled-components";

const Poster = styled.img`
  border-radius: 20px;
  width: 250px;
  height: 350px;
  @media only screen and (max-width: 1500px) {
    width: 250px;
    height: 350px;
  }
  @media only screen and (max-width: 1300px) {
    width: 250px;
    height: 350px;
  }
  @media only screen and (max-width: 750px) {
    width: 150px;
    height: 250px;
  } ;
`;

export default ({ id, poster }) => {
  return (
    <Link to={`/${id}`}>
      <Poster src={poster} />
      <h1>{id}</h1>
    </Link>
  );
};
