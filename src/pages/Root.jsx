import {  Outlet } from "react-router";
import Nav from "../components/Nav";
export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <Nav />
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
