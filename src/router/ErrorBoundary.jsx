import { useRouteError, Link } from "react-router-dom";

export default function ErrorBoundary() {
  const error = useRouteError();

  console.warn("error boundary: ", error);

  switch (error.status) {
    case 404: {
      return (
        <div>
          <h2>Hmm..</h2>
          <h2>{error.statusText}</h2>
          <h2>
            Let&apos;s go <Link to={"/"}>home.</Link>
          </h2>
        </div>
      );
    }
    default: {
      return (
        <div>
          <h2>
            Something went wrong. Please go <Link to={"/"}>home</Link>{" "}
          </h2>
        </div>
      );
    }
  }
}
