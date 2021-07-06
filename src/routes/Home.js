import { useQuery, gql } from "@apollo/client";

const getMovies = gql`
  query {
    movies {
      id
      title
      rating
      medium_cover_image
      large_cover_image
      summary
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(getMovies);
  if (loading) {
    return "LOADING..";
  } else {
    console.log("LOADED");
    if (error) {
      return error;
    }
    return data.movies.map((each, key) => <h1 key={key}>{each.id}</h1>);
  }
};
