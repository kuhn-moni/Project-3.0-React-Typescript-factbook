import React from "react";
import { useRouteError } from "react-router-dom";

interface RouteErrorType {
  data: string;
  error: {
    message: string;
    stack: string;
  };
  internal: boolean;
  status: number;
  statusText: string;
}

const NoMatch = () => {
  const error = useRouteError() as RouteErrorType;
  console.log("error :>> ", error);
  return (
    <div>
      <h1>Nothing to see here...</h1>
      <h3>
        {error.status} {error.statusText}
      </h3>
      <p>{error.error.message}</p>
    </div>
  );
};

export default NoMatch;
