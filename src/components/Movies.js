import { Link } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";
import styled from "styled-components";

const LIKEMOVIE = gql`
  mutation likeMovie($id: Int!) {
    likeMovie(id: $id) @client
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

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
    width: 180px;
    height: 280px;
  } ;
`;

export default ({ id, poster, isLiked }) => {
  const [func] = useMutation(LIKEMOVIE, { variables: { id: id } });
  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster src={poster} />
      </Link>
      <button onClick={() => func()}>{isLiked ? "Unlike" : "Like"}</button>
    </Container>
  );
};
