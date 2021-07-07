import { useQuery, gql } from "@apollo/client";
import Movies from "../components/Movies";
import styled from "styled-components";

const Header = styled.div`
  height: 30vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(19, 9, 121, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
`;

const HeaderText = styled.h1`
  color: whitesmoke;
  font-weight: bold;
  font-size: 45px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const MovieContainer = styled.div`
  width: 100%;
  display: flex;
  grid-template-columns: 20% 20% 20% 20% 20%;asdf
  grid-template-rows: 20% 20% 20% 20% 20%;
`;

const Loading = styled.div``;

const GETMOVIES = gql`
  query {
    movies {
      id
      title
      rating
      medium_cover_image
      large_cover_image
      summary
      description_full
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(GETMOVIES);
  return (
    <Container>
      <Header>
        <HeaderText>APOLLO MOVIES</HeaderText>
      </Header>
      {loading && <Loading>Loading..</Loading>}
      <MovieContainer>
        {!loading &&
          data?.movies.map((each) => (
            <Movies
              key={each.id}
              id={each.id}
              poster={each.medium_cover_image}
            />
          ))}
      </MovieContainer>
    </Container>
  );
};
