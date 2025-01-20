import { useRouteError } from "react-router";
import Nav from "../components/Nav";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <Nav />
      </div>
      <div id="detail">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </>
    
  );
}
