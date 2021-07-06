import { useQuery, gql } from "@apollo/client";
import Movies from "../components/Movies";

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
  if (loading) {
    return "LOADING..";
  } else {
    console.log("LOADED");
    if (error) {
      return error;
    }
    return data.movies.map((each) => <Movies key={each.id} id={each.id} />);
  }
};
