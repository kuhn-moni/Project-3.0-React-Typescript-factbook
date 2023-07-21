import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  NavLink,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";
import Main from "./views/Main";
import NoMatch from "./views/NoMatch";
import { AuthContextProvider } from "./contexts/AuthContext";
import Details from "./views/Details";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<NoMatch />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/main" element={<Main />} />
        <Route path="main/:name" element={<Details />} />
      </Route>
    )
  );

  return (
    <>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </>
  );
}

const Root = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/main">Main</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;

// think about which data to display
// merge flag assests into the relevant countries
//
