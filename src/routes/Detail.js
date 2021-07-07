import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";



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
  const { loading, error, data } = useQuery(GETMOVIESBYID, {
    variables: { id },
  });
  if (loading) {
    return "LOADING..";
  } else {
    if (data) {
      return (
        <div>
          <h1>{data?.movie?.title}</h1>
        </div>
      );
    }
  }
  return "DETAIL";
};
