import { useRouteError } from "react-router-dom";

const Error = () => {
  // useRouteError returns detailed information about the error in the form of an object
  const error = useRouteError();
  return (
    <div className="error">
      <h1>
        {error.status} : {error.statusText}
      </h1>
    </div>
  );
};

export default Error;
