import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { shortenText } from "../tools";

const Loading = styled.div`
  font-weight: bold;
  font-size: 30px;
  color: white;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(19, 9, 121, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
`;

const DetailsLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 30px;
  color: white;
`;
const Rating = styled.p`
  font-weight: bold;
  font-size: 30px;
  color: white;
`;
const Summary = styled.p`
  font-weight: bold;
  font-size: 30px;
  color: white;
`;

const DetailsRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const Poster = styled.img`
  width: 25vw;
  margin-left: 5vw;
`;

const MovieDetails = styled.div`
  display: flex;
  flex-direction: row;
  width: 50vw;
`;

const GETMOVIESBYID = gql`
  query getMoviesById($id: Int!) {
    movie(id: $id) {
      id
      title
      description_full
      rating
      large_cover_image
    }
  }
`;

export default () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GETMOVIESBYID, {
    variables: { id },
  });
  console.log(data);
  return (
    <Container>
      {loading && <Loading>Loading..</Loading>}
      {!loading && (
        <MovieDetails>
          <DetailsLeft>
            <Title>{shortenText(data?.movie?.title, 50)}</Title>
            <Rating>{data?.movie?.rating}</Rating>
            <Summary>
              {shortenText(data?.movie?.description_full, 250) + "..."}
            </Summary>
          </DetailsLeft>
          <DetailsRight>
            <Poster src={data?.movie.large_cover_image}></Poster>
          </DetailsRight>
        </MovieDetails>
      )}
    </Container>
  );
};
