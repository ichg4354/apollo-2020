import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ApolloProvider } from "@apollo/client";
import { client } from "./routes/apollo";

ReactDOM.render(<App />, document.getElementById("root"));
