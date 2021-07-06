import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const GETMOVIESBYID = gql`
  query getMoviesById($id: Int!) {
    movie(id: $id) {
      id
      title
    }
  }
`;

export default () => {
  const { id } = useParams();
  console.log(id);
  const { loading, error, data } = useQuery(GETMOVIESBYID, {
    variables: { id },
  });
  if (loading) {
    console.log("LOADING");
  } else {
    const { movie } = data;
    return (
      <div>
        <h1>{movie.title}</h1>
      </div>
    );
  }
  return "DETAIL";
};
