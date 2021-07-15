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
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const MovieContainer = styled.div`
  width: 80vw;
  display: grid;
  grid-template-columns: 20% 20% 20% 20%;
  align-items: center;
  justify-content: center;
  justify-items: center;
  grid-row-gap: 60px;
  grid-column-gap: 5px;
  position: relative;
  top: -30px;
  @media only screen and (max-width: 1500px) {
    grid-template-columns: 20% 20% 20%;
    grid-column-gap: 20px;
    width: 90vw;
  }
  @media only screen and (max-width: 1300px) {
    grid-template-columns: 20% 20%;
    grid-column-gap: 130px;
    width: 90vw;
  }
  @media only screen and (max-width: 750px) {
    grid-template-columns: 20% 20%;
    grid-column-gap: 130px;
    width: 90vw;
  } ;
`;

const Loading = styled.div`
  margin-top: 30vh;
  font-weight: bold;
  font-size: 30px;
  color: gray;
`;

const GETMOVIES = gql`
  query {
    movies {
      id
      medium_cover_image
      isLiked @client
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
              isLiked={each.isLiked}
            />
          ))}
      </MovieContainer>
    </Container>
  );
};
